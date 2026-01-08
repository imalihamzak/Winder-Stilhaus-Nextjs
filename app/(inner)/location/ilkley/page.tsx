import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Ilkley | Winder&Stilhaus",
  description: "Premium interior design and renovation services in Ilkley. Luxury kitchens, bathrooms, and full-home design. Expert craftsmanship for period and modern properties.",
  alternates: {
    canonical: "/location/ilkley",
  },
};

export default function IlkleyPage() {
  return <LocationLayout location="Ilkley" />;
}

