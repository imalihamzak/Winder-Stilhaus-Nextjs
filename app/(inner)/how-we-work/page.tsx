import Script from "next/script";
import HowWeWorkContent from "@/components/how-we-work/how-we-work-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work | Winder&Stilhaus",
  description: "Our 5-step process for delivering premium interior design and renovation services. From initial consultation to final handover.",
  alternates: {
    canonical: "/how-we-work",
  },
};

// HowTo Schema for SEO
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How We Work - Premium Interior Design Process",
  "description": "Our 5-step process for delivering premium interior design and renovation services",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Initial Consultation",
      "text": "We start with a comprehensive consultation to understand your vision, requirements, budget, and timeline. This includes an on-site visit to assess your space and discuss your goals.",
      "url": "https://winderstilhaus.com/how-we-work#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design & Planning",
      "text": "Our design team creates detailed layouts, 3D visualisations, and material selections tailored to your preferences. We present design concepts and refine them based on your feedback.",
      "url": "https://winderstilhaus.com/how-we-work#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Project Management & Execution",
      "text": "Once designs are approved, we manage the entire project from procurement to installation. Our team coordinates with trusted suppliers and craftspeople, ensuring quality at every stage.",
      "url": "https://winderstilhaus.com/how-we-work#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Quality Control & Refinement",
      "text": "Throughout the project, we conduct regular site visits and quality checks. We address any issues promptly and ensure everything meets our premium standards before final handover.",
      "url": "https://winderstilhaus.com/how-we-work#step-4"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Final Handover & Aftercare",
      "text": "We complete a thorough final inspection with you, ensuring every detail is perfect. After handover, we provide ongoing support and maintenance guidance to keep your space looking its best.",
      "url": "https://winderstilhaus.com/how-we-work#step-5"
    }
  ],
  "totalTime": "PT12W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "GBP",
    "value": "Varies by project scope"
  }
};

export default function HowWeWorkPage() {
  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HowWeWorkContent />
    </>
  );
}

