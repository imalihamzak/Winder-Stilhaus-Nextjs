"use client";

import FadeIn from "@/components/FadeIn";

interface LocationSEOContentProps {
  location: string;
}

export default function LocationSEOContent({ location }: LocationSEOContentProps) {
  return (
    <section className="bg-[#1D1D1D] pt-0 pb-14 md:pb-16 px-3 sm:px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <FadeIn direction="right" className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3" duration={0.6} delay={0.2}>
          {[
            "/assets/portfolio/bedroom.png",
            "/assets/portfolio/bedroom.png",
            "/assets/portfolio/bedroom.png",
            "/img-1.png",
            "/img-2.png",
            "/img-2.png",
          ].map((src, i) => (
            <div
              key={i}
              className={`rounded-[24px] overflow-hidden border border-[#4A4A4A] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] ${
                i === 2 || i === 3 ? "col-span-2" : ""
              }`}
            >
          <img
                src={src}
                className="rounded-[24px] object-cover h-[160px] w-full"
                alt={`Interior design project ${i + 1}`}
                loading="lazy"
                width={200}
                height={160}
          />
            </div>
          ))}
        </FadeIn>

        <FadeIn direction="left" className="col-span-2 space-y-5" duration={0.6} delay={0.4}>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Interior Design Services in {location}
        </h2>

          <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          We provide premium interior design and renovation services across
          {` ${location}`}, delivering bespoke luxury solutions for residential
          and commercial properties. Our work spans apartments, villas,
          penthouses, offices, and retail spaces.
        </p>

          <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            Whether you&apos;re renovating a modern apartment or transforming a full
          villa, our team ensures seamless execution with superior finishing
          and on-time delivery.
        </p>
        </FadeIn>
      </div>
    </section>
  );
}

