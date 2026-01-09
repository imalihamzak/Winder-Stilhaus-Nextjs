"use client";

import FadeIn from "@/components/FadeIn";
import { Gem, Eye, Lightbulb, Heart, LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const values: Value[] = [
  {
    icon: Gem,
    title: "Quality Excellence",
    desc: "We never compromise on craftsmanship, materials, or finishing. Every detail is meticulously planned and executed to perfection.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear pricing, honest timelines, and open communication at every stage. No hidden costs, no surprises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern design solutions driven by creativity and cutting-edge technology. We stay ahead of trends while respecting timeless elegance.",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "Every decision revolves around client comfort and satisfaction. Your vision is our mission, and your happiness is our success.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#1D1D1D] py-8 sm:py-10 md:py-12 text-white border-t border-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
            <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              What We Stand For
            </div>
            <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
          Our Core Values
        </h2>
            <p className="text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <FadeIn key={i} direction="up" delay={0.3 + (i * 0.15)} duration={0.6}>
                <div className="relative bg-white border border-[#4A4A4A] p-8 rounded-[28px] text-center hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)] transition-all group">
                  <div className="w-16 h-16 rounded-full ws-double-ring bg-[#214B57]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#214B57] transition-colors group-hover:[--ws-ring-outer:rgba(255,255,255,0.18)] group-hover:[--ws-ring-inner:rgba(255,255,255,0.12)]">
                    <Icon className="text-2xl text-[#214B57] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-semibold text-[#1D1D1D] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                {value.title}
              </h4>
                  <p className="text-[#7F8C8D] text-sm sm:text-base leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                {value.desc}
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

