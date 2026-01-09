"use client";

import FadeIn from "@/components/FadeIn";
import { AlertCircle } from "lucide-react";

interface Service {
  slug?: string;
  [key: string]: any;
}

interface ServiceRegulationsProps {
  service?: Service;
}

const regulationsData: Record<string, { title: string; content: string }> = {
  "kitchen-renovation": {
    title: "Building Regulations & Compliance",
    content: "All kitchen renovations comply with UK building regulations including Part P (electrical safety), extraction and ventilation requirements, fire safety standards, and gas competence certification where applicable. We ensure all work is properly certified and meets current building standards.",
  },
  "bathroom-remodeling": {
    title: "Building Regulations & Compliance",
    content: "Bathroom renovations comply with UK building regulations including IP zones for electrical installations, Part G (water supply and sanitation), WRAS-approved fittings, and proper waterproofing standards. All work is certified and meets current building regulations.",
  },
  "full-home-design": {
    title: "Building Regulations & Compliance",
    content: "All interior design work complies with relevant UK building regulations and standards including electrical safety (Part P), fire safety, structural requirements, and accessibility standards where applicable. We ensure all work is properly certified and meets current building standards.",
  },
};

export default function ServiceRegulations({ service }: ServiceRegulationsProps) {
  if (!service || !service.slug) return null;
  
  const regulation = regulationsData[service.slug];
  if (!regulation) return null;

  return (
    <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6 border-t border-[#4A4A4A]">
      <div className="max-w-7xl mx-auto">
        <FadeIn duration={0.6}>
          <div className="rounded-[24px] border border-[#4A4A4A] bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#214B57]/10 flex items-center justify-center">
                <AlertCircle className="text-[#214B57]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#1D1D1D] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                  {regulation.title}
                </h3>
                <p className="text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                  {regulation.content}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

