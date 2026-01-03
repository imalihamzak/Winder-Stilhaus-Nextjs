"use client";

import FadeIn from "@/components/FadeIn";
import { Shield, Factory, Wrench, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface WarrantySection {
  title: string;
  icon: React.ElementType;
  description: string;
  items: string[];
  duration?: string;
}

interface MaintenanceSection {
  category: string;
  description: string;
  expectations: string[];
}

export default function GuaranteesAftercareContent() {
  const warrantySections: WarrantySection[] = [
    {
      title: "Workmanship Warranty",
      icon: Shield,
      description: "All installation and workmanship is guaranteed against defects for a minimum period.",
      duration: "2 years from project completion",
      items: [
        "Installation quality and craftsmanship",
        "Structural integrity of fitted elements",
        "Proper functioning of all installed components",
        "Compliance with building regulations and standards",
        "Remediation of any workmanship defects at no additional cost",
      ],
    },
    {
      title: "Manufacturer Warranties",
      icon: Factory,
      description: "All products and materials come with their original manufacturer warranties, which we honour and facilitate.",
      items: [
        "Cabinetry and joinery: Manufacturer's standard warranty (typically 2-5 years)",
        "Appliances: Full manufacturer warranty (varies by brand, typically 1-2 years)",
        "Plumbing fixtures: Manufacturer warranty (typically 1-2 years)",
        "Electrical components: Manufacturer warranty (typically 1-2 years)",
        "Surfaces and worktops: Manufacturer warranty (varies by material, typically 1-10 years)",
        "We provide warranty documentation and facilitate claims on your behalf",
      ],
    },
    {
      title: "Extended Warranties",
      icon: FileText,
      description: "Extended warranty options are available for critical systems and premium finishes.",
      items: [
        "Waterproofing systems: Extended warranty available (up to 10 years)",
        "Structural modifications: Engineer-certified work with extended coverage",
        "Premium finishes: Extended protection plans available",
        "Smart home systems: Extended warranty options for integrated technology",
      ],
    },
  ];

  const maintenanceExpectations: MaintenanceSection[] = [
    {
      category: "Cabinetry & Joinery",
      description: "Proper care ensures your cabinetry maintains its appearance and functionality for years to come.",
      expectations: [
        "Regular cleaning with manufacturer-recommended products",
        "Avoid excessive moisture and direct heat exposure",
        "Inspect hinges and drawer mechanisms annually",
        "Report any issues promptly during warranty period",
        "Follow care instructions provided at handover",
      ],
    },
    {
      category: "Surfaces & Worktops",
      description: "Different materials require specific care routines to maintain their finish and durability.",
      expectations: [
        "Use appropriate cleaning products for your surface material",
        "Use cutting boards and trivets to protect surfaces",
        "Reseal natural stone surfaces as recommended (typically annually)",
        "Avoid harsh chemicals and abrasive cleaners",
        "Address spills promptly to prevent staining",
      ],
    },
    {
      category: "Plumbing & Fixtures",
      description: "Regular maintenance prevents issues and extends the life of your plumbing systems.",
      expectations: [
        "Regular cleaning of fixtures with appropriate products",
        "Check for leaks and drips periodically",
        "Maintain proper water pressure",
        "Follow manufacturer guidelines for fixture care",
        "Report any issues immediately for warranty coverage",
      ],
    },
    {
      category: "Electrical Systems",
      description: "Electrical systems require professional maintenance and periodic inspections.",
      expectations: [
        "Do not overload circuits or use inappropriate appliances",
        "Schedule periodic electrical safety inspections (recommended every 5 years)",
        "Report any electrical issues immediately",
        "Keep electrical panels accessible and clear",
        "Follow all manufacturer guidelines for integrated systems",
      ],
    },
    {
      category: "Ventilation & Extraction",
      description: "Proper ventilation is essential for maintaining air quality and preventing moisture issues.",
      expectations: [
        "Clean or replace filters regularly (as per manufacturer guidelines)",
        "Run extraction systems during and after cooking/bathing",
        "Inspect ductwork periodically for blockages",
        "Service extraction units annually",
        "Report reduced performance promptly",
      ],
    },
  ];

  const warrantyPrinciples = [
    {
      title: "Transparency",
      description: "All warranty terms and coverage are clearly documented and provided at project handover.",
    },
    {
      title: "Responsiveness",
      description: "Warranty claims are prioritized and addressed promptly, typically within 48 hours of reporting.",
    },
    {
      title: "Quality Assurance",
      description: "We use only trusted suppliers and manufacturers with proven warranty track records.",
    },
    {
      title: "Client Support",
      description: "Our team facilitates warranty claims and liaises with manufacturers on your behalf.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-[#1D1D1D] pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F06434' }}></span>
              Guarantees & Aftercare
            </div>
            <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Guarantees & Aftercare
            </h1>
            <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Comprehensive warranty coverage, workmanship guarantees, and clear maintenance expectations for your peace of mind.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Warranty Principles */}
          <FadeIn className="mb-12" duration={0.6} delay={0.2}>
            <h2 className="font-semibold text-[#214B57] mb-8 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Our Warranty Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warrantyPrinciples.map((principle, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_12px_30px_rgba(26,29,41,0.03)] p-6"
                >
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[#85929D] leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Warranty Coverage */}
          <FadeIn className="mb-12" duration={0.6} delay={0.3}>
            <h2 className="font-semibold text-[#214B57] mb-8 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Warranty Coverage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {warrantySections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <FadeIn key={i} direction="up" delay={0.3 + i * 0.1} duration={0.6}>
                    <div className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] p-6 sm:p-8">
                      <div className="w-12 h-12 rounded-xl bg-[#214B57]/10 flex items-center justify-center text-[#214B57] text-xl mb-4">
                        <Icon />
                      </div>
                      <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                        {section.title}
                      </h3>
                      {section.duration && (
                        <p className="text-sm text-[#F06434] mb-3 font-semibold font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          <Clock size={14} className="inline mr-1" />
                          {section.duration}
                        </p>
                      )}
                      <p className="text-[#85929D] mb-4 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                            <CheckCircle className="text-[#F06434] mt-0.5 flex-shrink-0" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          {/* Maintenance Expectations */}
          <FadeIn className="mb-12" duration={0.6} delay={0.5}>
            <h2 className="font-semibold text-[#214B57] mb-8 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Maintenance Expectations
            </h2>
            <div className="space-y-6">
              {maintenanceExpectations.map((category, i) => (
                <FadeIn key={i} direction="up" delay={0.5 + i * 0.1} duration={0.6}>
                  <div className="rounded-[24px] border border-black/10 bg-white/60 backdrop-blur shadow-[0_18px_45px_rgba(26,29,41,0.04)] p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#214B57]/10 flex items-center justify-center text-[#214B57] flex-shrink-0">
                        <Wrench size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                          {category.category}
                        </h3>
                        <p className="text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-14">
                      {category.expectations.map((expectation, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                          <AlertCircle className="text-[#214B57] mt-0.5 flex-shrink-0" size={16} />
                          <span>{expectation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Important Notes */}
          <FadeIn className="mb-12" duration={0.6} delay={0.7}>
            <div className="rounded-[24px] border-2 border-[#F06434]/20 bg-[#F06434]/5 p-6 sm:p-8">
              <h3 className="font-semibold text-[#214B57] mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Important Notes
              </h3>
              <ul className="space-y-3 text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F06434] mt-0.5 flex-shrink-0" size={20} />
                  <span>Warranty coverage applies only to defects in materials and workmanship, not to normal wear and tear or damage caused by misuse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F06434] mt-0.5 flex-shrink-0" size={20} />
                  <span>Regular maintenance as outlined is essential to maintain warranty coverage. Failure to follow maintenance guidelines may void warranty protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F06434] mt-0.5 flex-shrink-0" size={20} />
                  <span>All warranty claims must be reported promptly. Delayed reporting may affect warranty coverage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F06434] mt-0.5 flex-shrink-0" size={20} />
                  <span>Full warranty documentation is provided at project handover, including manufacturer warranties and our workmanship guarantee.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn duration={0.6} delay={0.8}>
            <div className="rounded-[30px] border border-black/10 text-white shadow-lg p-8 sm:p-10 text-center" style={{ backgroundColor: '#214B57' }}>
              <h3 className="font-semibold mb-4 font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Questions About Guarantees or Maintenance?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Contact us for detailed warranty information, maintenance guidance, or to report a warranty claim.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border border-[#214B57] text-[#214B57] font-normal font-dm-sans shadow-lg hover:bg-[#214B57] hover:text-white hover:border-[#F06434] hover:border-2 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F06434] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F06434] active:border-2"
                >
                  Contact Us <span className="text-lg">→</span>
                </a>
                <a
                  href="/aftercare"
                  className="inline-flex items-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md border-2 border-white text-white font-normal font-dm-sans hover:bg-white hover:text-[#214B57] transition-all duration-150"
                >
                  View Aftercare Support
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

