"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "@/components/location-based-page/testimonials/testi-card";
import {testimonials} from "@/components/location-based-page/testimonials/testi-data";
import FadeIn from "@/components/FadeIn";

export default function TestimonialsSlider({location}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Swipe support
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();
  };

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-white text-[#1D1D1D] px-3 sm:px-4 md:px-6 py-14 md:py-18 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative">
        {/* Premium background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#F04E22]/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#214B57]/10 blur-3xl" />
        </div>

        {/* Heading */}
        <FadeIn className="relative text-center mb-10 md:mb-12 px-2" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/10 backdrop-blur text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Client confidence
            </span>
            <span className="text-xs sm:text-sm text-[#85929D] font-dm-sans">
              Verified feedback • Premium finish • Reliable delivery
            </span>
          </div>

          <h2 className="mt-4 text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            What Our Clients Say in {location}
      </h2>

          <p className="mt-3 text-[#85929D] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            Results-focused partnerships delivering high-end interiors on time,
            on budget, and on brand.
          </p>
        </FadeIn>

      {/* Slider */}
        <FadeIn className="relative" duration={0.6} delay={0.2}>
      <div
            className="relative max-w-6xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
          >
            {/* Card shell */}
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

              <div className="relative p-5 sm:p-7 md:p-10">
                <div key={index}>
        <TestimonialCard data={testimonials[index]} />
                </div>
              </div>

              {/* Side arrows (desktop) */}
              <button
          onClick={prev}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-black/10 bg-white/80 backdrop-blur items-center justify-center shadow-[0_12px_30px_rgba(26,29,41,0.04)] hover:bg-white transition"
        >
                ←
              </button>
              <button
          onClick={next}
                aria-label="Next testimonial"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full text-white items-center justify-center shadow-[0_18px_45px_rgba(26,29,41,0.08)] hover:opacity-90 transition"
                style={{ backgroundColor: '#F04E22' }}
        >
                →
              </button>
      </div>

            {/* Bottom controls */}
            <div className="mt-7 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
                  <button
            key={i}
            onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full cursor-pointer transition-all ${
                      i === index ? "w-9" : "w-2.5 bg-black/15"
                    }`}
                    style={i === index ? { backgroundColor: '#214B57' } : {}}
          />
        ))}
      </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden justify-center gap-3">
                <button
                  onClick={prev}
                  className="min-w-[122px] min-h-[31px] px-6 py-2 rounded-md border border-black/10 bg-white/80 text-[#214B57] font-normal font-dm-sans shadow-[0_12px_30px_rgba(26,29,41,0.04)] hover:bg-white transition"
                >
                  ← Prev
                </button>
                <button
                  onClick={next}
                  className="min-w-[122px] min-h-[31px] px-6 py-2 rounded-md text-white font-normal font-dm-sans shadow-[0_18px_45px_rgba(26,29,41,0.08)] hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                  style={{ backgroundColor: '#F04E22' }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
