import CookiesContent from "@/components/legal/cookies-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Winder&Stilhaus",
  description: "Cookie policy for Winder&Stilhaus. Learn about how we use cookies and how to manage your cookie preferences.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return <CookiesContent />;
}

