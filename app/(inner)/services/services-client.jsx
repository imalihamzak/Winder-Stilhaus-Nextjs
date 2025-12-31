"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  Sofa,
  DoorOpen,
  Compass,
  Hammer,
  Lightbulb,
  Paintbrush,
  Ruler,
  Grid3x3,
  Wrench,
} from "lucide-react";

// Group services by category for better organization
const SERVICE_CATEGORIES = [
  {
    category: "Design & Planning",
    services: [
      {
        slug: "full-home-design",
        title: "Full Home Design",
        description:
          "Complete interior design solutions from concept to execution. Layouts, finishes, and styling for modern living with timeless detail.",
        icon: Compass,
      },
      {
        slug: "space-planning",
        title: "Space Planning",
        description:
          "Optimize your home's layout for better flow, functionality, and visual balance. Professional space analysis and design.",
        icon: Ruler,
      },
      {
        slug: "material-selection",
        title: "Material Selection",
        description:
          "Curated selection of premium materials — stone, wood, metals, and fabrics — chosen with professional expertise.",
        icon: Compass,
      },
    ],
  },
  {
    category: "Renovation & Remodeling",
    services: [
      {
        slug: "kitchen-renovation",
        title: "Kitchen Renovation",
        description:
          "Premium cabinetry, stone worktops, and lighting solutions. Refined, functional spaces built to last.",
        icon: Sofa,
      },
      {
        slug: "bathroom-remodeling",
        title: "Bathroom Remodeling",
        description:
          "Luxury fittings, seamless tiling, and spa-level comfort. Designed around your space and lifestyle.",
        icon: Hammer,
      },
      {
        slug: "turnkey-renovation",
        title: "Turnkey Renovation",
        description:
          "End-to-end renovation services with bespoke detailing, premium materials, and complete project management.",
        icon: Wrench,
      },
    ],
  },
  {
    category: "Styling & Finishing",
    services: [
      {
        slug: "living-lounge-styling",
        title: "Living & Lounge Styling",
        description:
          "Comfort-first planning with premium textures, layered lighting, and clean detailing for elegant living spaces.",
        icon: Grid3x3,
      },
      {
        slug: "bedrooms-wardrobes",
        title: "Bedrooms & Wardrobes",
        description:
          "Calm, elegant spaces with smart storage planning, premium finishes, and soft lighting for restful environments.",
        icon: DoorOpen,
      },
      {
        slug: "lighting-design",
        title: "Lighting Design",
        description:
          "Ambient, task, and accent lighting plans to elevate mood and enhance architectural features.",
        icon: Lightbulb,
      },
      {
        slug: "paint-finishes",
        title: "Paint & Finishes",
        description:
          "High-end paint systems and surface finishing that feels clean, timeless, and professionally executed.",
        icon: Paintbrush,
      },
    ],
  },
  {
    category: "Custom Solutions",
    services: [
      {
        slug: "custom-furniture",
        title: "Custom Furniture",
        description:
          "Made-to-measure furniture with premium materials and tailored proportions for your unique space.",
        icon: Wrench,
      },
      {
        slug: "on-site-execution",
        title: "On-Site Execution",
        description:
          "Supervised execution and quality checks to ensure premium delivery without delays or compromises.",
        icon: Hammer,
      },
    ],
  },
];

export default function ServicesPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-0 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn direction="up" delay={0.1} duration={0.6}>
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-4 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
                Our Services
              </div>
              <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Complete Interior Solutions
              </h1>
              <p className="text-[#85929D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                From concept to completion, we deliver premium interiors tailored to your vision and lifestyle.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services by Category */}
      <section className="bg-white px-3 sm:px-4 md:px-6 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto">
          {SERVICE_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16 md:mb-20 last:mb-0">
              <FadeIn delay={categoryIndex * 0.1}>
                <div className="mb-8 md:mb-10">
                  <h2 className="text-[#214B57] font-noto-serif mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {category.category}
                  </h2>
                  <div className="h-px w-20 bg-[#214B57]"></div>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <FadeIn
                      key={service.slug}
                      delay={categoryIndex * 0.1 + serviceIndex * 0.05}
                      duration={0.6}
                    >
                      <Link
                        href={`/service/${service.slug}`}
                        className="group block h-full rounded-[20px] border border-black/10 bg-white p-6 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(26,29,41,0.04)] transition-all"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl border border-black/10 bg-black/[0.02] flex items-center justify-center text-[#214B57] group-hover:bg-[#214B57] group-hover:text-white transition-colors shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[#214B57] mb-2 group-hover:text-[#214B57] transition-colors font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                              {service.title}
                            </h3>
                            <p className="text-sm text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-[#214B57] mt-4 pt-4 border-t border-black/5 font-dm-sans">
                          View details
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-3 sm:px-4 md:px-6 py-14 md:py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/55 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.05)] p-8 sm:p-10 md:p-12 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
              
              <div className="relative">
                <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  Ready to Start Your Project?
                </h2>
                <p className="text-[#85929D] mb-8 max-w-xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  Get a free consultation with our design experts and discover how we can transform your space.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md text-white text-sm font-normal font-dm-sans hover:bg-[#214B57] transition-all duration-150 active:bg-white active:text-[#F04E22] active:border-2 active:border-[#F04E22]"
                  style={{ backgroundColor: '#F04E22' }}
                >
                  Get Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

