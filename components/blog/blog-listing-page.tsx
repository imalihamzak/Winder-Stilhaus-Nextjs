"use client";

import FadeIn from "@/components/FadeIn";
import UnifiedCTA from "@/components/UnifiedCTA";
import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  relatedServices: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Kitchen Renovation Costs in West Yorkshire: A Complete Guide",
    category: "Local Guides",
    desc: "Understanding kitchen renovation costs across Leeds, Harrogate, and West Yorkshire. Get realistic budget expectations, cost breakdowns, and factors that influence pricing in our local area.",
    image: "/assets/portfolio/kitchen.png",
    author: "Winder & Stilhaus Team",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    slug: "kitchen-renovation-costs-west-yorkshire",
    relatedServices: ["kitchen-renovation"],
  },
  {
    id: 2,
    title: "Working in Conservation Areas in Harrogate: What You Need to Know",
    category: "Local Guides",
    desc: "Planning a renovation in Harrogate's conservation areas? Learn about planning permissions, listed building requirements, and how to work with local authorities while preserving historic character.",
    image: "/img-1.png",
    author: "Winder & Stilhaus Team",
    date: "Jan 20, 2025",
    readTime: "6 min read",
    slug: "conservation-areas-harrogate",
    relatedServices: ["full-home-design"],
  },
  {
    id: 3,
    title: "Part P Explained: Electrical Work Regulations for Home Renovations",
    category: "Regulations & Compliance",
    desc: "Understanding Part P building regulations for electrical work in home renovations. Learn when you need certification, what work requires notification, and how to ensure compliance.",
    image: "/img-2.png",
    author: "Winder & Stilhaus Team",
    date: "Jan 25, 2025",
    readTime: "7 min read",
    slug: "part-p-explained",
    relatedServices: ["kitchen-renovation", "bathroom-remodeling", "full-home-design"],
  },
  {
    id: 4,
    title: "Bathroom Renovation Costs in Leeds: Budget Planning Guide",
    category: "Local Guides",
    desc: "Complete guide to bathroom renovation costs in Leeds and surrounding areas. Understand pricing factors, material costs, and how to budget effectively for your bathroom project.",
    image: "/img-1.png",
    author: "Winder & Stilhaus Team",
    date: "Feb 1, 2025",
    readTime: "6 min read",
    slug: "bathroom-renovation-costs-leeds",
    relatedServices: ["bathroom-remodeling"],
  },
  {
    id: 5,
    title: "Planning Permission for Home Extensions in West Yorkshire",
    category: "Regulations & Compliance",
    desc: "Navigating planning permission for home extensions across West Yorkshire. Learn about permitted development rights, when you need planning permission, and how to submit applications.",
    image: "/img-2.png",
    author: "Winder & Stilhaus Team",
    date: "Feb 5, 2025",
    readTime: "8 min read",
    slug: "planning-permission-extensions-west-yorkshire",
    relatedServices: ["full-home-design"],
  },
  {
    id: 6,
    title: "Building Regulations for Kitchen Renovations: A Practical Guide",
    category: "Regulations & Compliance",
    desc: "Essential building regulations for kitchen renovations including ventilation, electrical safety, and structural requirements. Ensure your kitchen renovation meets all legal standards.",
    image: "/assets/portfolio/kitchen.png",
    author: "Winder & Stilhaus Team",
    date: "Feb 10, 2025",
    readTime: "7 min read",
    slug: "building-regulations-kitchen-renovations",
    relatedServices: ["kitchen-renovation"],
  },
  {
    id: 7,
    title: "Interior Design Trends in Leeds: What's Popular in 2025",
    category: "Local Guides",
    desc: "Discover the interior design trends shaping homes across Leeds in 2025. From period property restorations to modern new builds, see what's trending in our local area.",
    image: "/img-1.png",
    author: "Winder & Stilhaus Team",
    date: "Feb 12, 2025",
    readTime: "5 min read",
    slug: "interior-design-trends-leeds-2025",
    relatedServices: ["full-home-design"],
  },
  {
    id: 8,
    title: "Waterproofing Regulations for Bathroom Renovations",
    category: "Regulations & Compliance",
    desc: "Understanding waterproofing requirements and building regulations for bathroom renovations. Learn about tanking systems, tiling standards, and ensuring long-term protection.",
    image: "/img-2.png",
    author: "Winder & Stilhaus Team",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    slug: "waterproofing-regulations-bathroom-renovations",
    relatedServices: ["bathroom-remodeling"],
  },
];

