"use client";

import FadeIn from "@/components/FadeIn";
import { Award, Lightbulb, Handshake, Rocket, LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function BrandStory() {
  const stats: StatItem[] = [
    { icon: Award, label: "Award Winning", value: "15+" },
    { icon: Handshake, label: "Client Satisfaction", value: "97%" },
  ];

  return (
    <section className="bg-[#1D1D1D] pt-0 pb-8 sm:pb-10 md:pb-12 text-white border-t border-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Our Story
            </div>
            <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
              Where Excellence Meets Innovation
        </h2>
            <p className="text-white/90 max-w-3xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              Founded in 2014, Winder&Stilhaus has been at the forefront of luxury interior design, 
              transforming spaces across Pakistan with unparalleled craftsmanship and visionary design.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          <FadeIn direction="right" delay={0.3} duration={0.6}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-[#4A4A4A] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.1)]">
                <div className="relative h-[400px] sm:h-[500px]">
                  <img
                    src="/assets/portfolio/kitchen.png"
                    alt="Our work"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur border border-[#e5e7eb] rounded-2xl p-6 shadow-[0_18px_45px_rgba(26,29,41,0.06)]">
                <div className="text-3xl font-bold text-[#214B57] mb-1 font-noto-serif">500+</div>
                <div className="text-sm text-[#85929D] font-dm-sans">Projects Delivered</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4} duration={0.6}>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
                  Our Journey
                </h3>
                <div className="space-y-4 text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
                  <p>
                    What started as a small design studio with a vision has grown into 
                    one of Pakistan's most trusted luxury interior design firms. We've 
                    consistently pushed boundaries, combining traditional craftsmanship 
                    with modern innovation.
          </p>
                  <p>
                    Our commitment to excellence has earned us recognition from industry 
                    leaders and the trust of hundreds of clients who have transformed 
                    their spaces with us.
                  </p>
                  <p>
                    Today, we continue to set new standards in luxury interior design, 
                    delivering turnkey solutions that exceed expectations and create 
                    lasting value for our clients.
          </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-[#4A4A4A] bg-white"
                    >
                      <Icon className="text-[#214B57] mb-2 text-xl" />
                      <div className="text-2xl font-bold text-[#1D1D1D] font-noto-serif">{item.value}</div>
                      <div className="text-xs text-[#7F8C8D] mt-1 font-dm-sans">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mission & Vision */}
        <FadeIn direction="up" delay={0.5} duration={0.6}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-[28px] border border-[#4A4A4A] bg-white p-8 sm:p-10">
              <div className="w-14 h-14 rounded-full bg-[#214B57]/10 flex items-center justify-center mb-6">
                <Lightbulb className="text-2xl text-[#214B57]" size={28} />
              </div>
              <h3 className="font-semibold text-[#1D1D1D] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>Our Mission</h3>
              <p className="text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                To create meaningful luxury spaces that enhance lifestyle and long-term value 
                for our clients. We believe every space tells a story, and we're here to 
                craft yours with precision, passion, and unparalleled attention to detail.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-[#4A4A4A] bg-white p-8 sm:p-10">
              <div className="w-14 h-14 rounded-full bg-[#214B57]/10 flex items-center justify-center mb-6">
                <Rocket className="text-2xl text-[#214B57]" size={28} />
              </div>
              <h3 className="font-semibold text-[#1D1D1D] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>Our Vision</h3>
              <p className="text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                To become the most trusted luxury interior design brand in the region through 
                quality, innovation, and unwavering commitment to client satisfaction. We envision 
                a future where every space we touch becomes a masterpiece of design and functionality.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

