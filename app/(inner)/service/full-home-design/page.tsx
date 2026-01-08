import ServiceLayout from "@/components/service-page/service-layout";
import InteriorsSections from "@/components/service-page/interiors-sections";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Home Design | Winder&Stilhaus",
  description: "Complete interior design solutions transforming every room in your home with luxury and precision. Cohesive, elegant interiors throughout your property.",
  alternates: {
    canonical: "/service/full-home-design",
  },
};

interface FAQ {
  question: string;
  answer: string;
}

interface GalleryItem {
  image: string;
  title: string;
  location: string;
}

interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string[];
  benefits: string[];
  audience: string[];
  includes: string[];
  faqs: FAQ[];
  gallery: GalleryItem[];
}

const serviceData: ServiceData = {
  slug: "full-home-design",
  title: "Interiors",
  tagline: "Complete interior design solutions transforming every room in your home with luxury and precision.",
  heroImage: "/img-1.png",
  overview: [
    "Our comprehensive interior design service covers every aspect of your home, from living spaces to bedrooms, utility rooms, and bespoke storage solutions. We create cohesive, elegant interiors that flow seamlessly throughout your property.",
    "Whether you're renovating a single room or your entire home, we provide complete design and execution services. Our team specialises in creating beautiful, functional spaces that reflect your personal style while maximising comfort and practicality.",
  ],
  benefits: [
    "Complete home interior design",
    "Cohesive design across all rooms",
    "Bespoke storage solutions",
    "Premium materials throughout",
    "End-to-end project management",
  ],
  audience: [
    "Homeowners renovating entire properties",
    "Clients seeking cohesive interior design",
    "Property developers requiring complete fit-outs",
  ],
  includes: [
    "Complete design and space planning",
    "Living room design and styling",
    "Bedroom design and wardrobes",
    "Utility room planning",
    "Hall and stairs design",
    "Bespoke storage solutions",
    "Lighting design throughout",
    "Material and finish selection",
    "After-service support",
  ],
  faqs: [
    {
      question: "What rooms are included in a full-home interior design service?",
      answer:
        "Our full-home interior design service covers all rooms including living spaces, bedrooms, utility rooms, hallways, stairs, and bespoke storage areas. We create a cohesive design that flows throughout your entire property.",
    },
    {
      question: "Do you provide bespoke storage solutions?",
      answer:
        "Yes, we specialise in creating bespoke storage solutions tailored to your specific needs. This includes built-in wardrobes, under-stairs storage, utility room storage, and custom cabinetry throughout your home.",
    },
    {
      question: "How do you ensure design consistency across different rooms?",
      answer:
        "We develop a cohesive design scheme that runs throughout your home, using consistent colour palettes, materials, and design language. Each room is designed to complement the others while maintaining its own character and function.",
    },
    {
      question: "Can you work on individual rooms if I'm not ready for a full-home renovation?",
      answer:
        "Absolutely. While we specialise in full-home design, we can also work on individual rooms or specific areas. We'll ensure any single-room project can be extended to the rest of your home when you're ready.",
    },
    {
      question: "What's included in the utility room design?",
      answer:
        "Utility room design includes space planning, storage solutions, work surfaces, appliance integration, and finishes. We create functional, organised spaces that make household tasks more efficient and pleasant.",
    },
    {
      question: "How long does a full-home interior design project take?",
      answer:
        "Full-home interior design projects typically take 12–24 weeks depending on the size of your property and scope of work. We'll provide a detailed timeline during your consultation based on your specific requirements.",
    },
  ],
  gallery: [
    { image: "/img-1.png", title: "Complete Home Renovation", location: "Leeds" },
    { image: "/img-2.png", title: "Luxury Interior Design", location: "Harrogate" },
    { image: "/assets/portfolio/kitchen.png", title: "Full-Home Transformation", location: "Ilkley" },
    { image: "/img-1.png", title: "Bespoke Interior Solution", location: "Wetherby" },
    { image: "/img-2.png", title: "Premium Home Design", location: "Bradford" },
    { image: "/assets/portfolio/kitchen.png", title: "Contemporary Interiors", location: "Wakefield" },
  ],
};

export default function FullHomeDesignPage() {
  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema-interiors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceLayout service={serviceData} />
      <InteriorsSections />
    </>
  );
}

