import ContactPageClient from "./contact-client";

export const metadata = {
  title: "Contact Us | Winder&Stilhaus",
  description: "Get in touch with Winder&Stilhaus for premium interior design and renovation services in West Yorkshire. Book a free consultation today.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

