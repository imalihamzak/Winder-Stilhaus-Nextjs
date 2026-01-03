"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TrustBoosters from "@/components/location-based-page/testimonials/trust-booster";
import { testimonials } from "@/components/location-based-page/testimonials/testi-data";

interface StarsProps {
  rating?: number;
}

function Stars({ rating = 5 }: StarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-[#F06434]" : "text-black/15"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsContent() {
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

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      {/* Hero Section - Matching service pages spacing */}
      <section className="relative bg-white text-[#1D1D1D] pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F06434' }}></span>
              Client Feedback
            </div>
            <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Testimonials
            </h1>
            <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              See what our clients say about their experience with Winder & Stilhaus.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
        {/* Testimonials Slider */}
        <FadeIn className="relative mb-12" duration={0.6} delay={0.2}>
          <div
            className="relative max-w-6xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

              <div className="relative p-5 sm:p-7 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <Stars rating={testimonials[index].rating} />
                      <p className="mt-6 text-[#85929D] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                        "{testimonials[index].review || testimonials[index].message}"
                      </p>
                      <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#214B57]/10 flex items-center justify-center text-[#214B57] font-semibold font-dm-sans">
                          {testimonials[index].name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-[#214B57] font-dm-sans">{testimonials[index].name}</p>
                          <p className="text-sm text-[#85929D] font-dm-sans">{testimonials[index].location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows */}
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
                style={{ backgroundColor: '#F06434' }}
              >
                →
              </button>
            </div>

            {/* Bottom controls */}
            <div className="mt-7 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      i === index ? "w-8" : "bg-black/20"
                    }`}
                    style={i === index ? { backgroundColor: '#214B57' } : {}}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* All Testimonials Grid */}
        <FadeIn className="mb-12" duration={0.6} delay={0.3}>
          <h2 className="font-semibold text-[#214B57] mb-8 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            All Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] p-6"
              >
                <Stars rating={testimonial.rating} />
                <p className="mt-4 text-[#85929D] leading-relaxed text-sm font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  "{testimonial.review || testimonial.message}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#214B57]/10 flex items-center justify-center text-[#214B57] font-semibold text-sm font-dm-sans">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#214B57] text-sm font-dm-sans">{testimonial.name}</p>
                    <p className="text-xs text-[#85929D] font-dm-sans">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trust Boosters */}
        <TrustBoosters />
      </div>
    </section>
    </>
  );
}

