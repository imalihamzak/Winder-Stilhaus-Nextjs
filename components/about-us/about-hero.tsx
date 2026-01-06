"use client";

import FadeIn from "@/components/FadeIn";

interface Stat {
  value: string;
  label: string;
}

export default function AboutHero() {
  const stats: Stat[] = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "480+", label: "Happy Clients" },
    { value: "50+", label: "Trusted Partners" },
  ];

  return (
    <section className="relative text-white pt-0 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              About Winder & Stilhaus
            </div>
            <h1 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
              Crafting Luxury Interiors
              <br />
              <span className="relative">
                Since 2014
                <span className="absolute left-0 -bottom-1 h-[10px] w-full rounded-full" style={{ backgroundColor: '#214B57', opacity: 0.1 }} />
              </span>
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              We transform spaces into timeless luxury environments, combining elegant aesthetics 
              with functional innovation. With over a decade of excellence, we've delivered 
              hundreds of premium projects across Pakistan.
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl border border-[#4A4A4A] bg-white"
              >
                <div
                  className="text-3xl sm:text-4xl font-bold text-[#1D1D1D] mb-1 font-noto-serif"
                >
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-[#7F8C8D] font-medium font-dm-sans" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

