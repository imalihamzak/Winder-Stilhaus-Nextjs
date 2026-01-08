import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Wetherby | Winder&Stilhaus",
  description: "Luxury interior design and renovation services in Wetherby. Premium kitchens, bathrooms, and bespoke interiors. Expert design for period and modern properties.",
  alternates: {
    canonical: "/location/wetherby",
  },
};

export default function WetherbyPage() {
  return <LocationLayout location="Wetherby" />;
}

