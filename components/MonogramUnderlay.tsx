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

  // Scroll-based parallax (unchanged)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

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

      el.style.setProperty("--ws-ring-tx", `${tx.toFixed(2)}px`);
      el.style.setProperty("--ws-ring-ty", `${ty.toFixed(2)}px`);
      el.style.setProperty("--ws-ring-opacity", `${o.toFixed(4)}`);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [maxOpacity]);

  // 🔥 Faster idle motion
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let rafId = 0;
    const start = performance.now();

    const loop = (time: number) => {
      const t = (time - start) / 1000;

      // Increased speed + slightly larger amplitude
      const ix = Math.sin(t * 0.9) * 5; // was 0.35 / 3px
      const iy = Math.cos(t * 0.75) * 5;

      el.style.setProperty("--ws-ring-idle-x", `${ix.toFixed(2)}px`);
      el.style.setProperty("--ws-ring-idle-y", `${iy.toFixed(2)}px`);

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        ["--ws-ring-tx" as any]: "0px",
        ["--ws-ring-ty" as any]: "0px",
        ["--ws-ring-idle-x" as any]: "0px",
        ["--ws-ring-idle-y" as any]: "0px",
        ["--ws-ring-opacity" as any]: `${maxOpacity}`,
      }}
    >
      {/* Mobile */}
      <img
        src="/assets/ring.png"
        alt=""
        className="absolute md:hidden"
        style={{
          height: `${ringSize}%`,
          width: "auto",
          right: "-40%",
          top: "50%",
          transform:
            "translateY(-50%) translate3d(calc(var(--ws-ring-tx) + var(--ws-ring-idle-x)), calc(var(--ws-ring-ty) + var(--ws-ring-idle-y)), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
        loading="eager"
        decoding="async"
      />

      {/* Desktop */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url(/assets/ring.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto ${ringSize}%`,
          backgroundPosition: "125% center",
          width: "100%",
          height: "100%",
          transform:
            "translate3d(calc(var(--ws-ring-tx) + var(--ws-ring-idle-x)), calc(var(--ws-ring-ty) + var(--ws-ring-idle-y)), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
      />
    </div>
  );
}
