import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Leeds | Winder&Stilhaus",
  description: "Premium interior design and renovation services in Leeds. Luxury kitchens, bathrooms, and full-home design across LS postcodes. Expert craftsmanship, transparent pricing.",
  alternates: {
    canonical: "/location/leeds",
  },
};

export default function LeedsPage() {
  return <LocationLayout location="Leeds" />;
}

