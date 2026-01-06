"use client";

export default function CTASection() {
  return (
    <section className="bg-[#1D1D1D] px-2 md:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.2)] p-8 sm:p-10 md:p-12 text-center" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
          <div className="relative">
            <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Ready to Transform Your Home?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Let's craft a luxurious space that reflects your lifestyle, comfort, and elegance.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-3 rounded-md bg-white border border-white text-[#214B57] font-normal font-dm-sans hover:bg-white/90 hover:text-[#214B57] hover:border-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#214B57] active:bg-white/90 active:text-[#214B57] active:border-white"
              style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)' }}
            >
              Get Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

