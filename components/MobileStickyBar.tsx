"use client";

import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
    >
      <div className="bg-[#214B57] border-t border-[#4A4A4A]/50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] w-full">
        <div className="flex items-center justify-around px-2 py-3 w-full">

          {/* Call */}
          <a
            href="tel:+1234567890"
            aria-label="Call us"
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl hover:bg-white/10 transition-colors active:scale-95"
          >
            <div className="w-10 h-10 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/20 flex items-center justify-center">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <span className="text-xs text-white font-dm-sans">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl hover:bg-white/10 transition-colors active:scale-95"
          >
            <div className="w-10 h-10 rounded-full ws-double-ring ws-double-ring--on-dark bg-[#25D366] flex items-center justify-center">
              <FaWhatsapp className="text-white text-xl" />
            </div>
            <span className="text-xs text-white font-dm-sans">WhatsApp</span>
          </a>

          {/* Book Consultation */}
          <a
            href="#pricing-guide"
            aria-label="Book a consultation"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("pricing-guide");
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex flex-col items-center justify-center gap-1.5 px-4 py-3 min-w-[80px] min-h-[44px] rounded-xl hover:bg-white/10 transition-colors active:scale-95"
          >
            <div className="w-10 h-10 rounded-full ws-double-ring ws-double-ring--on-dark bg-white/20 flex items-center justify-center">
              <FaCalendarCheck className="text-white text-lg" />
            </div>
            <span className="text-xs text-white font-dm-sans">Book</span>
          </a>

        </div>
      </div>
    </div>
  );
}
