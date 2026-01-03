import TestimonialsSlider from "@/components/location-based-page/testimonials/testi-slider";

interface TestimonialsLayoutProps {
  location: string;
}

export default function TestimonialsLayout({location}: TestimonialsLayoutProps) {
  return (
      <TestimonialsSlider location={location}/>
  );
}

