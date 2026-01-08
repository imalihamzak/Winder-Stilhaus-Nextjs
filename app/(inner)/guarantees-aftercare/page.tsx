import GuaranteesAftercareContent from "@/components/guarantees-aftercare/guarantees-aftercare-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guarantees & Aftercare | Winder&Stilhaus",
  description: "Comprehensive warranty coverage, workmanship guarantees, manufacturer warranties, and maintenance expectations for your interior design project.",
  alternates: {
    canonical: "/guarantees-aftercare",
  },
};

export default function GuaranteesAftercarePage() {
  return <GuaranteesAftercareContent />;
}

