"use client";

import FadeIn from "@/components/FadeIn";

interface LocationPortfolioProps {
  location: string;
}

interface Project {
  title: string;
  img: string;
}

export default function LocationPortfolio({ location }: LocationPortfolioProps) {
  const projects: Project[] = [
    { title: "Luxury Villa Interior", img: "/assets/portfolio/kitchen.png" },
    { title: "Modern Apartment", img: "/assets/portfolio/bedroom.png" },
    { title: "Corporate Office", img: "/assets/portfolio/kitchen.png" },
  ];

  return (
    <section className="bg-[#1D1D1D] py-14 md:py-16 px-3 sm:px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-10 md:mb-12" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Portfolio
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Recent Projects in {location}
        </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.2} duration={0.6}>
              <div className="rounded-[24px] border border-[#4A4A4A] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img
                src={p.img}
                alt={p.title}
                    className="w-full h-full object-cover"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </div>
                <div className="p-5">
                  <h4 className="text-[#1D1D1D] font-semibold mb-1 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>{p.title}</h4>
                  <p className="text-[#7F8C8D] text-sm font-dm-sans">{location}</p>
            </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

