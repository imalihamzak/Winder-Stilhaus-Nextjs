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
    () => clamp(typeof opacity === "number" ? opacity : 0.06, 0.04, 0.07),
    [opacity]
  );
  const minOpacity = 0.04;

  const ringSize = useMemo(
    () => clamp(typeof sizePercent === "number" ? sizePercent : 100, 80, 240),
    [sizePercent]
  );

  // ✅ Mobile-specific safe scaling
const mobileRingSize = useMemo(
  () => clamp(ringSize * 0.45, 35, 65),
  [ringSize]
);


  /* Scroll-based parallax (unchanged) */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const viewportH = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const progress = clamp(centerOffset / viewportH, -1, 1);

      const tx = -progress * 10;
      const ty = progress * 10;

      const t = 1 - Math.min(1, Math.abs(progress));
      const o = minOpacity + (maxOpacity - minOpacity) * t;

      el.style.setProperty("--ws-ring-tx", `${tx}px`);
      el.style.setProperty("--ws-ring-ty", `${ty}px`);
      el.style.setProperty("--ws-ring-opacity", `${o}`);

      // Mobile: scale the "push-right" offset with section height so it looks
      // consistent across Hero/FAQ/Footer (which have very different heights).
      const isMobile = window.matchMedia?.("(max-width: 767px)").matches;
      if (isMobile) {
        const mobileOffsetPx = clamp(rect.height * 0.25, 120, 260);
        el.style.setProperty("--ws-ring-mobile-offset", `${mobileOffsetPx.toFixed(0)}px`);
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxOpacity]);

  /* Idle motion */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    const start = performance.now();

    const loop = (time: number) => {
      const t = (time - start) / 1000;

      const ix = Math.sin(t * 0.9) * 5;
      const iy = Math.cos(t * 0.75) * 5;

      el.style.setProperty("--ws-ring-idle-x", `${ix}px`);
      el.style.setProperty("--ws-ring-idle-y", `${iy}px`);

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
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
        ["--ws-ring-mobile-offset" as any]: "180px",
      }}
    >
      {/* ✅ MOBILE — fixed sizing, no vertical cropping */}
      <div
        className="md:hidden absolute inset-0"
        style={{
          backgroundImage: "url(/assets/ring.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto ${mobileRingSize}%`,
          // Mobile: center vertically; push towards the right consistently.
          backgroundPosition: "calc(100% + var(--ws-ring-mobile-offset)) center",
          transform:
            "translate3d(calc(var(--ws-ring-tx) + var(--ws-ring-idle-x)), 0px, 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
      />

      {/* DESKTOP — untouched */}
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
