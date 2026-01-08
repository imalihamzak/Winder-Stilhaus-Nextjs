import TestimonialsContent from "@/components/testimonials/testimonials-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Winder&Stilhaus",
  description: "Read what our clients say about our premium interior design and renovation services across West Yorkshire. Verified testimonials from satisfied customers.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}

