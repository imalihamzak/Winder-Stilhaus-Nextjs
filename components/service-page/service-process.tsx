"use client";

import {
  Clock,
  Compass,
  Hammer,
  ClipboardCheck,
  LucideIcon,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Service {
  title?: string;
  [key: string]: any;
}

interface ServiceProcessProps {
  service?: Service;
}

interface ProcessStep {
  title: string;
  icon: LucideIcon;
  desc: string;
}

export default function ServiceProcess({ service }: ServiceProcessProps) {
  if (!service) return null;
  const steps: ProcessStep[] = [
    {
      title: "Consultation",
      icon: Clock,
      desc: "Understanding requirements, goals and budget.",
    },
    {
      title: "Design & Planning",
      icon: Compass,
      desc: "Layouts, 3D visuals and material selection.",
    },
    {
      title: "Execution",
      icon: Hammer,
      desc: "Site work, supervision and quality control.",
    },
    {
      title: "Final Handover",
      icon: ClipboardCheck,
      desc: "Final inspection and smooth handover.",
    },
  ];

  return (
    <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/10 backdrop-blur text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F06434' }} />
              Process
            </span>
          </div>
          <h2 className="text-[#214B57] font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Process of {service?.title || "Service"} Service
        </h2>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn
              key={index}
                direction="up"
                delay={index * 0.1}
                className="h-full"
              >
                <div
                  className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] p-6 text-center h-full"
            >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center text-[#214B57] text-xl mb-4 bg-black/5 rounded-full">
                    <Icon />
              </div>
                  <h4 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                {step.title}
              </h4>
                  <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>{step.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

