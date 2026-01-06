import LocationHero from "@/components/location-based-page/location-hero";
import LocationSEOContent from "@/components/location-based-page/location-seo-content";
import LocationServices from "@/components/location-based-page/location-services";
import LocationPortfolio from "@/components/location-based-page/location-portfolio";
import LocationWhyChooseUs from "@/components/location-based-page/location-why-choose-us";
import UnifiedCTA from "@/components/UnifiedCTA";
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
      <UnifiedCTA 
        heading={`Schedule Free Site Visit in ${location}`}
        description="Book a free design consultation and site inspection with our specialist team today."
        buttonText="Schedule Now"
        delay={0.8}
      />
    </>
  );
}

