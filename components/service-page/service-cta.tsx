"use client";

import FadeIn from "@/components/FadeIn";

export default function ServiceCTA() {
  return (
    <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn duration={0.6}>
          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)] p-8 sm:p-10 md:p-12 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
            
            <div className="relative">
              <h3 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Let&apos;s Design Your Dream Space
        </h3>

              <p className="text-[#85929D] mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Book a free consultation with our design experts and start your
          luxury interior transformation today.
        </p>

              <a
          href="/contact-us"
                className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2"
        >
          Book Free Design Call →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

