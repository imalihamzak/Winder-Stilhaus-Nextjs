"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

interface Area {
  id: string;
  name: string;
  description: string;
  images: string[];
}

const areas: Area[] = [
  {
    id: "leeds",
    name: "Leeds",
    description: "As West Yorkshire's largest city, Leeds offers a diverse mix of Victorian terraces, modern apartments, and period properties. We've completed numerous kitchen and bathroom renovations across Leeds, from the historic Headingley area to the contemporary developments in the city centre. Our local knowledge of Leeds' building regulations, conservation areas, and planning requirements ensures smooth project delivery. Whether you're renovating a Victorian semi in Roundhay or a modern apartment in the city centre, we bring luxury design and expert craftsmanship to every project.",
    images: ["/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png"],
  },
  {
    id: "harrogate",
    name: "Harrogate",
    description: "Harrogate's elegant Victorian and Edwardian architecture provides the perfect canvas for luxury interior design. We specialise in working within Harrogate's conservation areas, respecting the character of period properties while introducing modern functionality. Our team understands the planning requirements and listed building regulations that apply to many properties in Harrogate. From grand Victorian villas to charming terraced homes, we create interiors that honour the property's heritage while meeting contemporary lifestyle needs. Our local expertise ensures compliance with Harrogate Borough Council's planning guidelines.",
    images: ["/img-1.png", "/assets/portfolio/kitchen.png", "/img-2.png"],
  },
  {
    id: "ilkley",
    name: "Ilkley",
    description: "Nestled in the heart of the Yorkshire Dales, Ilkley is known for its stunning period properties and affluent residential areas. We've delivered numerous high-end kitchen and bathroom renovations in Ilkley, working with properties that require careful attention to detail and premium finishes. The area's mix of Victorian mansions, stone-built cottages, and contemporary homes demands a design approach that respects local character. Our experience with Ilkley's planning requirements and conservation considerations ensures your project proceeds smoothly while achieving the luxury finish you expect.",
    images: ["/img-2.png", "/img-1.png", "/assets/portfolio/kitchen.png"],
  },
  {
    id: "york-corridor",
    name: "York Corridor",
    description: "The York corridor, including Wetherby, Tadcaster, and surrounding villages, offers a mix of rural charm and accessibility. We've completed projects throughout this area, from period farmhouses to modern new builds. The corridor's proximity to both Leeds and York makes it a popular location for families seeking space and character. Our team understands the unique requirements of rural properties, including planning considerations for extensions and renovations. Whether you're renovating a listed building in Wetherby or a contemporary home in the surrounding villages, we bring expertise in both traditional and modern design approaches.",
    images: ["/assets/portfolio/kitchen.png", "/img-2.png", "/img-1.png"],
  },
  {
    id: "bradford",
    name: "Bradford",
    description: "Bradford's rich industrial heritage is reflected in its diverse property types, from Victorian mill conversions to suburban family homes. We've worked across Bradford's various districts, delivering kitchen and bathroom renovations that respect the area's character while introducing modern luxury. Our experience includes working with period properties in areas like Saltaire and Ilkley, as well as contemporary homes in newer developments. We understand Bradford's building regulations and planning requirements, ensuring your project meets all necessary standards while achieving your design vision.",
    images: ["/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png"],
  },
  {
    id: "huddersfield",
    name: "Huddersfield",
    description: "Huddersfield's mix of Victorian and Edwardian architecture provides excellent opportunities for luxury interior design. We've completed numerous projects across Huddersfield, from period townhouses to modern apartments. The area's diverse property types require a flexible design approach, and our team has experience working with everything from listed buildings to contemporary new builds. Our local knowledge of Kirklees Council's planning requirements and building regulations ensures efficient project delivery. Whether you're renovating a Victorian terrace or a modern family home, we bring luxury design and expert craftsmanship to every project.",
    images: ["/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png"],
  },
  {
    id: "wakefield",
    name: "Wakefield",
    description: "Wakefield's growing residential areas offer opportunities for luxury interior design and renovation. We've worked across Wakefield's various districts, delivering kitchen and bathroom renovations that combine modern functionality with elegant design. The area's mix of period properties and contemporary homes requires a versatile approach, and our team has experience with both. Our understanding of Wakefield's planning requirements and building regulations ensures smooth project delivery. From Victorian terraces to modern developments, we create interiors that enhance your lifestyle while respecting the property's character.",
    images: ["/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png"],
  },
];

export default function AreasWeCoverClient() {
  return (
    <section className="bg-[#1D1D1D] pt-0 pb-16 sm:pb-20 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <FadeIn direction="up" delay={0.1} duration={0.6} className="mb-10 md:mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Service Areas
            </div>
            <h1 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
              Areas We Cover
            </h1>
            <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              We provide premium interior design and renovation services across West Yorkshire. Our local expertise ensures your project meets all planning requirements and building regulations while achieving your design vision.
            </p>
          </div>
        </FadeIn>

        {/* Areas Grid */}
        <div className="space-y-16 md:space-y-20">
          {areas.map((area, index) => (
            <FadeIn
              key={area.id}
              direction="up"
              delay={0.2 + index * 0.1}
              duration={0.6}
              id={area.id}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {area.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden rounded-2xl border border-[#4A4A4A] bg-white shadow-sm ${
                          imgIndex === 0 ? "col-span-2 h-64" : "h-48"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${area.name} interior design project ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="font-semibold text-white mb-4 font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {area.name}
                  </h2>
                  <p className="text-white/90 mb-6 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {area.description}
                  </p>
                  <Link
                    href={`/location/${area.id === "york-corridor" ? "wetherby" : area.id}`}
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
                    View {area.name} projects →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.8} duration={0.6}>
          <div className="mt-16 rounded-[30px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.2)] p-8 sm:p-10 md:p-12 text-center" style={{ background: 'linear-gradient(180deg, #214B57 0%, #183941 100%)' }}>
            <div className="relative">
              <h2 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Book a free consultation and let's discuss how we can bring your vision to life in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Book a consultation →
                </a>
                <a
                  href="tel:+923001234567"
                  className="
                    inline-flex items-center justify-center gap-2
                    min-w-[122px] min-h-[31px] px-5 py-2 rounded-md
                    text-sm font-normal font-dm-sans
                    border border-white/30 bg-transparent text-white
                    hover:bg-white/10 transition-all duration-150
                    focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#214B57]
                  "
                >
                  Call us
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

