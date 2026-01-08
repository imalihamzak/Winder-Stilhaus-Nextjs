import ServiceLayout from "@/components/service-page/service-layout";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Renovation | Winder&Stilhaus",
  description: "Luxury kitchen renovation services with bespoke design, premium materials, and expert installation. Transform your kitchen into a functional masterpiece.",
  alternates: {
    canonical: "/service/kitchen-renovation",
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
  slug: "kitchen-renovation",
  title: "Kitchen Renovation",
  tagline: "Premium kitchen design and renovation with expert craftsmanship and luxury finishes.",
  heroImage: "/assets/portfolio/kitchen.png",
  overview: [
    "Transform your kitchen into a functional, beautiful space that reflects your lifestyle. Our kitchen renovation service combines premium cabinetry, stone worktops, and professional installation to create kitchens that are both stunning and practical.",
    "We handle everything from initial design concepts to final installation, ensuring every detail meets our exacting standards. Our team works with trusted suppliers to source the finest materials, from handcrafted cabinetry to premium stone surfaces.",
  ],
  benefits: [
    "Premium cabinetry and storage solutions",
    "Expert installation and project management",
    "Stone worktops and premium finishes",
    "3D design visualisations",
    "Complete MEP integration",
  ],
  audience: [
    "Homeowners seeking luxury kitchen upgrades",
    "Property developers requiring high-end finishes",
    "Clients wanting bespoke kitchen solutions",
  ],
  includes: [
    "Complete design and space planning",
    "Premium cabinetry (custom or semi-custom)",
    "Stone worktops (quartz, granite, or marble)",
    "Professional installation",
    "MEP work (electrical, plumbing, ventilation)",
    "Lighting design and installation",
    "After-service support and warranty",
  ],
  faqs: [
    {
      question: "How long does a kitchen renovation typically take?",
      answer:
        "Most kitchen renovations take between 6–10 weeks from design approval to completion. This includes cabinetry manufacturing, worktop templating, and installation. Complex projects with structural changes may take 12–16 weeks.",
    },
    {
      question: "Do you provide 3D design visualisations?",
      answer:
        "Yes, we provide detailed 3D visualisations showing your new kitchen layout, cabinetry, worktops, and finishes. This helps you visualise the final result before any work begins.",
    },
    {
      question: "What types of worktops do you offer?",
      answer:
        "We offer a wide range of premium worktops including quartz, granite, marble, and composite materials. We'll help you choose the best option based on your style, budget, and maintenance preferences.",
    },
    {
      question: "Can you handle electrical and plumbing work?",
      answer:
        "Yes, we manage all MEP (mechanical, electrical, plumbing) work as part of our turnkey service. This includes rewiring, new circuits, plumbing modifications, and ventilation systems.",
    },
    {
      question: "Do you work with existing appliances or help source new ones?",
      answer:
        "We can integrate your existing appliances or help you select and source new ones. We work with premium appliance brands and can coordinate delivery and installation as part of the project.",
    },
    {
      question: "What warranty do you provide on kitchen installations?",
      answer:
        "We provide a comprehensive warranty covering cabinetry, installation, and workmanship. Specific warranty periods vary by component, and we'll provide full details during your consultation.",
    },
  ],
  gallery: [
    { image: "/assets/portfolio/kitchen.png", title: "Modern Kitchen Design", location: "Leeds" },
    { image: "/img-1.png", title: "Luxury Kitchen Renovation", location: "Harrogate" },
    { image: "/img-2.png", title: "Bespoke Kitchen Solution", location: "Ilkley" },
    { image: "/assets/portfolio/kitchen.png", title: "Contemporary Kitchen", location: "Wetherby" },
    { image: "/img-1.png", title: "Premium Kitchen Design", location: "Bradford" },
    { image: "/img-2.png", title: "Traditional Kitchen Renovation", location: "Wakefield" },
  ],
};

export default function KitchenRenovationPage() {
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
        id="faq-schema-kitchen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceLayout service={serviceData} />
    </>
  );
}

