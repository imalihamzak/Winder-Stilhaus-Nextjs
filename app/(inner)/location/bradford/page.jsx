import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Bradford | Winder & Stilhaus",
  description: "Premium interior design and renovation services in Bradford. Luxury kitchens, bathrooms, and full-home design across BD postcodes. Expert craftsmanship and transparent pricing.",
  alternates: {
    canonical: "/location/bradford",
  },
};

const bradfordLocationData = {
  name: "Bradford",
  description: "Bradford",
  content: `Bradford's diverse property landscape, from Victorian terraces to modern developments, offers exciting opportunities for interior design and renovation. We provide comprehensive renovation services across BD postcodes, transforming homes throughout the city and surrounding areas.

Our Bradford projects range from complete home renovations in period properties to modern upgrades in new-build developments. We work with a wide variety of property types and understand the unique challenges and opportunities each presents.

Whether you're renovating a Victorian terrace, updating a 1930s semi-detached, or transforming a modern apartment, we deliver luxury interiors that enhance your lifestyle. Our transparent pricing and detailed project management ensure your Bradford renovation runs smoothly from start to finish.`,
  images: [
    "/img-1.png",
    "/img-2.png",
    "/assets/portfolio/kitchen.png",
  ],
  postcodes: ["BD1", "BD2", "BD3", "BD4", "BD5", "BD6", "BD7", "BD8", "BD9", "BD10", "BD11", "BD12", "BD13", "BD14", "BD15", "BD16", "BD17", "BD18", "BD19", "BD20", "BD21", "BD22", "BD23", "BD24"],
};

export default function BradfordPage() {
  return <LocationLayout location={bradfordLocationData.name} />;
}

