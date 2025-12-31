"use client";

import FadeIn from "@/components/FadeIn";
import { Award, GraduationCap, Linkedin } from "lucide-react";

export default function FounderSection() {
  const achievements = [
    "15+ Industry Awards",
    "Featured in Top Design Magazines",
    "Speaker at Design Conferences",
    "Mentor to 50+ Designers",
  ];

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
            <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Leadership
            </div>
            <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Meet Our Founder
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={0.3} duration={0.6}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_25px_70px_rgba(15,22,36,0.05)]">
                <div className="relative h-[500px] sm:h-[600px]">
        <img
          src="/assets/profile/img-1.png"
                    alt="Kiran Ahmed - Founder"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur border border-[#e5e7eb] rounded-2xl p-5 shadow-[0_18px_45px_rgba(26,29,41,0.06)]">
                <div className="flex items-center gap-3">
                  <Award className="text-2xl text-[#214B57]" size={28} />
                  <div>
                    <div className="text-lg font-bold text-[#214B57] font-noto-serif">15+ Awards</div>
                    <div className="text-xs text-[#85929D] font-dm-sans">Industry Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4} duration={0.6}>
            <div className="space-y-6">
        <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214B57]/10 text-xs font-semibold text-[#214B57] mb-4 font-dm-sans">
                  <GraduationCap size={16} />
            Founder & Creative Director
                </div>
                <h3 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Kiran Ahmed
          </h3>
                <p className="text-[#85929D] mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  With over a decade of experience in luxury interior design, Kiran Ahmed 
            leads every project with a passion for precision, innovation, and
                  craftsmanship. His visionary approach has shaped Winder & Stilhaus into 
                  one of Pakistan's most respected design studios.
                </p>
                <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  Kiran's expertise spans residential and commercial spaces, with a 
                  particular focus on creating timeless luxury environments that blend 
                  aesthetic beauty with functional excellence. His commitment to client 
                  satisfaction and design innovation drives the studio's continued success.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>Key Achievements</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#e5e7eb] bg-white/60 backdrop-blur"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#214B57]" />
                      <span className="text-sm text-[#85929D] font-medium font-dm-sans">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-6 py-2 rounded-md border border-black/10 bg-white text-[#214B57] font-normal font-dm-sans shadow-[0_10px_25px_rgba(15,22,36,0.03)] hover:bg-black/[0.03] transition"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
