import ServicesPageClient from "./services-client";

export const metadata = {
  title: "Services | Winder&Stilhaus",
  description: "Premium interior design and renovation services including kitchens, bathrooms, and full-home design. Expert craftsmanship across West Yorkshire.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}

