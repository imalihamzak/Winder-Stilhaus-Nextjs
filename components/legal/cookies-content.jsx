"use client";

import FadeIn from "@/components/FadeIn";

export default function CookiesContent() {
  return (
    <>
      {/* Hero Section - Matching service pages spacing */}
      <section className="relative bg-white text-[#1D1D1D] pt-0 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9fafb] border border-[#e5e7eb] text-sm font-medium text-[#1D1D1D] mb-3 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              Legal
            </div>
            <h1 className="text-[#214B57] font-noto-serif mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Cookie Policy
            </h1>
            <p className="text-[#85929D] max-w-2xl mx-auto mb-8 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              Learn about how we use cookies and how to manage your cookie preferences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[#85929D] mb-8 font-dm-sans">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-6 text-[#85929D] font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>Strictly Necessary Cookies</h3>
                  <p>These cookies are essential for the website to function and cannot be switched off.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors use our website by collecting and reporting information anonymously.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#214B57] mb-2 font-noto-serif" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>Marketing Cookies</h3>
                  <p>These cookies are used to deliver relevant advertisements and track campaign effectiveness.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>4. Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, and to delete cookies. You can also use our cookie consent banner to manage your preferences.
              </p>
              <p className="mt-2">
                Please note that blocking some types of cookies may impact your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>5. Third-Party Cookies</h2>
              <p>
                We use third-party services that may set cookies on your device, including Google Analytics and Google Tag Manager. These services have their own privacy policies and cookie practices.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-[#214B57] mb-3 font-noto-serif" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>6. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:
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

