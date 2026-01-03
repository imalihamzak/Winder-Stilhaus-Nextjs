"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import TrustBoosters from "@/components/location-based-page/testimonials/trust-booster";

interface Testimonial {
  name: string;
  location: string;
  property: string;
  rating: number;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ali Khan",
    location: "DHA Lahore",
    property: "5 Marla House Renovation",
    rating: 5,
    message:
      "Lux Interiors transformed my home into a magazine-worthy space. Their detailing, premium finishing, and professionalism are unmatched!",
    image: "/assets/profile/img-1.png",
  },
  {
    name: "Hamza Mehmood",
    location: "Bahria Town",
    property: "Office Interior Design",
    rating: 4,
    message:
      "Super elegant and modern workspace transformation. The ambiance is warm, creative, and highly productive now.",
    image: "/assets/profile/img-1.png",
  },
  {
    name: "Ahmed",
    location: "Gulberg",
    property: "Luxury Apartment Decor",
    rating: 5,
    message:
      "Their minimal and luxury design language is outstanding. Every corner feels premium and beautifully crafted.",
    image: "/assets/profile/img-1.png",
  },
];

interface StarsProps {
  rating?: number;
}

function Stars({ rating = 5 }: StarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-[#F06434]" : "text-[#4A4A4A]/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

interface TouchRef {
  startX: number;
}

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const touchRef = useRef<TouchRef>({ startX: 0 });

  const total = testimonials.length;
  const current = testimonials[index];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Auto-slide removed - no automatic animation

  // Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchRef.current.startX - endX;
    if (diff > 55) nextSlide();
    if (diff < -55) prevSlide();
  };


  return (
    <section className="px-3 sm:px-4 md:px-6 py-14 md:py-18 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <FadeIn className="relative text-center mb-10 md:mb-12 px-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F06434' }} />
              CLIENT CONFIDENCE
            </span>
            <span className="text-xs sm:text-sm text-[#7F8C8D] font-dm-sans" style={{ color: '#7F8C8D', fontFamily: 'DM Sans, sans-serif' }}>
              Verified feedback • Premium finish • Reliable delivery
            </span>
          </div>

          <h2 className="mt-4 text-[#1D1D1D] font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
            What our clients say
          </h2>

          <p className="mt-3 text-[#7F8C8D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
            Results-focused partnerships delivering high-end interiors on time,
            on budget, and on brand.
          </p>
        </FadeIn>

        {/* Slider */}
        <FadeIn className="relative">
          <div
            className="relative max-w-6xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card shell - white with Iron border */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#4A4A4A] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.1)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />

              <div className="relative p-4 sm:p-5 md:p-7 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-5 sm:gap-7 md:gap-10 items-stretch"
                  >
                    {/* Left content */}
                    <div className="flex flex-col justify-between">
                      {/* Meta */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[#7F8C8D] font-dm-sans">
                            {current.location}
                          </p>
                          <p className="text-sm text-[#7F8C8D] mt-1 font-dm-sans">
                            {current.property}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A4A4A]/5 border border-[#4A4A4A]/20 text-xs font-semibold text-[#1D1D1D] font-dm-sans">
                          <span className="h-2 w-2 rounded-full bg-[#F06434]" />
                          Verified client
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="mt-6">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full bg-[#1D1D1D] text-white flex items-center justify-center text-xl font-bold shadow-[0_14px_35px_rgba(26,29,41,0.09)]">
                            &quot;
                          </div>
                          <div className="h-px flex-1 bg-black/10" />
                        </div>

                        <p className="text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.75vw, 2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          {current.message}
                        </p>
                      </div>

                      {/* Bottom row */}
                      <div className="mt-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                        <div>
                          <p className="text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                            {current.name}
                          </p>
                          <div className="mt-2 flex items-center gap-3">
                            <Stars rating={current.rating} />
                            <span className="text-sm text-[#7F8C8D] font-dm-sans">
                              4.9/5 average
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#4A4A4A]/5 border border-[#4A4A4A]/20 text-sm font-semibold text-[#1D1D1D] font-dm-sans">
                            On-time delivery
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#214B57] text-white text-sm font-semibold shadow-[0_14px_35px_rgba(33,75,87,0.15)] font-dm-sans">
                            Premium finish
                          </span>
                        </div>
                      </div>

                      {/* Satisfaction bar */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm text-[#7F8C8D] font-dm-sans">
                          <span>97% client satisfaction</span>
                          <span>Trusted results</span>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-[#4A4A4A]/10 overflow-hidden">
                          <div className="h-full w-[92%] rounded-full bg-[#214B57]" />
                        </div>
                      </div>
                    </div>

                    {/* Right visual */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/35 to-black/5" />
                      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#4A4A4A] bg-white/60 shadow-[0_25px_70px_rgba(15,22,36,0.06)] h-[240px] sm:h-[280px] md:h-[340px] lg:h-full min-h-[240px] sm:min-h-[320px]">
                        <img
                          src={current.image}
                          alt={`${current.name} project`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -bottom-5 left-6 rounded-full bg-white/90 backdrop-blur border border-[#4A4A4A]/20 px-4 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.05)] text-sm font-semibold text-[#1D1D1D] flex items-center gap-2 font-dm-sans">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#F06434]" />
                        Premium project
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Side arrows (desktop) */}
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#4A4A4A] bg-white text-[#1D1D1D] items-center justify-center shadow-[0_18px_45px_rgba(0,0,0,0.1)] hover:bg-[#4A4A4A]/5 transition"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#4A4A4A] bg-white text-[#1D1D1D] items-center justify-center shadow-[0_18px_45px_rgba(0,0,0,0.1)] hover:bg-[#4A4A4A]/5 transition"
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
                      i === index ? "w-9 bg-[#214B57]" : "w-2.5 bg-[#4A4A4A]/20"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden justify-center gap-3">
                <button
                  onClick={prevSlide}
                  className="px-6 py-2 rounded-md border border-[#4A4A4A] bg-white text-[#1D1D1D] font-normal font-dm-sans shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:bg-[#F9FAFB] transition min-w-[122px] min-h-[31px]"
                >
                  ← Prev
                </button>
                <button
                  onClick={nextSlide}
                  className="px-6 py-2 rounded-md min-w-[122px] min-h-[31px] bg-[#214B57] text-white font-normal font-dm-sans hover:bg-[#1a3d47] transition-all duration-150 active:bg-[#1a3d47] focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2"
                  style={{ backgroundColor: '#214B57' }}
                >
                  Next →
                </button>
              </div>

              <p className="text-xs text-[#7F8C8D]" style={{ color: '#7F8C8D', fontFamily: 'DM Sans, sans-serif' }}>
                Swipe on mobile to navigate
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Trust boosters */}
        <FadeIn className="mt-12 md:mt-14 relative">
          <TrustBoosters />
        </FadeIn>
      </div>
    </section>
  );
}

