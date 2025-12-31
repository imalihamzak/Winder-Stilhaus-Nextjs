import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Ilkley | Winder & Stilhaus",
  description: "Premium interior design and renovation services in Ilkley. Luxury kitchens, bathrooms, and full-home design. Expert craftsmanship for period and modern properties.",
  alternates: {
    canonical: "/location/ilkley",
  },
};

const ilkleyLocationData = {
  name: "Ilkley",
  description: "Ilkley",
  content: `Ilkley's stunning moorland setting and mix of period and contemporary properties make it a sought-after location for luxury interior design. We provide comprehensive renovation services for homes across Ilkley, working with both period properties and modern developments.

Our Ilkley projects often involve sensitive restoration of period features combined with modern functionality. We specialise in creating interiors that respect the character of period homes while introducing contemporary comforts and efficient layouts.

From complete kitchen renovations in Victorian terraces to luxury bathroom remodelling in modern homes, we deliver exceptional results. Our attention to detail and commitment to quality ensures your Ilkley home is transformed into a beautiful, functional space that enhances your lifestyle.`,
  images: [
    "/img-2.png",
    "/assets/portfolio/kitchen.png",
    "/img-1.png",
  ],
  postcodes: ["LS29"],
};

export default function IlkleyPage() {
  return <LocationLayout location={ilkleyLocationData.name} />;
}

