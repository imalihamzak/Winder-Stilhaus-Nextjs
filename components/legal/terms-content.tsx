"use client";

import FadeIn from "@/components/FadeIn";

export default function TermsContent() {
  return (
    <>
      {/* Hero Section - Matching service pages spacing */}
      <section className="relative text-[#1D1D1D] pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Legal
            </div>
            <h1 className="text-white font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Terms & Conditions
            </h1>
            <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Terms and conditions for Winder&Stilhaus interior design and renovation services.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[#85929D] mb-8 font-dm-sans">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-6 text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>1. Agreement to Terms</h2>
              <p>
                By accessing and using the services of Winder&Stilhaus, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>2. Services</h2>
              <p>
                Winder&Stilhaus provides interior design and renovation services. All services are subject to availability and acceptance of project proposals. We reserve the right to refuse service at our discretion.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>3. Quotations and Pricing</h2>
              <p>
                All quotations are valid for 30 days unless otherwise stated. Prices are subject to change and final pricing will be confirmed in written project proposals. Estimates provided through our pricing guide are indicative only.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>4. Payment Terms</h2>
              <p>Payment terms will be specified in individual project contracts. Typically:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Deposit required to commence work</li>
                <li>Stage payments as work progresses</li>
                <li>Final payment upon completion and handover</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>5. Project Timeline</h2>
              <p>
                Project timelines are estimates and may be subject to change due to factors beyond our control, including material availability, planning permissions, and site conditions. We will keep you informed of any delays.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>6. Warranties</h2>
              <p>
                We provide warranties on workmanship and materials as specified in individual project contracts. Warranty periods vary by component and will be detailed in your project documentation.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>7. Limitation of Liability</h2>
              <p>
                Our liability is limited to the value of the contract. We are not liable for indirect or consequential damages. All work is covered by appropriate insurance.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>8. Intellectual Property</h2>
              <p>
                All designs, drawings, and documentation remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the designs for the specified project.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>9. Cancellation</h2>
              <p>
                Cancellation terms will be specified in individual contracts. Generally, deposits are non-refundable once work has commenced. Cancellation fees may apply.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-white mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>10. Contact Us</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="mt-2">
                Email: hello@luxuryinteriors.com<br />
                Phone: +123 456 7890
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

