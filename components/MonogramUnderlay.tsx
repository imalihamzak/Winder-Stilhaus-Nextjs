"use client";

import { useEffect, useMemo, useRef } from "react";

interface MonogramUnderlayProps {
  className?: string;
  opacity?: number;
  sizePercent?: number;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function MonogramUnderlay({
  className = "",
  opacity = 0.06,
  sizePercent = 100,
}: MonogramUnderlayProps) {
  const ref = useRef<HTMLDivElement>(null);

  const ringOpacity = useMemo(() => clamp(opacity, 0.04, 0.07), [opacity]);
  const ringSize = useMemo(() => clamp(sizePercent, 80, 240), [sizePercent]);

  /* 🔥 STRONG, PERCEIVABLE SCROLL PARALLAX */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      /*
        React within FIRST 80px of scroll
        This guarantees visible motion
      */
      const distance =
        rect.top + rect.height / 2 - vh / 2;

      const p = clamp(distance / 80, -1, 1);

      // ⬅️⬆️ exaggerated but still "gentle"
      const tx = -p * 26;
      const ty = p * 22;

      el.style.setProperty("--ring-x", `${tx}px`);
      el.style.setProperty("--ring-y", `${ty}px`);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none overflow-hidden ${className}`}
      style={{
        ["--ring-x" as any]: "0px",
        ["--ring-y" as any]: "0px",
      }}
    >
      {/* MOBILE */}
      <img
        src="/assets/ring.png"
        alt=""
        className="md:hidden absolute"
        style={{
          height: "100%",
          width: "auto",
          right: "-35%",
          top: "0",
          transform:
            "translate3d(var(--ring-x), var(--ring-y), 0)",
          opacity: ringOpacity,
        }}
        loading="eager"
        decoding="async"
      />

      {/* DESKTOP */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url(/assets/ring.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto ${ringSize}%`,
          backgroundPosition: "125% center",
          transform:
            "translate3d(var(--ring-x), var(--ring-y), 0)",
          opacity: ringOpacity,
        }}
      />
    </div>
  );
}
