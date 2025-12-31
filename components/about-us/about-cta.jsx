"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutCTA() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="relative overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white/60 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)] p-8 sm:p-12 md:p-16 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
            
            <div className="relative">
              <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Ready to Transform Your Space?
              </h2>
              <p className="text-[#85929D] mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Let's discuss your vision and bring your dream interior to life. 
                Our team is ready to create something extraordinary for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white text-sm font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                  style={{ backgroundColor: '#F04E22' }}
                >
                  Get Free Consultation →
                </a>
                <a
                  href="/project"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md border border-black/10 bg-white text-[#214B57] text-sm font-normal font-dm-sans shadow-[0_10px_25px_rgba(15,22,36,0.03)] hover:bg-black/[0.03] transition"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

