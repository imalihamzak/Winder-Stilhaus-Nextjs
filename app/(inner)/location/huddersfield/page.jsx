import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Huddersfield | Winder & Stilhaus",
  description: "Luxury interior design and renovation services in Huddersfield. Premium kitchens, bathrooms, and full-home design across HD postcodes. Expert craftsmanship and design.",
  alternates: {
    canonical: "/location/huddersfield",
  },
};

const huddersfieldLocationData = {
  name: "Huddersfield",
  description: "Huddersfield",
  content: `Huddersfield's mix of Victorian mill conversions, period properties, and modern developments creates a diverse range of interior design opportunities. We provide premium renovation services across HD postcodes, transforming homes throughout the town and surrounding areas.

Our Huddersfield projects often involve working with period properties that require sensitive restoration alongside modern upgrades. We specialise in creating interiors that respect architectural heritage while introducing contemporary functionality and style.

From complete kitchen renovations in converted mills to luxury bathroom remodelling in period homes, we deliver exceptional results. Our expertise in both period and modern properties ensures your Huddersfield home is transformed with quality, style, and attention to detail.`,
  images: [
    "/img-2.png",
    "/assets/portfolio/kitchen.png",
    "/img-1.png",
  ],
  postcodes: ["HD1", "HD2", "HD3", "HD4", "HD5", "HD6", "HD7", "HD8", "HD9"],
};

export default function HuddersfieldPage() {
  return <LocationLayout location={huddersfieldLocationData.name} />;
}

