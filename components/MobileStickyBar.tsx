"use client";

import { useState, useEffect } from "react";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      // Always visible when scrolling (show after small initial scroll)
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Only show on mobile screens
  if (!isMobile) return null;
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-[#214B57] border-t border-[#4A4A4A] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around px-2 py-3">
          {/* Call Button */}
          <a
            href="tel:+1234567890"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
                if (hasConsent) {
                  (window as any).gtag("event", "cta_call_click", {
                    event_category: "CTA",
                    event_label: "Mobile Sticky Bar - Call",
                    value: 1,
                  });
                }
              }
            }}
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl hover:bg-white/10 transition-colors active:scale-95"
            aria-label="Call us"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xs font-normal font-dm-sans text-white" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "cta_whatsapp", {
                  event_category: "CTA",
                  event_label: "Mobile Sticky Bar - WhatsApp",
                  value: 1,
                });
              }
            }}
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl hover:bg-white/10 transition-colors active:scale-95"
            aria-label="Message us on WhatsApp"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <span className="text-xs font-normal font-dm-sans text-white" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>WhatsApp</span>
          </a>

          {/* Book Button */}
          <a
            href="/contact-us"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                const hasConsent = localStorage.getItem("cookie-consent") === "accepted";
                if (hasConsent) {
                  (window as any).gtag("event", "cta_book_click", {
                    event_category: "CTA",
                    event_label: "Mobile Sticky Bar - Book",
                    value: 1,
                  });
                }
              }
            }}
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl text-white hover:opacity-90 transition-opacity active:scale-95 relative group"
            aria-label="Book a consultation"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F06434] group-hover:h-1 transition-all" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span className="text-xs font-normal font-dm-sans text-white" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>Book</span>
          </a>
        </div>
      </div>
    </div>
  );
}

