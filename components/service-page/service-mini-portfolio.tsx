"use client";

import FadeIn from "@/components/FadeIn";

interface Project {
  title: string;
  location: string;
  image: string;
}

interface Service {
  title?: string;
  gallery?: Project[];
  [key: string]: any;
}

interface ServiceMiniPortfolioProps {
  service?: Service;
}

export default function ServiceMiniPortfolio({ service }: ServiceMiniPortfolioProps) {
  if (!service) return null;
  // Use service-specific gallery if provided, otherwise use defaults
  const projects: Project[] = service?.gallery || [
    {
      title: "Modern Living Room",
      location: "Leeds",
      image: "/assets/portfolio/kitchen.png",
    },
    {
      title: "Luxury Bedroom",
      location: "Harrogate",
      image: "/assets/portfolio/kitchen.png",
    },
    {
      title: "Premium Kitchen",
      location: "Ilkley",
      image: "/img-2.png",
    },
    {
      title: "Executive Office",
      location: "Wetherby",
      image: "/img-1.png",
    },
  ];

  return (
    <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6 border-t border-[#4A4A4A]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Portfolio
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
         {service?.title || "Service"} Related Projects
        </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((item, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.1}
            >
              <div
                className="rounded-[24px] border border-[#4A4A4A] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)] overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                src={item.image}
                alt={item.title}
                    className="w-full h-full object-cover"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                </div>
                <div className="p-5">
                  <h4 className="text-[#1D1D1D] font-noto-serif mb-1" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                  {item.title}
                </h4>
                  <p className="text-[#7F8C8D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                  {item.location}
                </p>
                <a
                    href="/project"
                    className="inline-flex items-center gap-2 text-sm font-dm-sans text-[#214B57] hover:opacity-80 transition"
                    style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#214B57' }}
                >
                  View Project →
                </a>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

