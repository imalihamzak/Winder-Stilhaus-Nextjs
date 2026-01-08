import { Metadata } from "next";
import InstantPricingGuide from "@/components/ai-pricing-guide/pricing-layout";

export const metadata: Metadata = {
  title: "Instant Pricing Guide | Winder&Stilhaus",
  description: "Get an instant, tailored cost range for your kitchen, bathroom, or interior renovation project. Transparent pricing with no obligation.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <InstantPricingGuide />;
}

