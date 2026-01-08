import AboutPageClient from './about-client';

export const metadata = {
  title: "About Us | Winder&Stilhaus",
  description: "Learn about Winder&Stilhaus, a premium interior design and renovation company serving West Yorkshire. Our story, values, and commitment to luxury craftsmanship.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

