import LocationHero from "@/components/location-based-page/location-hero";
import LocationSEOContent from "@/components/location-based-page/location-seo-content";
import LocationServices from "@/components/location-based-page/location-services";
import LocationPortfolio from "@/components/location-based-page/location-portfolio";
import LocationWhyChooseUs from "@/components/location-based-page/location-why-choose-us";
import LocationCTA from "@/components/location-based-page/location-cta";
import TestimonialsLayout from "@/components/location-based-page/testimonials/testi-layout";

interface LocationLayoutProps {
  location: string;
}

export default function LocationLayout({location}: LocationLayoutProps) {
  
 
  return (
    <>
      <LocationHero location={location} />
      <LocationSEOContent location={location} />
      <LocationServices />
      <LocationPortfolio location={location} />
      <LocationWhyChooseUs location={location} />
      <TestimonialsLayout location={location}/>
      <LocationCTA location={location} />
    </>
  );
}

