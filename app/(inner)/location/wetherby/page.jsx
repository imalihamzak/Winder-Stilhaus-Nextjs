import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Wetherby | Winder & Stilhaus",
  description: "Luxury interior design and renovation services in Wetherby. Premium kitchens, bathrooms, and bespoke interiors. Expert design for period and modern properties.",
  alternates: {
    canonical: "/location/wetherby",
  },
};

const wetherbyLocationData = {
  name: "Wetherby",
  description: "Wetherby",
  content: `Wetherby's charming market town character and mix of period and new-build properties provide an excellent backdrop for luxury interior design projects. We deliver premium renovation services across Wetherby, working with everything from Georgian townhouses to contemporary family homes.

Our Wetherby projects focus on creating elegant, functional spaces that reflect the town's refined character. We understand the importance of preserving period features while introducing modern conveniences and efficient layouts.

Whether you're renovating a period property in the town centre or updating a modern home on the outskirts, we provide complete design and build services. Our expertise in premium materials and finishes ensures your Wetherby home is transformed with quality and style.`,
  images: [
    "/assets/portfolio/kitchen.png",
    "/img-1.png",
    "/img-2.png",
  ],
  postcodes: ["LS22", "LS23"],
};

export default function WetherbyPage() {
  return <LocationLayout location={wetherbyLocationData.name} />;
}

