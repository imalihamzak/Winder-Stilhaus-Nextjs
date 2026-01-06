"use client";

import FadeIn from "@/components/FadeIn";
import {
  FaHome,
  FaBroom,
  FaBed,
  FaBox,
  FaDoorOpen,
} from "react-icons/fa";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  image: string;
}

export default function InteriorsSections() {
  const sections: Section[] = [
    {
      id: "living",
      title: "Living",
      icon: FaHome,
      description:
        "Create inviting living spaces that balance comfort with style. We design living rooms that serve as the heart of your home, with thoughtful layouts, premium furnishings, and elegant finishes.",
      features: [
        "Space planning and furniture layout",
        "Premium upholstery and furnishings",
        "Lighting design for ambience",
        "Media and entertainment integration",
        "Fireplace and feature wall design",
      ],
      image: "/img-1.png",
    },
    {
      id: "utility",
      title: "Utility",
      icon: FaBroom,
      description:
        "Transform your utility room into an efficient, organised space. We design utility rooms that maximise storage, improve workflow, and make household tasks more manageable.",
      features: [
        "Optimised storage solutions",
        "Work surface and sink planning",
        "Appliance integration",
        "Drying and laundry organisation",
        "Durable, practical finishes",
      ],
      image: "/img-2.png",
    },
    {
      id: "bedrooms",
      title: "Bedrooms",
      icon: FaBed,
      description:
        "Design calm, restful bedrooms that promote relaxation and sleep. We create serene spaces with smart storage, soft lighting, and premium finishes that make your bedroom a true sanctuary.",
      features: [
        "Bedroom layout and furniture planning",
        "Built-in wardrobes and storage",
        "Soft lighting design",
        "Premium bedding and window treatments",
        "Calming colour palettes",
      ],
      image: "/assets/portfolio/kitchen.png",
    },
    {
      id: "hall-stairs",
      title: "Hall & Stairs",
      icon: FaDoorOpen,
      description:
        "Make a lasting first impression with beautifully designed hallways and staircases. We create welcoming entryways and elegant staircases that set the tone for your entire home.",
      features: [
        "Hallway layout and storage",
        "Staircase design and finishes",
        "Lighting for safety and ambience",
        "Feature walls and artwork placement",
        "Flooring and runner selection",
      ],
      image: "/img-1.png",
    },
    {
      id: "bespoke-storage",
      title: "Bespoke Storage",
      icon: FaBox,
      description:
        "Maximise every inch of space with custom storage solutions. We design and install bespoke storage that's tailored to your specific needs, from under-stairs solutions to walk-in wardrobes.",
      features: [
        "Custom storage design",
        "Built-in wardrobes and cupboards",
        "Under-stairs storage solutions",
        "Walk-in wardrobe design",
        "Premium hardware and finishes",
      ],
      image: "/img-2.png",
    },
  ];

  return (
    <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Interior Sections
            </span>
          </div>
          <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
            Every Room, Every Detail
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
            Our interior design service covers every area of your home, ensuring a cohesive, elegant design throughout.
          </p>
        </FadeIn>

        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <FadeIn
                key={section.id}
                direction="up"
                delay={0.1 + index * 0.1}
                duration={0.6}
                id={section.id}
              >
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-2xl border border-[#4A4A4A] bg-white shadow-sm">
                      <div className="relative h-64 sm:h-80">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#214B57]/10 flex items-center justify-center text-[#214B57] text-xl">
                        <Icon />
                      </div>
                      <h3 className="font-semibold text-white font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-white/90 font-dm-sans mb-6" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
                      {section.description}
                    </p>
                    <div className="space-y-2">
                      {section.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/90 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
                          <span className="text-[#F04E22] font-bold mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
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

