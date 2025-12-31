"use client";

import FadeIn from "@/components/FadeIn";

export default function ServiceHero({ service }) {
  if (!service) {
    return null;
  }

  return (
    <section className="relative bg-white text-[#1D1D1D] pt-0 pb-3 sm:pb-4 md:pb-5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn className="text-center" duration={0.6} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
            {service?.title || "Service"}
          </div>
          
          <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          {service?.title || "Service"}
        </h1>
          
          <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            {service?.tagline || "Premium interior design and renovation services."}
          </p>
          
          <a
          href="/contact-us"
            className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white text-sm font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
            style={{ backgroundColor: '#F04E22' }}
        >
          Get Free Consultation →
        </a>
        </FadeIn>
      </div>
    </section>
  );
}
