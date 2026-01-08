import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Wakefield | Winder&Stilhaus",
  description: "Premium interior design and renovation services in Wakefield. Luxury kitchens, bathrooms, and full-home design across WF postcodes. Expert design and craftsmanship.",
  alternates: {
    canonical: "/location/wakefield",
  },
};

export default function WakefieldPage() {
  return <LocationLayout location="Wakefield" />;
}

