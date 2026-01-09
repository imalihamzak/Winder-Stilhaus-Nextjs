"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { X, Palette, Layers, Sparkles } from "lucide-react";

interface DesignConcept {
  id: string;
  name: string;
  intent: string;
  palette: string[];
  materials: string[];
  signatureDetail: string;
  images: string[];
}

interface Service {
  slug?: string;
  [key: string]: any;
}

interface DesignConceptsProps {
  service?: Service;
}

// Sample design concepts data - in production, this would come from a CMS
const designConceptsData: Record<string, DesignConcept[]> = {
  "kitchen-renovation": [
    {
      id: "coastal-modern",
      name: "Coastal Modern",
      intent: "A light, airy kitchen that brings the seaside indoors with natural textures and soft blues.",
      palette: ["#E8F4F8", "#B8D4E3", "#214B57", "#F5F5DC", "#FFFFFF"],
      materials: ["Quartz worktops", "Shaker-style cabinetry", "Brass hardware", "Natural stone tiles", "Oak flooring"],
      signatureDetail: "Hand-painted ceramic tiles in a coastal blue pattern behind the range cooker, creating a focal point that ties the palette together.",
      images: ["/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png"],
    },
    {
      id: "industrial-luxury",
      name: "Industrial Luxury",
      intent: "Bold, sophisticated design combining raw materials with premium finishes for a contemporary statement.",
      palette: ["#1D1D1D", "#4A4A4A", "#214B57", "#F04E22", "#CED3D7"],
      materials: ["Concrete-effect worktops", "Metal-framed cabinetry", "Copper accents", "Exposed brick feature wall", "Polished concrete flooring"],
      signatureDetail: "A custom copper range hood suspended from the ceiling, creating a dramatic focal point while maintaining the industrial aesthetic.",
      images: ["/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png"],
    },
    {
      id: "traditional-elegance",
      name: "Traditional Elegance",
      intent: "Timeless design that honours classic British kitchen aesthetics with modern functionality.",
      palette: ["#F5F5DC", "#8B7355", "#214B57", "#D4AF37", "#FFFFFF"],
      materials: ["Marble worktops", "In-frame cabinetry", "Antique brass hardware", "Herringbone flooring", "Wainscoting"],
      signatureDetail: "A traditional butler's sink with period-style taps, set into a marble worktop with decorative corbels, evoking classic country house style.",
      images: ["/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png"],
    },
  ],
  "bathroom-remodeling": [
    {
      id: "spa-retreat",
      name: "Spa Retreat",
      intent: "A serene, calming bathroom that transforms daily routines into moments of relaxation and rejuvenation.",
      palette: ["#E8F4F8", "#B8D4E3", "#214B57", "#F5F5DC", "#FFFFFF"],
      materials: ["Natural stone tiles", "Freestanding bathtub", "Brass fixtures", "Oak vanity", "Soft lighting"],
      signatureDetail: "A freestanding stone bathtub positioned to capture natural light, surrounded by large-format tiles in calming tones, creating a spa-like atmosphere.",
      images: ["/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png"],
    },
    {
      id: "urban-luxury",
      name: "Urban Luxury",
      intent: "Bold, contemporary design that makes a statement with premium materials and sleek finishes.",
      palette: ["#1D1D1D", "#4A4A4A", "#214B57", "#F04E22", "#CED3D7"],
      materials: ["Porcelain tiles", "Wall-hung vanity", "Chrome fixtures", "Mirrored surfaces", "Underfloor heating"],
      signatureDetail: "A floor-to-ceiling feature wall in dark tiles with integrated LED lighting, creating depth and drama while maintaining a minimalist aesthetic.",
      images: ["/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png"],
    },
    {
      id: "period-charm",
      name: "Period Charm",
      intent: "Elegant design that respects the property's heritage while introducing modern luxury and functionality.",
      palette: ["#F5F5DC", "#8B7355", "#214B57", "#D4AF37", "#FFFFFF"],
      materials: ["Victorian-style tiles", "Clawfoot bathtub", "Antique brass fittings", "Marble surfaces", "Traditional panelling"],
      signatureDetail: "A restored Victorian roll-top bath with period-style taps, set against a feature wall of original-style geometric tiles, preserving the property's character.",
      images: ["/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png"],
    },
  ],
  "full-home-design": [
    {
      id: "coastal-contemporary",
      name: "Coastal Contemporary",
      intent: "A light, relaxed interior that brings the outdoors in, perfect for creating a calm, welcoming home environment.",
      palette: ["#E8F4F8", "#B8D4E3", "#214B57", "#F5F5DC", "#FFFFFF"],
      materials: ["Natural wood", "Linen textiles", "Rattan accents", "Stone surfaces", "Soft lighting"],
      signatureDetail: "A feature wall in the living room using reclaimed wood panelling, complemented by soft blue-grey tones and natural textures throughout.",
      images: ["/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png"],
    },
    {
      id: "modern-minimalist",
      name: "Modern Minimalist",
      intent: "Clean, uncluttered spaces that prioritise function and form, creating a sense of calm and order.",
      palette: ["#FFFFFF", "#1D1D1D", "#4A4A4A", "#214B57", "#CED3D7"],
      materials: ["Sleek cabinetry", "Polished surfaces", "Minimal hardware", "Neutral textiles", "Integrated storage"],
      signatureDetail: "A wall of floor-to-ceiling built-in storage with hidden handles, creating a seamless, uncluttered appearance while maximising functionality.",
      images: ["/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png"],
    },
    {
      id: "heritage-luxury",
      name: "Heritage Luxury",
      intent: "Elegant interiors that honour period architecture while introducing contemporary comfort and luxury.",
      palette: ["#F5F5DC", "#8B7355", "#214B57", "#D4AF37", "#FFFFFF"],
      materials: ["Period mouldings", "Traditional panelling", "Antique finishes", "Marble accents", "Rich textiles"],
      signatureDetail: "Restored original cornicing and period fireplaces enhanced with contemporary lighting and modern heating solutions, seamlessly blending old and new.",
      images: ["/assets/portfolio/kitchen.png", "/img-1.png", "/img-2.png", "/assets/portfolio/kitchen.png", "/img-1.png"],
    },
  ],
};

