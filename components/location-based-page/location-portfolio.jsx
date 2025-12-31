"use client";

import FadeIn from "@/components/FadeIn";

export default function LocationPortfolio({ location }) {
  const projects = [
    { title: "Luxury Villa Interior", img: "/assets/portfolio/kitchen.png" },
    { title: "Modern Apartment", img: "/assets/portfolio/bedroom.png" },
    { title: "Corporate Office", img: "/assets/portfolio/kitchen.png" },
  ];

  return (
    <section className="bg-white py-14 md:py-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-10 md:mb-12" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/10 backdrop-blur text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Portfolio
            </span>
          </div>
          <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Recent Projects in {location}
        </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.2} duration={0.6}>
              <div className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img
                src={p.img}
                alt={p.title}
                    className="w-full h-full object-cover"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </div>
                <div className="p-5">
                  <h4 className="text-[#214B57] font-semibold mb-1 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>{p.title}</h4>
                  <p className="text-[#85929D] text-sm font-dm-sans">{location}</p>
            </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
