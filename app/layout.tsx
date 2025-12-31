import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ConsentBanner from "@/components/ConsentBanner";

export const metadata: Metadata = {
  title: "Winder & Stilhaus | Premium Interior Design & Renovation Services in West Yorkshire",
  description: "Luxury interior design and renovation services across West Yorkshire. Premium kitchens, bathrooms, and full-home design with expert craftsmanship. Instant pricing guide available.",
  metadataBase: new URL("https://winderstilhaus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winder & Stilhaus | Premium Interior Design & Renovation Services",
    description: "Luxury interior design and renovation services across West Yorkshire. Premium kitchens, bathrooms, and full-home design.",
    type: "website",
    locale: "en_GB",
  },
};

// GTM and GA4 IDs - Replace with actual IDs
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Favicons - Light and Dark Mode */}
        <link rel="icon" type="image/png" href="/assets/favicon light.png" id="favicon-link" />
        <link rel="apple-touch-icon" href="/assets/favicon light.png" />
        
        {/* Script to switch favicon based on color scheme */}
        <Script id="favicon-switcher" strategy="afterInteractive">
          {`
            (function() {
              function updateFavicon() {
                const faviconLink = document.getElementById('favicon-link');
                if (!faviconLink) return;
                
                const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                faviconLink.href = isDark ? '/assets/favicon Dark.png' : '/assets/favicon light.png';
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
        
        {/* Load main fonts with display=swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* GTM Container - Loads before page content */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Consent Mode v2 - Default deny (block analytics/ads until accepted)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            
            // Check if consent was previously given
            if (typeof window !== 'undefined' && localStorage.getItem('cookie-consent') === 'accepted') {
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted',
                'personalization_storage': 'granted'
              });
            }
          `}
        </Script>
        
        {/* GTM Container Script - Deferred for better performance */}
        <Script id="gtm-script" strategy="afterInteractive" defer>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-[#1D1D1D] antialiased">
        {/* GTM noscript fallback */}
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
