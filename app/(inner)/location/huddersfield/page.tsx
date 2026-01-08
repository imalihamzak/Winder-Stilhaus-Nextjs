import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Huddersfield | Winder&Stilhaus",
  description: "Luxury interior design and renovation services in Huddersfield. Premium kitchens, bathrooms, and full-home design across HD postcodes. Expert craftsmanship and design.",
  alternates: {
    canonical: "/location/huddersfield",
  },
};

export default function HuddersfieldPage() {
  return <LocationLayout location="Huddersfield" />;
}

