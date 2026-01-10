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

  // ✅ Mobile-specific safe scaling (slightly larger than before)
  const mobileRingSize = useMemo(() => clamp(ringSize * 0.6, 45, 85), [ringSize]);


  /* Scroll parallax */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - vh / 2;
      const p = clamp(offset / vh, -1, 1);

      const tx = -p * 10;
      const ty = p * 10;

      const t = 1 - Math.abs(p);
      const o = minOpacity + (maxOpacity - minOpacity) * t;

      el.style.setProperty("--ws-ring-tx", `${tx}px`);
      el.style.setProperty("--ws-ring-ty", `${ty}px`);
      el.style.setProperty("--ws-ring-opacity", `${o}`);

      // Mobile: keep position consistent across sections by scaling the
      // "push-right" offset based on the ring's rendered size in THIS section.
      // This avoids Hero (short) being pushed fully off-screen while Footer (tall)
      // still looks correct.
      const isMobile = window.matchMedia?.("(max-width: 767px)").matches;
      if (isMobile) {
        const ringPx = (rect.height * mobileRingSize) / 100;
        // Move ring less to the right on mobile (brings it left/more visible)
        const mobileOffsetPx = clamp(ringPx * 0.15, 0, 80);
        el.style.setProperty("--ws-ring-mobile-offset", `${mobileOffsetPx.toFixed(0)}px`);

        // Also cap the ring size to the available section height (prevents cropping).
        const availableH = Math.max(0, rect.height - 24);
        const desired = Math.min(availableH, (window.innerWidth || 0) * 0.95);
        const sizePx = clamp(desired, 180, 420);
        el.style.setProperty("--ws-ring-mobile-size", `${Math.round(sizePx)}px`);
      }
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

  /* Idle motion */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const start = performance.now();

    const loop = (time: number) => {
      const t = (time - start) / 1000;
      el.style.setProperty("--ws-ring-idle-x", `${Math.sin(t * 0.9) * 5}px`);
      el.style.setProperty("--ws-ring-idle-y", `${Math.cos(t * 0.75) * 5}px`);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none overflow-hidden ${className}`}
      style={{
        ["--ws-ring-tx" as any]: "0px",
        ["--ws-ring-ty" as any]: "0px",
        ["--ws-ring-idle-x" as any]: "0px",
        ["--ws-ring-idle-y" as any]: "0px",
        ["--ws-ring-opacity" as any]: `${maxOpacity}`,
        ["--ws-ring-mobile-offset" as any]: "40px",
        ["--ws-ring-mobile-size" as any]: "300px",
      }}
    >
      {/* ✅ MOBILE — FIXED & CONSISTENT */}
      <img
        src="/assets/ring.png"
        alt=""
        className="md:hidden absolute"
        style={{
          // Mobile: size in px, capped to section height to avoid bottom cropping
          height: "var(--ws-ring-mobile-size)" as any,
          width: "auto",
          // Anchor by center so position is consistent across sections
          left: "68%",
          top: "50%",
          transform:
            "translate(-50%, -50%) translate3d(calc(var(--ws-ring-tx) + var(--ws-ring-idle-x)), 0, 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
        loading="eager"
        decoding="async"
      />

      {/* ✅ DESKTOP — UNTOUCHED */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url(/assets/ring.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto ${ringSize}%`,
          backgroundPosition: "125% center",
          transform:
            "translate3d(calc(var(--ws-ring-tx) + var(--ws-ring-idle-x)), calc(var(--ws-ring-ty) + var(--ws-ring-idle-y)), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
      />
    </div>
  );
}
