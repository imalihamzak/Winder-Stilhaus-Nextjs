import { notFound } from "next/navigation";
import ServiceLayout from "@/components/service-page/service-layout";

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

// Service data mapping - in production, this would come from a CMS/database
const servicesData: Record<string, ServiceData> = {
  "kitchen-renovation": {
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
      {
        question: "Do you handle planning permission applications?",
        answer:
          "While we don't directly submit planning applications, we work closely with architects and planning consultants to ensure your kitchen renovation meets all requirements. We can recommend trusted partners to handle planning applications if needed.",
      },
      {
        question: "What happens if I want to make changes during the project?",
        answer:
          "We understand that preferences can evolve. We have a clear change order process that allows modifications during the project, with transparent pricing and timeline adjustments communicated upfront.",
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
  },
  "bathroom-remodeling": {
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
          "Most bathroom renovations take between 4–8 weeks depending on the scope of work. This includes design, material sourcing, and installation. Complex projects with structural changes may take 10–12 weeks.",
      },
      {
        question: "Do you handle waterproofing?",
        answer:
          "Yes, waterproofing is a critical part of our bathroom renovation service. We ensure all wet areas are properly waterproofed according to building regulations to prevent leaks and water damage.",
      },
      {
        question: "What types of tiles do you offer?",
        answer:
          "We offer a wide range of premium tiles including porcelain, ceramic, natural stone, and luxury finishes. We'll help you choose tiles that match your style and are suitable for bathroom environments.",
      },
      {
        question: "Can you install underfloor heating?",
        answer:
          "Yes, we can install underfloor heating systems as part of your bathroom renovation. This adds comfort and luxury to your bathroom space.",
      },
      {
        question: "Do you provide ventilation solutions?",
        answer:
          "Yes, proper ventilation is essential for bathrooms. We design and install ventilation systems that meet building regulations and prevent moisture buildup.",
      },
      {
        question: "What warranty do you provide?",
        answer:
          "We provide comprehensive warranties covering installation, waterproofing, and workmanship. Specific warranty periods vary by component, and we'll provide full details during your consultation.",
      },
      {
        question: "Can you install underfloor heating in bathrooms?",
        answer:
          "Yes, we can install underfloor heating systems as part of your bathroom renovation. This adds comfort and luxury to your bathroom space, and we'll ensure it's properly integrated with your flooring and heating controls.",
      },
      {
        question: "How do you ensure proper ventilation in bathrooms?",
        answer:
          "Proper ventilation is essential for bathrooms. We design and install ventilation systems that meet building regulations and prevent moisture buildup. This includes extractor fans, window placement, and mechanical ventilation where needed.",
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
  },
  "full-home-design": {
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
      "Living and lounge styling",
      "Bedroom and wardrobe design",
      "Utility room planning",
      "Hall and stairs design",
      "Bespoke storage solutions",
      "Lighting design throughout",
      "After-service support",
    ],
    faqs: [
      {
        question: "What rooms are included in full-home design?",
        answer:
          "Our full-home design service covers all interior spaces including living rooms, bedrooms, kitchens, bathrooms, utility rooms, hallways, stairs, and bespoke storage areas. We create cohesive designs that flow throughout your entire property.",
      },
      {
        question: "Can you design bespoke storage solutions?",
        answer:
          "Yes, bespoke storage is a key part of our service. We design and install custom wardrobes, built-in storage, and other storage solutions tailored to your specific needs and space requirements.",
      },
      {
        question: "Do you handle lighting design?",
        answer:
          "Yes, we provide comprehensive lighting design including ambient, task, and accent lighting. We create lighting plans that enhance the mood and functionality of each space.",
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
      {
        question: "Do you work with existing furniture and furnishings?",
        answer:
          "Yes, we can incorporate your existing furniture and furnishings into the new design. We'll assess what works well in the new scheme and suggest what might need updating or repositioning to create a cohesive look.",
      },
      {
        question: "Can you help with lighting design throughout the home?",
        answer:
          "Absolutely. Lighting design is a crucial part of our interior design service. We create comprehensive lighting plans including ambient, task, and accent lighting to enhance the mood and functionality of each space.",
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
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServiceLayout service={service} />;
}

