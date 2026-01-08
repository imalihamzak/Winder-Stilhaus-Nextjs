import ServiceLayout from "@/components/service-page/service-layout";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodeling | Winder&Stilhaus",
  description: "Luxury bathroom design and renovation creating spa-like sanctuaries in your home. Premium fixtures, seamless tiling, and expert installation.",
  alternates: {
    canonical: "/service/bathroom-remodeling",
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
  slug: "bathroom-remodeling",
  title: "Bathroom Remodeling",
  tagline: "Luxury bathroom design and renovation creating spa-like sanctuaries in your home.",
  heroImage: "/img-1.png",
  overview: [
    "Create a luxurious bathroom retreat that combines elegant design with practical functionality. Our bathroom remodeling service delivers premium fittings, seamless tiling, and expert installation to transform your bathroom into a spa-like sanctuary.",
    "We specialise in both complete bathroom renovations and targeted upgrades, working with premium brands to source luxury fixtures, tiles, and finishes. Every detail is carefully considered to ensure your new bathroom meets your exact requirements.",
  ],
  benefits: [
    "Luxury fixtures and fittings",
    "Seamless tiling and waterproofing",
    "Expert plumbing and electrical work",
    "Premium material selection",
    "Complete project management",
  ],
  audience: [
    "Homeowners seeking luxury bathroom upgrades",
    "Clients wanting spa-like bathroom experiences",
    "Property developers requiring premium finishes",
  ],
  includes: [
    "Complete design and layout planning",
    "Luxury bathroom fixtures and fittings",
    "Premium tiles and surface finishes",
    "Professional plumbing and electrical work",
    "Waterproofing and ventilation",
    "Lighting design and installation",
    "After-service support and warranty",
  ],
  faqs: [
    {
      question: "How long does a bathroom renovation take?",
      answer:
        "Most bathroom renovations take between 4–8 weeks from start to completion. This includes design, material sourcing, and installation. Larger bathrooms or those requiring structural changes may take 10–12 weeks.",
    },
    {
      question: "Do you handle plumbing and electrical work?",
      answer:
        "Yes, we manage all plumbing and electrical work as part of our complete service. This includes moving fixtures, installing new circuits, and ensuring all work meets current building regulations.",
    },
    {
      question: "What types of tiles and finishes do you offer?",
      answer:
        "We offer a wide selection of premium tiles including porcelain, ceramic, natural stone, and luxury vinyl. We also provide premium surface finishes for walls and floors, helping you create a cohesive, elegant design.",
    },
    {
      question: "Can you work with existing bathroom layouts?",
      answer:
        "Yes, we can work with your existing layout or redesign the space for better functionality. We'll discuss your preferences and constraints during the consultation to determine the best approach.",
    },
    {
      question: "Do you provide waterproofing and ventilation?",
      answer:
        "Absolutely. Proper waterproofing and ventilation are essential for bathroom longevity. We ensure all wet areas are properly waterproofed and install appropriate ventilation systems to prevent moisture issues.",
    },
    {
      question: "What warranty do you provide on bathroom installations?",
      answer:
        "We provide comprehensive warranties covering fixtures, installation, and workmanship. Waterproofing comes with an extended warranty, and we'll provide full details during your consultation.",
    },
  ],
  gallery: [
    { image: "/img-1.png", title: "Luxury Bathroom Design", location: "Leeds" },
    { image: "/img-2.png", title: "Spa-like Bathroom Renovation", location: "Harrogate" },
    { image: "/assets/portfolio/kitchen.png", title: "Modern Bathroom Solution", location: "Ilkley" },
    { image: "/img-1.png", title: "Premium Bathroom Design", location: "Wetherby" },
    { image: "/img-2.png", title: "Contemporary Bathroom", location: "Bradford" },
    { image: "/assets/portfolio/kitchen.png", title: "Traditional Bathroom Renovation", location: "Wakefield" },
  ],
};

export default function BathroomRemodelingPage() {
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
        id="faq-schema-bathroom"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceLayout service={serviceData} />
    </>
  );
}

