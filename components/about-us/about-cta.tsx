"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutCTA() {
  return (
    <section className="bg-[#1D1D1D] py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.2)] p-8 sm:p-12 md:p-16 text-center" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
            <div className="relative">
              <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Let's discuss your vision and bring your dream interior to life. 
                Our team is ready to create something extraordinary for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-3 rounded-md bg-white border border-white text-[#214B57] font-normal font-dm-sans hover:bg-white/90 hover:text-[#214B57] hover:border-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#214B57] active:bg-white/90 active:text-[#214B57] active:border-white"
                  style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)' }}
                >
                  Get Free Consultation →
                </a>
                <a
                  href="/project"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-3 rounded-md border border-white/30 bg-transparent text-white font-normal font-dm-sans hover:bg-white/10 hover:border-white/50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#214B57]"
                  style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)' }}
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

