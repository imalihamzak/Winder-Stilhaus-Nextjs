"use client";

import BrandStory from '@/components/about-us/brand-story';
import FounderSection from '@/components/about-us/founder-section';
import TeamSection from '@/components/about-us/team-section';
import WhyChooseUs from '@/components/about-us/why-choose-us';
import CoreValues from '@/components/about-us/core-values';
import TimelineSection from '@/components/about-us/timeline-section';
import AboutCTA from '@/components/about-us/about-cta';
import FadeIn from '@/components/FadeIn';

export default function AboutPageClient() {
  return (
    <div className="relative min-h-screen bg-white text-[#1D1D1D]">
      <div className="relative z-10">
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <BrandStory />
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={0.6}>
          <FounderSection />
        </FadeIn>

        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <TeamSection />
        </FadeIn>

        <FadeIn direction="up" delay={0.5} duration={0.6}>
          <WhyChooseUs />
        </FadeIn>

        <FadeIn direction="up" delay={0.6} duration={0.6}>
          <CoreValues />
        </FadeIn>

        <FadeIn direction="up" delay={0.7} duration={0.6}>
          <TimelineSection />
        </FadeIn>

        <FadeIn direction="up" delay={0.8} duration={0.6}>
          <AboutCTA />
        </FadeIn>
      </div>
    </div>
  );
}

