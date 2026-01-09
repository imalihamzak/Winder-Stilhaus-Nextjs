"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(280);
  const [isMobile, setIsMobile] = useState(false);

  // Touch/swipe state
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Calculate card width and visible cards
  useEffect(() => {
    const updateCardWidth = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const mobile = containerWidth < 640;
      setIsMobile(mobile);

      if (mobile) {
        // On mobile: card width = container width - padding (24px each side) - gap (12px)
        const mobileCardWidth = containerWidth - 48 - 12;
        setCardWidth(mobileCardWidth);
      } else {
        // Desktop: use fixed widths
        if (containerWidth >= 1024) {
          setCardWidth(360);
        } else if (containerWidth >= 768) {
          setCardWidth(320);
        } else {
          setCardWidth(280);
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const gap = 12;
  const stride = cardWidth + gap;
  const maxIndex = Math.max(0, SERVICES.length - (isMobile ? 1 : Math.floor((containerRef.current?.offsetWidth || 0) / stride)));

  // Auto-scroll
  useEffect(() => {
    if (isHovered || isDragging || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, maxIndex]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchCurrentX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) {
      setIsDragging(false);
      setDragOffset(0);
      touchStartX.current = null;
      touchCurrentX.current = null;
      return;
    }

    const distance = touchStartX.current - touchCurrentX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0 && currentIndex < maxIndex) {
        goToNext();
      } else if (distance < 0 && currentIndex > 0) {
        goToPrev();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const translateX = -currentIndex * stride - dragOffset;

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-10 md:py-14 relative z-10">
        {/* Heading */}
        <FadeIn className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Our Services
            </span>
            <span className="text-xs sm:text-sm text-white/80 font-dm-sans">
              Premium quality • Expert execution • Timely delivery
            </span>
          </div>

          <h2 className="mt-4 text-white font-noto-serif max-w-2xl mx-auto" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
            Complete interior solutions
          </h2>

          <p className="mt-3 text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1.25rem, 2vw, 2.67rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
            From concept to completion, we deliver premium interiors tailored to your vision and lifestyle.
          </p>
        </FadeIn>

        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={goToPrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
            className={`absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full ws-double-ring bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] flex items-center justify-center transition ${
              currentIndex > 0 
                ? "hover:bg-[#4A4A4A]/5 cursor-pointer opacity-100" 
                : "opacity-35 cursor-not-allowed pointer-events-none"
            }`}
          >
            <ChevronLeft className="text-[#1D1D1D]" size={16} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
            className={`absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full ws-double-ring bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] flex items-center justify-center transition ${
              currentIndex < maxIndex 
                ? "hover:bg-[#4A4A4A]/5 cursor-pointer opacity-100" 
                : "opacity-35 cursor-not-allowed pointer-events-none"
            }`}
          >
            <ChevronRight className="text-[#1D1D1D]" size={16} />
          </button>

          {/* Carousel Track */}
          <div
            className="flex gap-3 py-3 px-3 sm:px-10 md:px-14 lg:px-16"
            style={{ touchAction: "pan-x" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex gap-3"
              animate={{ x: translateX }}
              transition={isDragging ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              style={{ userSelect: "none" }}
            >
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`${service.title}-${i}`}
                    className="shrink-0 rounded-[20px] sm:rounded-[22px] border border-[#4A4A4A] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)] p-5 sm:p-7 md:p-8 hover:shadow-[0_24px_60px_rgba(0,0,0,0.15)] hover:border-t-[2px] hover:border-t-[#F04E22] transition-all duration-150 group"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-full ws-double-ring bg-[#4A4A4A]/5 flex items-center justify-center text-[#214B57]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.28em] text-[#7F8C8D] font-dm-sans">
                        Service
                      </span>
                    </div>

                    <h3 className="mt-4 text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                      {service.description}
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
          </div>

          {/* Pagination Dots */}
          {maxIndex > 0 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition ${
                    i === currentIndex ? "w-7 bg-[#214B57]" : "w-2.5 bg-[#4A4A4A] hover:bg-[#7F8C8D]"
                  }`}
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
