"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "@/components/location-based-page/testimonials/testi-card";
import {testimonials} from "@/components/location-based-page/testimonials/testi-data";
import FadeIn from "@/components/FadeIn";

interface TestimonialsSliderProps {
  location: string;
}

export default function TestimonialsSlider({location}: TestimonialsSliderProps) {
  const [index, setIndex] = useState<number>(0);
  const startX = useRef<number>(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
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
    <section className="bg-[#1D1D1D] text-white px-3 sm:px-4 md:px-6 py-14 md:py-18 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <FadeIn className="relative text-center mb-10 md:mb-12 px-2" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Client confidence
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-dm-sans">
              Verified feedback • Premium finish • Reliable delivery
            </span>
          </div>

          <h2 className="mt-4 text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            What Our Clients Say in {location}
      </h2>

          <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
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
            <div className="relative overflow-hidden rounded-[30px] border border-[#4A4A4A] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.1)]">

              <div className="relative p-5 sm:p-7 md:p-10">
                <div key={index}>
        <TestimonialCard data={testimonials[index]} />
                </div>
              </div>

              {/* Side arrows (desktop) */}
              <button
          onClick={prev}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full ws-double-ring bg-white text-[#1D1D1D] items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:bg-[#4A4A4A]/5 transition"
        >
                ←
              </button>
              <button
          onClick={next}
                aria-label="Next testimonial"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full ws-double-ring ws-double-ring--on-dark text-white items-center justify-center shadow-[0_18px_45px_rgba(26,29,41,0.08)] hover:opacity-90 transition"
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
                      i === index ? "w-9" : "w-2.5 bg-[#4A4A4A]/20"
                    }`}
                    style={i === index ? { backgroundColor: '#214B57' } : {}}
          />
        ))}
      </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden justify-center gap-3">
                <button
                  onClick={prev}
                  className="min-w-[122px] min-h-[31px] px-5 py-2 rounded-md border border-[#4A4A4A] bg-white text-[#1D1D1D] text-sm font-normal font-dm-sans shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-[#4A4A4A]/5 transition"
                >
                  ← Prev
                </button>
                <button
                  onClick={next}
                  className="min-w-[122px] min-h-[31px] px-5 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
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

