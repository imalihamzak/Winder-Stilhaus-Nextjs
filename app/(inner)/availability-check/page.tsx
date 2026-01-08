import PostcodeGatePageClient from "./availability-client";

export const metadata = {
  title: "Check Service Availability | Winder&Stilhaus",
  description: "Check if our premium interior design and renovation services are available in your area. Enter your postcode to verify service coverage across West Yorkshire.",
  alternates: {
    canonical: "/availability-check",
  },
};

export default function PostcodeGatePage() {
  return <PostcodeGatePageClient />;
}

