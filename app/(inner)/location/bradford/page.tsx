import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Bradford | Winder&Stilhaus",
  description: "Premium interior design and renovation services in Bradford. Luxury kitchens, bathrooms, and full-home design across BD postcodes. Expert craftsmanship and transparent pricing.",
  alternates: {
    canonical: "/location/bradford",
  },
};

export default function BradfordPage() {
  return <LocationLayout location="Bradford" />;
}

