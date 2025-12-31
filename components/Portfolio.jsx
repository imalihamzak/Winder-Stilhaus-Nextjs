"use client";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { MapPin } from "lucide-react";

const filters = ["All", "Living Rooms", "Bedrooms", "Kitchens", "Offices", "Villas"];

const projects = [
  {
    id: 1,
    title: "Modern Luxury Living",
    location: "DHA Lahore",
    type: "Living Rooms",
    image: "/assets/portfolio/kitchen.png",
  },
  {
    id: 2,
    title: "Minimal Bedroom Suite",
    location: "Gulberg",
    type: "Bedrooms",
    image: "/assets/portfolio/bedroom.png",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    location: "Bahria Town",
    type: "Kitchens",
    image: "/img-1.png",
  },
  {
    id: 4,
    title: "Executive Office",
    location: "Blue Area",
    type: "Offices",
    image: "/assets/portfolio/bedroom.png",
  },
  {
    id: 5,
    title: "Luxury Villa Interior",
    location: "DHA Phase 6",
    type: "Villas",
    image: "/img-1.png",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="bg-white pt-0 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
      {/* Heading */}
        <FadeIn direction="up" delay={0.1} duration={0.6}>
      <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Portfolio
            </div>
            <h2 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
          Our Portfolio
        </h2>
            <p className="text-[#85929D] max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
          Explore our curated collection of luxury interior projects crafted with precision and elegance.
        </p>
      </div>
        </FadeIn>

      {/* Filter Bar */}
        <FadeIn direction="up" delay={0.15} duration={0.6}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition
              ${
                activeFilter === filter
                      ? "bg-[#214B57] text-white border-[#214B57]"
                      : "border-[#e5e7eb] text-[#85929D] hover:bg-[#f9fafb] hover:border-[#214B57]/30"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
        </FadeIn>

      {/* Project Grid */}
          <div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={0.1 + index * 0.1} duration={0.6}>
              <div className="bg-white border border-[#e5e7eb] rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                <div className="relative overflow-hidden h-48 sm:h-56">
            <img
              src={project.image}
              alt={project.title}
                    className="w-full h-full object-cover"
            />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
            <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                {project.title}
              </h3>
                  <p className="text-[#85929D] text-xs sm:text-sm mb-1 font-dm-sans">
                <MapPin size={14} className="inline" /> {project.location}
              </p>
                  <p className="text-[#85929D] text-xs sm:text-sm mb-4 sm:mb-5 font-dm-sans">
                Property Type: {project.type}
              </p>
              <a
                    href={`/project`}
                    className="inline-flex items-center gap-2 text-[#214B57] font-medium hover:gap-3 transition-all font-dm-sans"
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
