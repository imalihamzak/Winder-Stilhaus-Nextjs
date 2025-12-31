import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Wakefield | Winder & Stilhaus",
  description: "Premium interior design and renovation services in Wakefield. Luxury kitchens, bathrooms, and full-home design across WF postcodes. Expert design and craftsmanship.",
  alternates: {
    canonical: "/location/wakefield",
  },
};

const wakefieldLocationData = {
  name: "Wakefield",
  description: "Wakefield",
  content: `Wakefield's combination of historic architecture and modern developments provides an excellent setting for luxury interior design projects. We deliver comprehensive renovation services across WF postcodes, working with period properties, modern homes, and everything in between.

Our Wakefield projects focus on creating elegant, functional spaces that enhance daily living. We understand the importance of balancing period character with modern convenience, ensuring your home is both beautiful and practical.

Whether you're renovating a Victorian terrace, updating a 1960s property, or transforming a contemporary home, we provide complete design and build services. Our commitment to quality craftsmanship and transparent pricing ensures your Wakefield renovation exceeds expectations.`,
  images: [
    "/assets/portfolio/kitchen.png",
    "/img-1.png",
    "/img-2.png",
  ],
  postcodes: ["WF1", "WF2", "WF3", "WF4", "WF5", "WF6", "WF7", "WF8", "WF9", "WF10", "WF11", "WF12", "WF13", "WF14", "WF15", "WF16", "WF17"],
};

export default function WakefieldPage() {
  return <LocationLayout location={wakefieldLocationData.name} />;
}

