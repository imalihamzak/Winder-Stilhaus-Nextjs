import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Leeds | Winder & Stilhaus",
  description: "Premium interior design and renovation services in Leeds. Luxury kitchens, bathrooms, and full-home design across LS postcodes. Expert craftsmanship, transparent pricing.",
  alternates: {
    canonical: "/location/leeds",
  },
};

const leedsLocationData = {
  name: "Leeds",
  description: "Leeds",
  content: `We provide exceptional interior design and renovation services throughout Leeds and the surrounding West Yorkshire area. Our team specialises in transforming homes across LS postcodes, from city centre apartments to suburban family homes.

Leeds is home to a diverse range of properties, from Victorian terraces to modern new builds, and we have extensive experience working with all property types. Whether you're renovating a period property in Headingley, upgrading a contemporary home in Roundhay, or transforming a city centre apartment, we deliver luxury interiors that reflect your lifestyle.

Our Leeds-based projects include complete kitchen renovations, luxury bathroom remodelling, and full-home interior design. We work closely with local suppliers and craftspeople to ensure premium quality and timely delivery. Our transparent pricing and detailed project management mean you can trust us to deliver your vision on time and within budget.`,
  images: [
    "/assets/portfolio/kitchen.png",
    "/img-1.png",
    "/img-2.png",
  ],
  postcodes: ["LS1", "LS2", "LS3", "LS4", "LS5", "LS6", "LS7", "LS8", "LS9", "LS10", "LS11", "LS12", "LS13", "LS14", "LS15", "LS16", "LS17", "LS18", "LS19", "LS20", "LS21", "LS22", "LS23", "LS24", "LS25", "LS26", "LS27", "LS28", "LS29"],
};

export default function LeedsPage() {
  return <LocationLayout location={leedsLocationData.name} />;
}

