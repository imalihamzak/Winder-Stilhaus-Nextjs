"use client";

import { useEffect, useMemo, useRef } from "react";

interface MonogramUnderlayProps {
  className?: string;
  opacity?: number;
  /**
   * Controls the rendered ring size as a percentage.
   * Example: 200 means "200%".
   */
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

  const maxOpacity = useMemo(() => clamp(typeof opacity === "number" ? opacity : 0.06, 0.04, 0.07), [opacity]);
  const minOpacity = 0.04;
const ringSize = useMemo(
  () => clamp(typeof sizePercent === "number" ? sizePercent : 100, 80, 240),
  [sizePercent]
);


  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const viewportH = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const progress = clamp(centerOffset / viewportH, -1, 1);

      // Small scroll translate: 8–12px range (we keep it subtle and consistent).
      const tx = -progress * 10; // px
      const ty = progress * 10; // px

      // Opacity range: 4–7%, strongest near viewport center.
      const t = 1 - Math.min(1, Math.abs(progress));
      const o = minOpacity + (maxOpacity - minOpacity) * t;

      el.style.setProperty("--ws-ring-tx", `${tx.toFixed(2)}px`);
      el.style.setProperty("--ws-ring-ty", `${ty.toFixed(2)}px`);
      el.style.setProperty("--ws-ring-opacity", `${o.toFixed(4)}`);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [maxOpacity]);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className={`absolute inset-0 z-[1] pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        // Default values for first paint (then updated on scroll).
        ["--ws-ring-tx" as any]: "0px",
        ["--ws-ring-ty" as any]: "0px",
        ["--ws-ring-opacity" as any]: `${maxOpacity}`,
      }}
    >
      {/* Mobile: ring half visible on right side */}
      <img
        src="/assets/ring.png"
        alt=""
        className="absolute md:hidden"
        style={{
          height: `${ringSize}%`,
          width: "auto",
          right: "-40%", // Adjust this value: more negative = more visible, less negative = less visible
          top: "50%",
          transform:
            "translateY(-50%) translate3d(var(--ws-ring-tx), var(--ws-ring-ty), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
        loading="eager"
        decoding="async"
      />
      {/* Desktop: ring positioned at 120% */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url(/assets/ring.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto ${ringSize}%`,
          backgroundPosition: "125% center",
          width: "100%",
          height: "100%",
          transform: "translate3d(var(--ws-ring-tx), var(--ws-ring-ty), 0)",
          opacity: "var(--ws-ring-opacity)" as any,
        }}
      />
    </div>
  );
}

