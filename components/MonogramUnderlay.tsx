"use client";

import { useEffect, useMemo, useRef } from "react";

interface MonogramUnderlayProps {
  className?: string;
  opacity?: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function MonogramUnderlay({ className = "", opacity = 0.5 }: MonogramUnderlayProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Keep movement subtle but noticeable on mobile.
  const translatePx = 10; // within 8–12px

  const baseOpacity = useMemo(() => {
    const o = typeof opacity === "number" ? opacity : 0.5;
    return clamp(o, 0, 1);
  }, [opacity]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const viewportH = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();

      // progress: -1..1 as the underlay moves through the viewport
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const progress = clamp(centerOffset / viewportH, -1, 1);

      // Small scroll-reactive translate (8–12px range)
      const tx = (-progress * translatePx).toFixed(2);
      const ty = (progress * translatePx).toFixed(2);

      el.style.setProperty("--ws-ring-tx", `${tx}px`);
      el.style.setProperty("--ws-ring-ty", `${ty}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        ["--ws-ring-tx" as any]: "0px",
        ["--ws-ring-ty" as any]: "0px",
      }}
    >
      {/* Mobile: ring half visible on right side */}
      <img
        src="/assets/ring.png"
        alt=""
        className="absolute md:hidden"
        style={{
          height: '100%',
          width: 'auto',
          right: '-40%', // Adjust this value: more negative = more visible, less negative = less visible
          top: '50%',
          transform: 'translateY(-50%) translate3d(var(--ws-ring-tx), var(--ws-ring-ty), 0)',
          opacity: baseOpacity,
        }}
      />
      {/* Desktop: ring positioned at 120% */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/ring.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          backgroundPosition: '125% center',
          width: '100%',
          height: '100%',
          transform: 'translate3d(var(--ws-ring-tx), var(--ws-ring-ty), 0)',
          opacity: baseOpacity,
        }}
      />
    </div>
  );
}

