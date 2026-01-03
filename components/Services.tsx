"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sofa,
  DoorOpen,
  Compass,
  Hammer,
  Lightbulb,
  Paintbrush,
  Ruler,
  Grid3x3,
  Wrench,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES: Service[] = [
  {
    title: "Kitchen Renovation",
    description:
      "Premium cabinetry, stone worktops, and lighting — refined, functional, built to last.",
    icon: Sofa,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Luxury fittings, seamless tiling, and spa-level comfort — designed around your space.",
    icon: Hammer,
  },
  {
    title: "Full Home Design",
    description:
      "Layouts, finishes, and styling — complete concepts for modern living with timeless detail.",
    icon: Compass,
  },
  {
    title: "Turnkey Renovation",
    description:
      "Bespoke detailing, premium materials, and end-to-end execution you can trust.",
    icon: Wrench,
  },
  {
    title: "Living & Lounge Styling",
    description:
      "Comfort-first planning with premium textures, layered lighting, and clean detailing.",
    icon: Grid3x3,
  },
  {
    title: "Bedrooms & Wardrobes",
    description:
      "Calm, elegant spaces with storage planning, premium finishes, and soft lighting.",
    icon: DoorOpen,
  },
  {
    title: "Lighting Design",
    description:
      "Ambient, task, and accent lighting plans to elevate mood and architecture.",
    icon: Lightbulb,
  },
  {
    title: "Custom Furniture",
    description:
      "Made-to-measure furniture with premium materials and tailored proportions.",
    icon: Wrench,
  },
  {
    title: "Paint & Finishes",
    description:
      "High-end paint systems and surface finishing that feels clean and timeless.",
    icon: Paintbrush,
  },
  {
    title: "Space Planning",
    description:
      "Layouts that improve flow, functionality, and visual balance across your home.",
    icon: Ruler,
  },
  {
    title: "Material Selection",
    description:
      "Curated palette — stone, wood, metals, fabrics — chosen with professional clarity.",
    icon: Compass,
  },
  {
    title: "On-Site Execution",
    description:
      "Supervised execution and quality checks to ensure premium delivery without delays.",
    icon: Hammer,
  },
];

export default function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState<number>(0);
  const [stride, setStride] = useState<number>(360); // card width + gap
  const [visible, setVisible] = useState<number>(1);
  const [hovered, setHovered] = useState<boolean>(false);

  const maxIndex = useMemo(() => Math.max(0, SERVICES.length - visible), [visible]);

  // Measure card width + compute how many fit (clean, no hacks)
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const card = firstCardRef.current;
    if (!wrap || !card) return;

    const calc = () => {
      const wrapW = wrap.getBoundingClientRect().width;
      const cardW = card.getBoundingClientRect().width;

      const gap = 16; // gap-4
      const s = cardW + gap;
      const v = Math.max(1, Math.floor((wrapW + gap) / s));

      setStride(s);
      setVisible(v);
      setIndex((prev) => Math.min(Math.max(prev, 0), Math.max(0, SERVICES.length - v)));
    };

    calc();

    const ro = new ResizeObserver(calc);
    ro.observe(wrap);
    ro.observe(card);

    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (hovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [hovered, maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const goPrev = () => setIndex((p) => Math.max(0, p - 1));
  const goNext = () => setIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section id="services" className="">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-10 md:py-14">
        {/* Heading */}
        <FadeIn className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F06434' }} />
              Our Services
            </span>
            <span className="text-xs sm:text-sm text-[#7F8C8D] font-dm-sans">
              Premium quality • Expert execution • Timely delivery
            </span>
          </div>

          <h2 className="mt-4 text-[#1D1D1D] font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
            Complete interior solutions
          </h2>

          <p className="mt-3 text-[#7F8C8D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
            From concept to completion, we deliver premium interiors tailored to your vision and lifestyle.
          </p>
        </FadeIn>

        <div
          ref={wrapRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Soft edge fades (premium, hides cut edges) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Arrows */}
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous"
            className={`
              absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-20
              w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full
              border border-[#4A4A4A] bg-white
              shadow-[0_12px_30px_rgba(0,0,0,0.1)]
              flex items-center justify-center transition
              ${canPrev ? "hover:bg-[#4A4A4A]/5" : "opacity-35 cursor-not-allowed"}
            `}
          >
            <ChevronLeft className="text-[#1D1D1D]" size={16} />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next"
            className={`
              absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-20
              w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full
              border border-[#4A4A4A] bg-white
              shadow-[0_12px_30px_rgba(0,0,0,0.1)]
              flex items-center justify-center transition
              ${canNext ? "hover:bg-[#4A4A4A]/5" : "opacity-35 cursor-not-allowed"}
            `}
          >
            <ChevronRight className="text-[#1D1D1D]" size={16} />
          </button>

          {/* Track */}
          <motion.div
            className="flex gap-3 sm:gap-4 px-10 sm:px-14 md:px-16 py-3"
            animate={{ x: -index * stride }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title + i}
                  ref={i === 0 ? firstCardRef : undefined}
                  className="
                    w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px]
                    shrink-0 rounded-[20px] sm:rounded-[22px]
                    border border-[#4A4A4A] bg-white
                    shadow-[0_18px_45px_rgba(0,0,0,0.1)]
                    p-6 sm:p-7 md:p-8
                    hover:shadow-[0_24px_60px_rgba(0,0,0,0.15)]
                    hover:border-t-[2px] hover:border-t-[#F06434]
                    transition-all duration-150
                    group
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#4A4A4A]/30 bg-[#4A4A4A]/5 flex items-center justify-center text-[#214B57]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#7F8C8D] font-dm-sans">
                      Service
                    </span>
                  </div>

                  <h3 className="mt-4 text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {s.title}
                  </h3>

                  <p className="mt-2 text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {s.description}
                  </p>

                  <a
                    href="/contact-us"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#214B57] hover:opacity-80 transition font-dm-sans"
                  >
                    Get a quote <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </motion.div>

          {/* Dots */}
          {maxIndex > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`
                    h-2.5 rounded-full transition
                    ${i === index ? "w-7 bg-[#214B57]" : "w-2.5 bg-[#4A4A4A] hover:bg-[#7F8C8D]"}
                  `}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

