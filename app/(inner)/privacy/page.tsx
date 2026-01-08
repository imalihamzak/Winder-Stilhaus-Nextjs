import PrivacyContent from "@/components/legal/privacy-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Winder&Stilhaus",
  description: "Privacy policy for Winder&Stilhaus. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