const categories: string[] = [
  "All",
  "Local Guides",
  "Regulations & Compliance",
];

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const featured = blogs[0];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs.slice(1)
      : blogs.slice(1).filter((blog) => blog.category === selectedCategory);

  const containerClass = "max-w-7xl mx-auto px-3 sm:px-4 md:px-6";

  return (
    <section className="bg-[#1D1D1D] pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 text-white">
      <div className={containerClass}>
        {/* Header */}
        <FadeIn direction="up" delay={0.1} duration={0.6} className="mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans mb-3" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
                BLOG
              </div>

              <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.17rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
                Resource Hub
              </h2>

              <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
                Practical local guides, renovation costs, and regulatory information for West Yorkshire. 
                Everything you need to know about planning and executing your home renovation project.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn direction="up" delay={0.15} duration={0.6}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-[#7F8C8D]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition font-dm-sans
                  ${
                    selectedCategory === category
                      ? "bg-[#214B57] text-white border-[#214B57] shadow-sm"
                      : "bg-transparent text-white border-[#4A4A4A] hover:bg-[#4A4A4A]/5"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Featured Article */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <article className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#4A4A4A] bg-white shadow-lg mb-8 sm:mb-12 hover:border-t-[2px] hover:border-t-[#F04E22] transition-all duration-150">
            <div className="relative">
              <div className="relative h-[240px] sm:h-[280px] md:h-[380px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0" />

                <div className="absolute left-3 sm:left-5 right-3 sm:right-5 bottom-3 sm:bottom-5 flex items-end justify-between gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 border border-[#4A4A4A]/20 text-[10px] sm:text-xs font-semibold text-[#1D1D1D] shadow-sm font-dm-sans">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#F04E22]" />
                    {featured.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white/95">
                    {featured.readTime}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between text-xs text-[#7F8C8D] mb-4 font-dm-sans">
                  <span className="font-semibold text-[#1D1D1D]">
                    By {featured.author}
                  </span>
                  <span>{featured.date}</span>
                </div>

                <h3 className="text-[#1D1D1D] font-noto-serif leading-[1.2] mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 3.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                  {featured.title}
                </h3>

                <p className="text-[#7F8C8D] mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                  {featured.desc}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href={`/blog/${featured.slug || featured.id}`}
                    className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-6 py-2 rounded-md text-white font-normal font-dm-sans hover:bg-[#183941] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2"
                    style={{ backgroundColor: '#214B57' }}
                  >
                    Read guide <span className="text-lg">→</span>
                  </a>

                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[#4A4A4A]/5 border border-[#4A4A4A]/20 text-sm font-semibold text-[#1D1D1D] font-dm-sans">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredBlogs.map((blog, index) => (
            <FadeIn
              key={blog.id}
              direction="up"
              delay={0.25 + index * 0.1}
              duration={0.6}
            >
              <article className="group relative overflow-hidden rounded-[24px] border border-[#4A4A4A] bg-white shadow-sm hover:shadow-lg hover:border-t-[2px] hover:border-t-[#F04E22] transition-all duration-150">
                <div className="relative">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-[#4A4A4A]/20 text-xs font-semibold text-[#1D1D1D] shadow-sm font-dm-sans">
                        <span className="h-2 w-2 rounded-full bg-[#F04E22]" />
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between text-xs text-[#7F8C8D] mb-3 font-dm-sans">
                      <span className="font-semibold text-[#1D1D1D]">
                        {blog.author}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-[#1D1D1D] font-noto-serif leading-[1.2] mb-3 line-clamp-2" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                      {blog.title}
                    </h3>

                    <p className="text-[#7F8C8D] line-clamp-3 mb-4 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                      {blog.desc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#4A4A4A]">
                      <span className="text-xs text-[#7F8C8D] font-dm-sans">{blog.date}</span>
                      <a
                        href={`/blog/${blog.slug || blog.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#214B57] hover:opacity-80 transition font-dm-sans"
                      >
                        Read guide <span className="text-lg leading-none">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <UnifiedCTA 
            heading="Get design guidance for your exact space and budget."
            description="Want a personalized plan? Contact us for expert design guidance tailored to your needs."
            buttonText="Contact us"
            delay={0.4}
            className="py-0"
          />
        </div>
      </div>
    </section>
  );
}

export default BlogList;

