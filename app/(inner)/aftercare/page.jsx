import SharedHeader from "@/components/SharedHeader";
import FooterSection from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ClickToCall from "@/components/ClickToCall";
import MobileStickyBar from "@/components/MobileStickyBar";
import AftercareContent from "@/components/aftercare/aftercare-content";
import { Metadata } from "next";

export const metadata = {
  title: "Aftercare & Support | Winder & Stilhaus",
  description: "Comprehensive aftercare and support services for your interior design project. Warranty coverage, maintenance guidance, and ongoing support from Winder & Stilhaus.",
  alternates: {
    canonical: "/aftercare",
  },
};

export default function AftercarePage() {
  return <AftercareContent />;
}