export default function DesignConcepts({ service }: DesignConceptsProps) {
  const [selectedConcept, setSelectedConcept] = useState<DesignConcept | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service || !service.slug) return null;

  const concepts = designConceptsData[service.slug] || [];
  if (concepts.length === 0) return null;

  const openLightbox = (concept: DesignConcept) => {
    setSelectedConcept(concept);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedConcept(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedConcept) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedConcept.images.length);
    }
  };

  const prevImage = () => {
    if (selectedConcept) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedConcept.images.length) % selectedConcept.images.length);
    }
  };

  const handleUsePalette = () => {
    // Track the action
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "design_concept_selected", {
        event_category: "Design",
        event_label: selectedConcept?.name || "Unknown",
        service: service.slug,
      });
    }
    // Scroll to pricing guide or contact form
    const pricingGuide = document.getElementById("pricing-guide-heading");
    if (pricingGuide) {
      pricingGuide.scrollIntoView({ behavior: "smooth", block: "start" });
      pricingGuide.focus();
    } else {
      window.location.href = "/contact-us";
    }
    closeLightbox();
  };

  return (
    <>
      <section className="bg-[#1D1D1D] py-6 md:py-8 px-3 sm:px-4 md:px-6 border-t border-[#CED3D7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-6 md:mb-8" duration={0.6}>
            <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-[11px] uppercase tracking-[0.32em] text-[#1D1D1D] font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
                Design Concepts
              </span>
            </div>
            <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#FFFFFF' }}>
              Explore Our Design Concepts
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              Browse our curated design concepts. Each one includes a complete palette, materials selection, and signature details. Click to explore and use your favourite in your estimate.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {concepts.map((concept, index) => (
              <FadeIn
                key={concept.id}
                direction="up"
                delay={0.1 + index * 0.1}
                duration={0.6}
              >
                <button
                  onClick={() => openLightbox(concept)}
                  className="group relative overflow-hidden rounded-[24px] border border-[#4A4A4A] bg-white shadow-sm hover:shadow-lg hover:border-[#214B57]/30 transition-all duration-300 text-left w-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={concept.images[0]}
                      alt={concept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold font-noto-serif mb-1" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                        {concept.name}
                      </h3>
                      <p className="text-white/90 text-sm font-dm-sans line-clamp-2" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.4', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                        {concept.intent}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Palette className="text-[#214B57] w-4 h-4" />
                      <span className="text-xs text-[#214B57] font-dm-sans">View full concept →</span>
                    </div>
                    <div className="flex gap-2">
                      {concept.palette.slice(0, 5).map((color, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border border-[#4A4A4A]"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedConcept && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedConcept.name} design concept`}
        >
          <div
            className="relative bg-white rounded-[28px] max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-[#4A4A4A] flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="text-[#214B57]" size={20} />
            </button>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Images Section */}
              <div className="relative bg-[#1D1D1D]">
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <img
                    src={selectedConcept.images[currentImageIndex]}
                    alt={`${selectedConcept.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Navigation Arrows */}
                  {selectedConcept.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-[#4A4A4A] flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5 text-[#214B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-[#4A4A4A] flex items-center justify-center hover:bg-white transition-colors"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5 text-[#214B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {selectedConcept.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-[#4A4A4A] text-sm text-[#214B57] font-dm-sans">
                      {currentImageIndex + 1} / {selectedConcept.images.length}
                    </div>
                  )}

                  {/* Thumbnail Strip */}
                  {selectedConcept.images.length > 1 && (
                    <div className="absolute bottom-16 left-0 right-0 px-4">
                      <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                        {selectedConcept.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              idx === currentImageIndex ? "border-[#F04E22]" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-[#1D1D1D] font-noto-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                  {selectedConcept.name}
                </h3>

                {/* Intent */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-[#F04E22] w-5 h-5" />
                    <h4 className="font-semibold text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                      Design Intent
                    </h4>
                  </div>
                  <p className="text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.6', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                    {selectedConcept.intent}
                  </p>
                </div>

                {/* Palette */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="text-[#F04E22] w-5 h-5" />
                    <h4 className="font-semibold text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                      Colour Palette
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedConcept.palette.map((color, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className="w-12 h-12 rounded-lg border border-[#4A4A4A] shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                        <span className="text-sm text-[#7F8C8D] font-dm-sans font-mono">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="text-[#F04E22] w-5 h-5" />
                    <h4 className="font-semibold text-[#1D1D1D] font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                      Materials Set
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedConcept.materials.map((material, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                        <span className="text-[#F04E22] mt-1 flex-shrink-0">•</span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Signature Detail */}
                <div className="mb-8 p-5 rounded-xl bg-[#214B57]/5 border border-[#214B57]/20">
                  <h4 className="font-semibold text-[#1D1D1D] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif', color: '#1D1D1D' }}>
                    Signature Detail
                  </h4>
                  <p className="text-[#7F8C8D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.6', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: '#7F8C8D' }}>
                    {selectedConcept.signatureDetail}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleUsePalette}
                  className="w-full inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-3 rounded-md bg-white border-2 border-[#214B57] text-[#214B57] font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2"
                >
                  Use this palette in my estimate <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

