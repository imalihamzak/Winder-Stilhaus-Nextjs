"use client";

import { Sofa, Compass, Hammer, Ruler, LucideIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Interior Design",
    description: "Tailored interiors crafted to reflect your personality with timeless elegance.",
    icon: Sofa,
  },
  {
    title: "Kitchen Design",
    description: "Complete renovation solutions from concept to flawless execution.",
    icon: Hammer,
  },
  {
    title: "Bedroom Design",
    description: "From planning to finishing touches, we manage every detail seamlessly.",
    icon: Compass,
  },
  {
    title: "Home Remodeling",
    description: "Transform your home spaces into functional and beautiful sanctuaries.",
    icon: Ruler,
  },
];

export default function LocationServices() {
  return (
    <section className="bg-[#1D1D1D] py-14 md:py-16 px-3 sm:px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-10 md:mb-12" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Services
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Services Available in Your Area
        </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={i} direction="up" delay={i * 0.2} duration={0.6}>
                <div className="rounded-[24px] border border-[#4A4A4A] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)] p-5 sm:p-6">
                  <div className="w-11 h-11 rounded-full ws-double-ring bg-[#214B57]/10 flex items-center justify-center text-[#214B57] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[#1D1D1D] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

