"use client";

import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Service {
  includes?: string[];
  [key: string]: any;
}

interface WhatsIncludedProps {
  service?: Service;
}

export default function WhatsIncluded({ service }: WhatsIncludedProps) {
  if (!service) return null;
  return (
    <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6 border-t border-[#4A4A4A]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Included
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
            What&apos;s Included
        </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {service.includes?.map((item, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.05}
            >
              <div
                className="flex items-center gap-3 rounded-[20px] border border-[#4A4A4A] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] p-5"
            >
                <div className="w-8 h-8 rounded-full ws-double-ring ws-double-ring--tight ws-double-ring--on-dark bg-[#214B57] flex items-center justify-center shrink-0">
                  <Check className="text-white text-sm" size={16} />
            </div>
                <p className="text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

