"use client";

import { lazy, Suspense } from "react";
import HeroSection from "@/components/Hero";
import FooterSection from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/Faq";
import BlogLayout from "@/components/blog/blog-layout";
import ServicesAbout from "@/components/Services";
import FadeIn from "@/components/FadeIn";
import StickyCTA from "@/components/StickyCTA";
import ClickToCall from "@/components/ClickToCall";
import MobileStickyBar from "@/components/MobileStickyBar";
import Script from "next/script";

// Code-split the pricing guide estimator - only loads when needed
const InstantPricingGuide = lazy(() => import("@/components/ai-pricing-guide/pricing-layout"));

// LocalBusiness/Organization Schema for Homepage
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://winderstilhaus.com/#organization",
  "name": "Winder & Stilhaus",
  "alternateName": "Winder Stilhaus",
  "description": "Premium interior design and renovation services across West Yorkshire. Luxury kitchens, bathrooms, and full-home design with expert craftsmanship.",
  "url": "https://winderstilhaus.com",
  "telephone": "+1234567890",
  "areaServed": {
    "@type": "City",
    "name": "West Yorkshire"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "postalCode": "LS16"
    },
    "geoRadius": {
      "@type": "Distance",
      "value": "22.5",
      "unitCode": "MTR"
    }
  },
  "priceRange": "$$$",
  "image": "https://winderstilhaus.com/assets/portfolio/kitchen.png",
  "sameAs": [
    "https://www.facebook.com/winderstilhaus",
    "https://www.instagram.com/winderstilhaus",
    "https://www.linkedin.com/company/winderstilhaus"
  ]
};

const Page = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main id="main-content" className="relative min-h-screen bg-[#1D1D1D] text-white overflow-hidden" suppressHydrationWarning>
        <div className="relative z-10">
          <HeroSection />

          {/* Services section - background always visible, only content animates */}
          <div className="bg-white">
            <FadeIn direction="up" delay={0} duration={0.6}>
              <ServicesAbout />
            </FadeIn>
          </div>

          {/* Pricing guide - background always visible, only content animates */}
          <div className="bg-white">
            <FadeIn direction="up" delay={0} duration={0.6}>
              <Suspense fallback={
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#214B57] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#7F8C8D] font-dm-sans">Loading pricing guide...</p>
                  </div>
                </div>
              }>
                <InstantPricingGuide />
              </Suspense>
            </FadeIn>
          </div>

          {/* Testimonials - background always visible, only content animates */}
          <div className="bg-white">
            <FadeIn direction="up" delay={0} duration={0.6}>
              <Testimonials />
            </FadeIn>
          </div>

          {/* FAQ - background always visible, only content animates */}
          <div className="bg-white">
            <FadeIn direction="up" delay={0} duration={0.6}>
              <FAQSection />
            </FadeIn>
          </div>

          {/* Blog section handles its own animations internally */}
          <BlogLayout />

          <FadeIn direction="up" delay={0} duration={0.6}>
            <FooterSection />
          </FadeIn>
        </div>

        <StickyCTA />
        <ClickToCall />
        <MobileStickyBar />
      </main>
    </>
  );
};

export default Page;
