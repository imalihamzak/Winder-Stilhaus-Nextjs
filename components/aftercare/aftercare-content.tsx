"use client";

import FadeIn from "@/components/FadeIn";
import { Shield, Wrench, PhoneCall, CheckCircle, Clock, Handshake, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export default function AftercareContent() {
  const services: Service[] = [
    {
      icon: Shield,
      title: "Comprehensive Warranty",
      description: "All our work comes with a comprehensive warranty covering materials, workmanship, and installation. We stand behind every project we complete.",
      details: [
        "Cabinetry and joinery: 2 years",
        "Installation and workmanship: 2 years",
        "Electrical and plumbing work: 1 year",
        "Waterproofing: Extended warranty available",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance Guidance",
      description: "We provide detailed maintenance guides for all materials and finishes used in your project, helping you keep your space looking its best.",
      details: [
        "Material care instructions",
        "Cleaning recommendations",
        "Preventive maintenance schedules",
        "Troubleshooting guides",
      ],
    },
    {
      icon: PhoneCall,
      title: "Dedicated Support",
      description: "Our aftercare team is available to answer questions, address concerns, and provide ongoing support throughout the warranty period.",
      details: [
        "Direct contact with project team",
        "Priority response for warranty issues",
        "Annual check-ins available",
        "Emergency support for urgent matters",
      ],
    },
    {
      icon: Handshake,
      title: "Post-Handover Service",
      description: "After project completion, we remain available to assist with adjustments, refinements, and any questions you may have.",
      details: [
        "30-day snagging period",
        "Adjustments and refinements",
        "Additional work coordination",
        "Ongoing relationship management",
      ],
    },
  ];

  const process: ProcessStep[] = [
    {
      step: 1,
      title: "Project Handover",
      description: "Complete walkthrough with documentation, warranties, and maintenance guides.",
    },
    {
      step: 2,
      title: "30-Day Snagging Period",
      description: "We address any minor issues or adjustments needed after you've lived in the space.",
    },
    {
      step: 3,
      title: "Warranty Coverage",
      description: "Full warranty coverage for materials and workmanship with dedicated support.",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Long-term relationship with annual check-ins and priority support available.",
    },
  ];

  return (
    <>
      {/* Hero Section - Matching service pages spacing */}
      <section className="relative bg-[#1D1D1D] text-white pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Aftercare & Support
            </div>
            <h1 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Aftercare & Support
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Comprehensive warranty coverage, maintenance guidance, and ongoing support for your project.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={i} direction="up" delay={i * 0.1} duration={0.6}>
                <div className="rounded-[24px] border border-[#4A4A4A] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)] p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#214B57]/10 flex items-center justify-center text-[#214B57] text-xl mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-[#1D1D1D] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#7F8C8D] mb-4 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                        <CheckCircle className="text-[#F04E22] mt-0.5 flex-shrink-0" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Process Timeline */}
        <FadeIn className="mb-12" duration={0.6} delay={0.4}>
          <h2 className="font-semibold text-white mb-8 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Aftercare Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div
                key={i}
                className="relative rounded-[20px] border border-[#4A4A4A] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] p-6"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full ws-double-ring ws-double-ring--on-dark text-white flex items-center justify-center font-bold shadow-md" style={{ backgroundColor: '#214B57' }}>
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1D1D1D] mb-2 mt-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#7F8C8D] leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn duration={0.6} delay={0.5}>
          <div className="rounded-[30px] border border-white/20 text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)] p-8 sm:p-10 text-center" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
            <h3 className="font-semibold mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Need Aftercare Support?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Contact our aftercare team for warranty claims, maintenance questions, or ongoing support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="
                  inline-flex items-center justify-center gap-2
                  min-w-[122px] min-h-[31px] px-5 py-2 rounded-md
                  text-sm font-normal font-dm-sans
                  bg-white border border-[#214B57] text-[#214B57]
                  hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:border-2
                  transition-all duration-150 whitespace-nowrap
                  focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2
                  active:bg-[#214B57] active:text-white active:border-[#F04E22] active:border-2
                  shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                "
              >
                Contact Support →
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md border-2 border-white text-white font-normal font-dm-sans hover:bg-white hover:text-[#214B57] transition-all duration-150"
              >
                Call Us <PhoneCall size={18} className="inline" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
    </>
  );
}

