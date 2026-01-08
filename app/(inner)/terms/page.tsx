import TermsContent from "@/components/legal/terms-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Winder&Stilhaus",
  description: "Terms and conditions for Winder&Stilhaus interior design and renovation services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}

