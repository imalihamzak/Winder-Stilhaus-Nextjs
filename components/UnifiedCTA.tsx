"use client";

import FadeIn from "@/components/FadeIn";

interface UnifiedCTAProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  delay?: number;
  className?: string;
}

export default function UnifiedCTA({
  heading = "Ready to Transform Your Home?",
  description = "Let's craft a luxurious space that reflects your lifestyle, comfort, and elegance.",
  buttonText = "Get Free Consultation",
  buttonHref = "/contact-us",
  delay = 0.2,
  className = "",
}: UnifiedCTAProps) {
  return (
    <section className={`bg-[#1D1D1D] py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up" delay={delay} duration={0.6}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.2)] p-8 sm:p-10 md:p-12 text-center" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
            <div className="relative">
              <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                {heading}
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                {description}
              </p>
              <a
                href={buttonHref}
                className="
                  inline-flex items-center justify-center gap-2
                  min-w-[122px] min-h-[31px] px-5 py-2 rounded-md
                  text-sm font-normal font-dm-sans
                  bg-white border border-[#214B57] text-[#214B57]
                  hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2
                  transition-all duration-150 whitespace-nowrap
                  focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2
                  active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2
                  shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                "
              >
                {buttonText} →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

