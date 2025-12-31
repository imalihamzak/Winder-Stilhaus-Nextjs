import LocationLayout from "@/components/location-based-page/location-layout";
import { Metadata } from "next";

export const metadata = {
  title: "Interior Design Services in Harrogate | Winder & Stilhaus",
  description: "Luxury interior design and renovation services in Harrogate. Premium kitchens, bathrooms, and bespoke interiors across HG postcodes. Expert design and craftsmanship.",
  alternates: {
    canonical: "/location/harrogate",
  },
};

const harrogateLocationData = {
  name: "Harrogate",
  description: "Harrogate",
  content: `Harrogate is renowned for its elegant architecture and affluent residential areas, making it an ideal location for luxury interior design projects. We deliver premium renovation services across HG postcodes, from period properties in the Stray area to contemporary homes in new developments.

Our Harrogate projects often feature high-end finishes, bespoke cabinetry, and sophisticated design schemes that complement the town's refined character. We understand the unique requirements of Harrogate homeowners, who value quality craftsmanship and timeless elegance.

Whether you're renovating a Victorian villa, updating a modern family home, or transforming a luxury apartment, we provide complete design and build services. Our expertise in premium materials and finishes ensures your Harrogate home reflects the quality and style you expect.`,
  images: [
    "/img-1.png",
    "/assets/portfolio/kitchen.png",
    "/img-2.png",
  ],
  postcodes: ["HG1", "HG2", "HG3", "HG4", "HG5"],
};

export default function HarrogatePage() {
  return <LocationLayout location={harrogateLocationData.name} />;
}

