"use client";

import FadeIn from "@/components/FadeIn";
import { Award, Rocket, TrendingUp, Trophy, Star, Building, LucideIcon } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

const milestones: Milestone[] = [
  {
    year: "2014",
    title: "Foundation",
    desc: "Winder & Stilhaus was founded with a vision to transform luxury interior design in Pakistan.",
    icon: Building,
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    year: "2016",
    title: "First Major Award",
    desc: "Received recognition for excellence in residential interior design from the Pakistan Design Council.",
    icon: Award,
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    year: "2018",
    title: "Expansion",
    desc: "Expanded operations to serve clients across major cities, establishing partnerships with premium suppliers.",
    icon: Rocket,
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
  },
  {
    year: "2020",
    title: "100 Projects Milestone",
    desc: "Celebrated completing 100+ successful projects with 100% client satisfaction rate.",
    icon: TrendingUp,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    year: "2022",
    title: "Industry Leadership",
    desc: "Recognized as one of the top 10 interior design firms in Pakistan by leading industry publications.",
    icon: Trophy,
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-600",
  },
  {
    year: "2024",
    title: "500+ Projects",
    desc: "Reached a milestone of 500+ completed projects, serving 480+ happy clients across the country.",
    icon: Star,
    color: "bg-indigo-50 border-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#1D1D1D] py-8 sm:py-10 md:py-12 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Our Journey
            </div>
            <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
              Milestones & Achievements
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              A decade of growth, innovation, and excellence in luxury interior design.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => {
            const Icon = milestone.icon;
            return (
              <FadeIn key={i} direction="up" delay={0.3 + (i * 0.1)} duration={0.6}>
                <div className="relative bg-white border border-[#4A4A4A] rounded-[28px] p-6 sm:p-8 hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)] transition-all group overflow-hidden">
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${milestone.color} opacity-50 blur-3xl -z-0`} />
                  
                  <div className="relative z-10">
                    {/* Year and Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center`}>
                        <Icon className={`text-xl ${milestone.iconColor}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#1D1D1D] font-noto-serif">{milestone.year}</div>
                        <div className="text-xs text-[#7F8C8D] font-medium font-dm-sans">Year</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-[#1D1D1D] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#7F8C8D] leading-relaxed text-sm sm:text-base font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                      {milestone.desc}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 h-px bg-gradient-to-r from-[#214B57]/10 via-[#214B57]/5 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

