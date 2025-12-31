"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function LocationCTA({ location }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CTA SECTION */}
      <section className="bg-white py-14 md:py-16 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn duration={0.6} delay={0.2}>
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)] p-8 sm:p-10 md:p-12 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
              
              <div className="relative">
                <h3 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Schedule Free Site Visit in {location}
        </h3>

                <p className="text-[#85929D] mb-8 max-w-xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Book a free design consultation and site inspection with our specialist
          team today.
        </p>

                <button
          onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white text-sm font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                  style={{ backgroundColor: '#F04E22' }}
        >
          Schedule Now →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SCHEDULE MODAL */}
      {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[28px] border border-black/10 bg-white/95 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.08)] p-6 sm:p-8 relative"
            >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#214B57] text-xl hover:opacity-70 transition"
            >
              ✕
            </button>

              <h3 className="font-semibold text-[#214B57] mb-6 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Schedule Free Site Visit
            </h3>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
              />

              <input
                type="tel"
                placeholder="Phone"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
              />

              <input
                type="email"
                placeholder="Email"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
              />

              <input
                type="text"
                defaultValue={location}
                placeholder="City / Location"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
              />

              <input
                type="date"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-2 focus:ring-[#214B57]/15 focus:border-black/20 font-dm-sans"
              />

                <button
                type="submit"
                  className="min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22] mt-4 shadow-[0_18px_45px_rgba(26,29,41,0.08)]"
                  style={{ backgroundColor: '#F04E22' }}
              >
                Confirm Site Visit
                </button>
            </form>
            </div>
          </div>
      )}
    </>
  );
}
