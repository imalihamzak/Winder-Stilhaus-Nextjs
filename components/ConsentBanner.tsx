"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsentBanner() {
  // Initialize state from localStorage using function initializer to avoid sync setState in effect
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [consentGiven, setConsentGiven] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookie-consent") === "accepted";
  });

  useEffect(() => {
    // If consent was already given, don't show banner
    if (consentGiven) return;

    // Show banner after a short delay
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [consentGiven]);

  const acceptConsent = () => {
    // Set consent in localStorage
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());

    // Initialize dataLayer and gtag if not already done
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        if ((window as any).dataLayer) {
          (window as any).dataLayer.push(args);
        }
      }
      (window as any).gtag = gtag;

      // Update GTM consent mode using proper gtag API
      gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });

      // Load GTM script if not already loaded
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-W7GGZC6Q";
      if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`)) {
        (function(w: any, d: Document, s: string, l: string, i: string) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          const f = d.getElementsByTagName(s)[0];
          const j = d.createElement(s) as HTMLScriptElement;
          const dl = l !== 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode?.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtmId);
      }

      // Load GA4 script if not already loaded
      const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "G-F9M32QBL4V";
      if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${ga4Id}"]`)) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
        document.head.appendChild(gaScript);
        
        gaScript.onload = () => {
          gtag('js', new Date());
          gtag('config', ga4Id);
        };
      } else {
        // GA4 already loaded, just configure
        gtag('js', new Date());
        gtag('config', ga4Id);
      }
    }

    setConsentGiven(true);
    setShowBanner(false);
  };

  const rejectConsent = () => {
    // Set consent as rejected
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());

    // Update GTM consent mode (deny) using proper gtag API
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "granted",
        personalization_storage: "denied",
        security_storage: "granted",
      });
    }

    setShowBanner(false);
  };

  if (consentGiven || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-[100] px-3 sm:px-4 md:px-6 pb-4 md:pb-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-white border border-[#4A4A4A]/30 rounded-[28px] shadow-[0_30px_90px_rgba(15,22,36,0.04)] p-6 sm:p-8 md:p-10">
            {/* Subtle shine effect matching app cards */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(255,255,255,0.20),transparent_60%)]" />
            
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <h3 className="text-[#214B57] font-noto-serif mb-2" style={{ fontSize: 'clamp(1.125rem, 1.75vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Cookie Preferences
                </h3>
                <p className="text-[#85929D] font-dm-sans leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  We use cookies and similar technologies to improve your experience, analyse site traffic, and personalise content. By clicking "Accept All", you consent to our use of cookies.{" "}
                  <a
                    href="/privacy"
                    className="underline hover:no-underline transition"
                    style={{ color: '#214B57' }}
                  >
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={rejectConsent}
                  className="
                    min-w-[122px] min-h-[31px] px-6 py-2 rounded-md
                    bg-white border border-[#214B57] text-[#214B57]
                    text-sm font-normal font-dm-sans
                    hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2
                    transition-all duration-150
                    focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:ring-offset-1
                    active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2
                    flex-1 sm:flex-initial
                  "
                >
                  Reject
                </button>
                <button
                  onClick={acceptConsent}
                  className="
                    min-w-[122px] min-h-[31px] px-6 py-2 rounded-md text-white
                    text-sm font-normal font-dm-sans
                    shadow-[0_18px_45px_rgba(26,29,41,0.08)]
                    hover:bg-[#1a3d47] transition-all duration-150
                    focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:ring-offset-1
                    active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2
                    flex-1 sm:flex-initial
                  "
                  style={{ backgroundColor: '#F04E22' }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

