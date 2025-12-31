"use client";

import FadeIn from "@/components/FadeIn";
import {
  Handshake,
  Compass,
  Hammer,
  CheckCircle,
  Home,
} from "lucide-react";

export default function HowWeWorkContent() {
  const steps = [
    {
      id: "step-1",
      number: 1,
      title: "Initial Consultation",
      icon: Handshake,
      description:
        "We start with a comprehensive consultation to understand your vision, requirements, budget, and timeline. This includes an on-site visit to assess your space and discuss your goals in detail.",
      details: [
        "Free initial consultation and site visit",
        "Discussion of your vision, lifestyle, and preferences",
        "Budget and timeline assessment",
        "Initial design direction and recommendations",
      ],
    },
    {
      id: "step-2",
      number: 2,
      title: "Design & Planning",
      icon: Compass,
      description:
        "Our design team creates detailed layouts, 3D visualisations, and material selections tailored to your preferences. We present design concepts and refine them based on your feedback until everything is perfect.",
      details: [
        "Detailed space planning and layouts",
        "3D visualisations and mood boards",
        "Material and finish selections",
        "Design refinement based on your feedback",
      ],
    },
    {
      id: "step-3",
      number: 3,
      title: "Project Management & Execution",
      icon: Hammer,
      description:
        "Once designs are approved, we manage the entire project from procurement to installation. Our team coordinates with trusted suppliers and craftspeople, ensuring quality at every stage.",
      details: [
        "Complete project management",
        "Coordination with suppliers and trades",
        "Regular progress updates",
        "Quality assurance throughout",
      ],
    },
    {
      id: "step-4",
      number: 4,
      title: "Quality Control & Refinement",
      icon: CheckCircle,
      description:
        "Throughout the project, we conduct regular site visits and quality checks. We address any issues promptly and ensure everything meets our premium standards before final handover.",
      details: [
        "Regular site inspections",
        "Quality control checks",
        "Prompt issue resolution",
        "Final quality assurance",
      ],
    },
    {
      id: "step-5",
      number: 5,
      title: "Final Handover & Aftercare",
      icon: Home,
      description:
        "We complete a thorough final inspection with you, ensuring every detail is perfect. After handover, we provide ongoing support and maintenance guidance to keep your space looking its best.",
      details: [
        "Final walkthrough and inspection",
        "Care and maintenance guidance",
        "Warranty information",
        "Ongoing support and assistance",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section - Matching service pages spacing exactly */}
      <section className="relative bg-white text-[#1D1D1D] pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Our Process
            </div>
            <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              How We Work
            </h1>
            <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              A clear, transparent 5-step process designed to deliver premium interior design and renovation services with precision and care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn
                  key={step.id}
                  direction="up"
                  delay={0.15 + index * 0.1}
                  duration={0.6}
                  id={step.id}
                >
                  <div className="relative">
                    {/* Connector Line (except last) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#1a1d29]/20 to-transparent" />
                    )}

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0 flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-[#214B57] text-white flex items-center justify-center text-xl font-bold shadow-[0_14px_35px_rgba(33,75,87,0.08)]">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-[#214B57]/10 flex items-center justify-center text-[#214B57] text-xl mt-2">
                          <Icon />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl p-6 sm:p-8 shadow-sm">
                        <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                          {step.title}
                        </h2>
                        <p className="text-[#85929D] mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          {step.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-[#85929D] font-dm-sans"
                              style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
                            >
                              <span className="text-[#F04E22] font-bold mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" delay={0.7} duration={0.6}>
            <div className="mt-12 sm:mt-16 rounded-3xl border border-[#e5e7eb] bg-[#214B57] text-white shadow-lg p-8 sm:p-10 text-center">
              <h2 className="font-semibold mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Book a free consultation and let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white text-[#214B57] font-normal font-dm-sans shadow-lg hover:bg-[#F04E22] hover:text-white transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                >
                  Book a consultation <span className="text-lg">→</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md border-2 border-white text-white font-normal font-dm-sans hover:bg-white hover:text-[#214B57] transition-all duration-150"
                >
                  Call us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
