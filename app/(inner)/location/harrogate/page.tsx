import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Harrogate | Winder&Stilhaus",
  description: "Luxury interior design and renovation services in Harrogate. Premium kitchens, bathrooms, and bespoke interiors across HG postcodes. Expert design and craftsmanship.",
  alternates: {
    canonical: "/location/harrogate",
  },
};

export default function HarrogatePage() {
  return <LocationLayout location="Harrogate" />;
}

