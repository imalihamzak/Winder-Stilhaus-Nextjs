"use client";

import FadeIn from "@/components/FadeIn";
import { Shield, Award, CheckCircle } from "lucide-react";

interface Badge {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive public liability and professional indemnity insurance coverage for your peace of mind.",
  },
  {
    icon: Award,
    title: "Industry Accredited",
    description: "Certified members of leading interior design and construction industry bodies.",
  },
  {
    icon: CheckCircle,
    title: "Building Regulations Compliant",
    description: "All work completed to UK building regulations standards with proper certification and approvals.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F06434' }}></span>
              Trust & Assurance
            </div>
            <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Our Credentials
            </h2>
            <p className="text-[#85929D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              We're committed to maintaining the highest standards of professionalism, safety, and quality in everything we do.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <FadeIn
                key={index}
                direction="up"
                delay={0.3 + index * 0.1}
                duration={0.6}
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white/60 backdrop-blur p-8 text-center hover:shadow-[0_25px_70px_rgba(15,22,36,0.06)] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#214B57]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-[#214B57]" size={32} />
                  </div>
                  <h3 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {badge.title}
                  </h3>
                  <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {badge.description}
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

