// GTM and GA4 configuration with Consent Mode v2

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX";

// Initialize GTM with Consent Mode v2 (default deny)
export const initGTM = () => {
  if (typeof window === "undefined") return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    if (window.dataLayer) {
      window.dataLayer.push(args);
    }
  }

  // Set default consent mode (deny all until user accepts)
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });

  // Check if consent was previously given
  const consent = localStorage.getItem("cookie-consent");
  if (consent === "accepted") {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
      personalization_storage: "granted",
    });
  }

  // Load GTM script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // Load GA4 via GTM (will be configured in GTM)
  gtag("js", new Date());
  gtag("config", GA4_ID, {
    send_page_view: false, // GTM will handle page views
  });
};

