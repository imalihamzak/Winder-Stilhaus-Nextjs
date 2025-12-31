"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  // Hide on mobile - return null
  if (isMobile || !isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pb-4">
          <div className="relative">

            {/* ✅ Floating Close Button (NO OVERLAP) */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="
                absolute 
                -top-3 
                -right-3 
                w-8 
                h-8 
                rounded-full 
                border 
                border-black/10 
                bg-white 
                hover:bg-white 
                flex 
                items-center 
                justify-center 
                shadow-sm 
                z-20
              "
            >
              <svg
                className="w-4 h-4 text-[#4a4f63]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(26,29,41,0.06)]">
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/95 pointer-events-none" />

              <div className="relative px-4 sm:px-6 py-4 sm:py-5 md:py-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">

                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(26,29,41,0.06)]" style={{ backgroundColor: '#214B57' }}>
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg font-noto-serif mb-1 leading-tight" style={{ color: '#214B57', fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                          Ready to transform your space?
                        </h3>
                        <p className="text-xs sm:text-sm font-dm-sans leading-relaxed" style={{ color: '#85929D', fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          Get a free consultation with our design experts
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
                    <a
                      href="/contact-us"
                      onClick={() => {
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "cta_book", {
                            event_category: "CTA",
                            event_label: "Sticky CTA - Get Free Quote",
                            value: 1,
                          });
                        }
                      }}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-white text-xs sm:text-sm font-normal font-dm-sans shadow-[0_10px_25px_rgba(26,29,41,0.08)] hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                      style={{ backgroundColor: '#F04E22' }}
                    >
                      <span className="hidden sm:inline">Get Free Quote</span>
                      <span className="sm:hidden">Get Quote</span>
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
