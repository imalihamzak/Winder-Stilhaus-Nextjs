import SharedHeader from "@/components/SharedHeader";
import FooterSection from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ClickToCall from "@/components/ClickToCall";
import MobileStickyBar from "@/components/MobileStickyBar";
import TestimonialsContent from "@/components/testimonials/testimonials-content";
import { Metadata } from "next";

export const metadata = {
  title: "Testimonials | Winder & Stilhaus",
  description: "Read what our clients say about our premium interior design and renovation services across West Yorkshire. Verified testimonials from satisfied customers.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}

