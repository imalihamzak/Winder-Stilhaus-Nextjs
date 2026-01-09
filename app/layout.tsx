import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ConsentBanner from "@/components/ConsentBanner";

export const metadata: Metadata = {
  title: "Winder&Stilhaus | Premium Interior Design & Renovation Services in West Yorkshire",
  description: "Luxury interior design and renovation services across West Yorkshire. Premium kitchens, bathrooms, and full-home design with expert craftsmanship. Instant pricing guide available.",
  metadataBase: new URL("https://winderstilhaus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winder&Stilhaus | Premium Interior Design & Renovation Services",
    description: "Luxury interior design and renovation services across West Yorkshire. Premium kitchens, bathrooms, and full-home design.",
    type: "website",
    locale: "en_GB",
  },
};

// GTM and GA4 IDs
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-W7GGZC6Q";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-F9M32QBL4V";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#1D1D1D]">
      <head>
        {/* Initialize Consent Mode v2 with default deny BEFORE any scripts */}
        <Script id="consent-mode-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent mode (deny all analytics until user accepts)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              personalization_storage: 'denied',
              security_storage: 'granted',
            });
            
            // Check if consent was previously given and update
            (function() {
              try {
                const consent = localStorage.getItem('cookie-consent');
                if (consent === 'accepted') {
                  gtag('consent', 'update', {
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                    analytics_storage: 'granted',
                    personalization_storage: 'granted',
                  });
                  
                  // Load GTM and GA4 if consent already given
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                  
                  // Load GA4
                  var gaScript = document.createElement('script');
                  gaScript.async = true;
                  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
                  document.head.appendChild(gaScript);
                  
                  gtag('js', new Date());
                  gtag('config', '${GA4_ID}');
                }
              } catch(e) {
                console.error('Error checking consent:', e);
              }
            })();
          `}
        </Script>
        
        {/* Google Tag Manager - Only loads if consent already given (otherwise loaded via consent banner) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            // Only load if consent was not already given (will be loaded by consent banner on accept)
            (function() {
              try {
                const consent = localStorage.getItem('cookie-consent');
                if (consent !== 'accepted') {
                  // Scripts will be loaded when user accepts consent via ConsentBanner component
                  return;
                }
              } catch(e) {
                console.error('Error checking consent:', e);
              }
            })();
          `}
        </Script>
        
        {/* Favicons - Derived from WS monogram */}
        <link rel="icon" type="image/png" href="/assets/monogram light.png" id="favicon-link" />
        <link rel="apple-touch-icon" href="/assets/monogram light.png" />
        
        {/* Script to switch favicon based on color scheme */}
        <Script id="favicon-switcher" strategy="afterInteractive">
          {`
            (function() {
              function updateFavicon() {
                const faviconLink = document.getElementById('favicon-link');
                if (!faviconLink) return;
                
                const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                faviconLink.href = isDark ? '/assets/monogram dark.png' : '/assets/monogram light.png';
              }
              
              // Set initial favicon when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateFavicon);
              } else {
                updateFavicon();
              }
              
              // Listen for color scheme changes
              if (window.matchMedia) {
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
              }
            })();
          `}
        </Script>
        
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload hero images for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/assets/portfolio/kitchen.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/img-1.png"
          fetchPriority="high"
        />

        {/* Preload ring underlay so it paints instantly */}
        <link rel="preload" as="image" href="/assets/ring.png" fetchPriority="high" />

        {/* Preload key brand marks (above the fold) */}
        <link rel="preload" as="image" href="/assets/ReverseLogo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/MonogramLogo.png" />
        
        {/* Load main fonts with display=swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className="min-h-screen bg-[#1D1D1D] text-white antialiased">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
