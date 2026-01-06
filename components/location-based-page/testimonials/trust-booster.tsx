"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// components/testimonials/TrustBoosters.tsx

interface Booster {
  value: string;
  label: string;
}

interface ParsedValue {
  num: number;
  suffix: string;
}

const boosters: Booster[] = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Projects Delivered" },
];

function parseValue(str: string): ParsedValue {
  const cleaned = String(str).replace(/,/g, "").trim();
  const suffix = cleaned.endsWith("+") ? "+" : "";
  const num = parseInt(cleaned.replace(/\D/g, ""), 10) || 0;
  return { num, suffix };
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function TrustBoosters() {
  const wrapRef = useRef<HTMLElement>(null);

  // used to trigger animation each time we re-enter
  const [runKey, setRunKey] = useState<number>(0);

  const targets = useMemo(() => boosters.map((b) => parseValue(b.value)), []);
  const [counts, setCounts] = useState<number[]>(() => targets.map(() => 0));

  // gate so it doesn't spam-trigger while still visible
  const canTriggerRef = useRef<boolean>(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // only trigger once per "visit"
          if (canTriggerRef.current) {
            canTriggerRef.current = false;

            // reset to 0 then animate
            setCounts(targets.map(() => 0));
            setRunKey((k) => k + 1);
          }
        } else {
          // once we leave, allow re-trigger next time
          canTriggerRef.current = true;

          // optional: reset when leaving so it always "counts up" next time
          setCounts(targets.map(() => 0));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px 0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [targets]);

  // Animate counts every time runKey changes
  useEffect(() => {
    if (runKey === 0) return;

    const duration = 1300; // premium pace
    const start = performance.now();
    const endVals = targets.map((t) => t.num);

    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);

      const next = endVals.map((end) => Math.round(end * eased));
      setCounts(next);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [runKey, targets]);

  return (
    <section ref={wrapRef} className="mt-14 md:mt-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {boosters.map((item, i) => {
            const { suffix } = targets[i];

            return (
              <div
                key={item.label + i}
                className="
                  relative overflow-hidden
                  rounded-[26px]
                  border border-[#4A4A4A]
                  bg-white
                  shadow-[0_24px_70px_-50px_rgba(0,0,0,0.14)]
                  px-6 py-7 sm:px-8 sm:py-9
                "
              >

                <div className="relative">
                  <div className="flex items-end justify-between">
                    <h3 className="text-[44px] sm:text-[52px] leading-none font-semibold tracking-tight text-[#214B57] font-noto-serif">
                      {formatNumber(counts[i] || 0)}
                      <span className="text-[#85929D]">{suffix}</span>
                    </h3>

                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4A4A4A]/20 bg-[#4A4A4A]/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#1D1D1D] font-dm-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1D1D1D]" />
                      Trusted
                    </span>
                  </div>

                  <p className="mt-3 text-sm sm:text-base text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {item.label}
                  </p>

                  <div className="mt-5 h-px w-full bg-[#4A4A4A]/20" />

                  <p className="mt-4 text-xs text-[#85929D] leading-relaxed font-dm-sans">
                    Verified performance across design, materials, and execution.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

