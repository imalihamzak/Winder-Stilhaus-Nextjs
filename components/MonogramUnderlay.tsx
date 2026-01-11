"use client";

import { useEffect, useMemo, useRef } from "react";

interface MonogramUnderlayProps {
  className?: string;
  opacity?: number;
  sizePercent?: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function MonogramUnderlay({
  className = "",
  opacity = 0.06,
  sizePercent = 100,
}: MonogramUnderlayProps) {
  const ref = useRef<HTMLDivElement>(null);

  const maxOpacity = useMemo(
    () => clamp(opacity, 0.04, 0.07),
    [opacity]
  );
  const minOpacity = 0.04;

  const ringSize = useMemo(
    () => clamp(sizePercent, 80, 240),
    [sizePercent]
  );

  /* Scroll-reactive parallax ONLY */
useEffect(() => {
  const el = ref.current;
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let raf = 0;

  const update = () => {
    raf = 0;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;

    // Progress of section through viewport (-1 → 0 → 1)
    const progress =
      (rect.top + rect.height / 2 - vh / 2) / (vh / 2);

    const p = clamp(progress, -1, 1);

    // 8–12px movement range
    const tx = -p * 10;
    const ty = p * 10;

    el.style.setProperty("--ws-ring-tx", `${tx}px`);
    el.style.setProperty("--ws-ring-ty", `${ty}px`);
    el.style.setProperty("--ws-ring-opacity", `${maxOpacity}`);
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
}, [maxOpacity]);


  return (
    <div
      aria-hidden
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none overflow-hidden ${className}`}
      style={{
        ["--ws-ring-tx" as any]: "0px",
        ["--ws-ring-ty" as any]: "0px",
        ["--ws-ring-opacity" as any]: maxOpacity,
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
          transform: "translate3d(var(--ws-ring-tx), 0, 0)",
          opacity: "var(--ws-ring-opacity)" as any,
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
          transform: "translate3d(var(--ws-ring-tx), var(--ws-ring-ty), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
      />
    </div>
  );
}
