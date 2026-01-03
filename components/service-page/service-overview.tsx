"use client";

import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

interface BlogPost {
  title: string;
  slug: string;
}

interface Service {
  slug?: string;
  overview?: string[];
  benefits?: string[];
  audience?: string[];
  [key: string]: any;
}

interface ServiceOverviewProps {
  service?: Service;
}

// Blog posts related to each service
const serviceBlogPosts: Record<string, BlogPost[]> = {
  "kitchen-renovation": [
    { title: "Kitchen Renovation Costs in West Yorkshire", slug: "kitchen-renovation-costs-west-yorkshire" },
    { title: "Building Regulations for Kitchen Renovations", slug: "building-regulations-kitchen-renovations" },
    { title: "Part P Explained", slug: "part-p-explained" },
  ],
  "bathroom-remodeling": [
    { title: "Bathroom Renovation Costs in Leeds", slug: "bathroom-renovation-costs-leeds" },
    { title: "Waterproofing Regulations for Bathroom Renovations", slug: "waterproofing-regulations-bathroom-renovations" },
    { title: "Part P Explained", slug: "part-p-explained" },
  ],
  "full-home-design": [
    { title: "Working in Conservation Areas in Harrogate", slug: "conservation-areas-harrogate" },
    { title: "Planning Permission for Home Extensions", slug: "planning-permission-extensions-west-yorkshire" },
    { title: "Interior Design Trends in Leeds", slug: "interior-design-trends-leeds-2025" },
    { title: "Part P Explained", slug: "part-p-explained" },
  ],
};

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  if (!service) return null;
  const relatedPosts = serviceBlogPosts[service.slug || ""] || [];
  return (
    <section className="bg-white pt-3 sm:pt-4 md:pt-5 pb-6 md:py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-6 md:mb-8" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/10 backdrop-blur text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F06434' }} />
              Overview
            </span>
          </div>
          <h2 className="text-[#214B57] font-noto-serif text-center" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Service Overview
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn direction="right" className="space-y-4">
          {service.overview?.map((text, i) => (
              <p key={i} className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              {text}
            </p>
          ))}
          </FadeIn>

          <FadeIn direction="left">
            <div className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] p-6 sm:p-8">
              <h3 className="font-semibold text-[#214B57] mb-5 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Key Benefits
          </h3>
              <ul className="space-y-3 mb-8">
            {service.benefits?.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[#1D1D1D] font-dm-sans"
                    style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <CheckCircle className="text-[#F06434] mt-1 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
            ))}
          </ul>

              <h4 className="font-semibold text-[#214B57] mt-6 mb-3 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            Ideal For
          </h4>
              <ul className="text-[#85929D] space-y-2 mb-6 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            {service.audience?.map((item, i) => (
                  <li
                    key={i}
                  >
                    • {item}
                  </li>
            ))}
          </ul>

              {relatedPosts.length > 0 && (
                <div className="pt-6 border-t border-black/10">
                  <h4 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    Related Resources
                  </h4>
                  <ul className="space-y-2">
                    {relatedPosts.map((post, i) => (
                      <li key={i}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm text-[#85929D] hover:text-[#214B57] hover:underline transition font-dm-sans"
                          style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          → {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

