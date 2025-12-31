"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsentBanner() {
  // Initialize state from localStorage using function initializer to avoid sync setState in effect
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(() => {
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

    // Update GTM consent mode using proper gtag API
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });
    }

    setConsentGiven(true);
    setShowBanner(false);
  };

  const rejectConsent = () => {
    // Set consent as rejected
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());

    // Update GTM consent mode (deny) using proper gtag API
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
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
          <div className="bg-white border border-black/10 rounded-[20px] shadow-[0_20px_60px_rgba(26,29,41,0.12)] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-noto-serif mb-2" style={{ color: '#214B57', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Cookie Preferences
                </h3>
                <p className="text-sm font-dm-sans leading-relaxed" style={{ color: '#85929D', fontSize: 'clamp(0.875rem, 1.25vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  We use cookies and similar technologies to improve your experience, analyse site traffic, and personalise content. By clicking "Accept All", you consent to our use of cookies.{" "}
                  <a
                    href="/privacy"
                    className="underline hover:no-underline"
                    style={{ color: '#214B57' }}
                  >
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={rejectConsent}
                  className="
                    px-4 py-2.5 rounded-md border border-black/10
                    bg-white text-sm font-normal font-dm-sans
                    hover:bg-black/[0.03] transition
                    flex-1 sm:flex-initial
                  "
                  style={{ color: '#214B57', fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Reject
                </button>
                <button
                  onClick={acceptConsent}
                  className="
                    min-w-[122px] min-h-[31px] px-6 py-2.5 rounded-md text-white
                    text-sm font-normal font-dm-sans shadow-[0_10px_25px_rgba(26,29,41,0.08)]
                    hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]
                    flex-1 sm:flex-initial
                  "
                  style={{ backgroundColor: '#F04E22', fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
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

