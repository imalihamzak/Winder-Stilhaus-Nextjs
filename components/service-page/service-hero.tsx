"use client";

import FadeIn from "@/components/FadeIn";
import MonogramUnderlay from "@/components/MonogramUnderlay";

interface Service {
  title?: string;
  tagline?: string;
}

interface ServiceHeroProps {
  service?: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  if (!service) {
    return null;
  }

  return (
    <section 
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden -mt-20 sm:-mt-24 md:-mt-24"
      style={{ 
        background: 'linear-gradient(135deg, #214B57 0%, #183941 100%)'
      }}
    >
      {/* Ring pattern underlay: large scale, cropped off-edge, visible opacity, subtle parallax */}
      <MonogramUnderlay opacity={0.5} />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10 w-full">
        <FadeIn className="text-center" duration={0.6} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
            {service?.title || "Service"}
          </div>
          
          <h1 className="text-white font-noto-serif mb-4" style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 700, 
            lineHeight: '1.5', 
            letterSpacing: '0px', 
            fontFamily: 'Noto Serif, serif', 
            color: '#FFFFFF',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility',
            WebkitTextSizeAdjust: '100%'
          }}>
          {service?.title || "Service"}
        </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
            {service?.tagline || "Premium interior design and renovation services."}
          </p>
          
          <a
          href="/contact-us"
            className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2"
        >
          Get Free Consultation →
        </a>
        </FadeIn>
      </div>
    </section>
  );
}

