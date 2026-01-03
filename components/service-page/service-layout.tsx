import ServiceHero from "@/components/service-page/service-hero";
import ServiceOverview from "@/components/service-page/service-overview";
import ServiceRegulations from "@/components/service-page/service-regulations";
import DesignConcepts from "@/components/service-page/design-concepts";
import ServiceProcess from "@/components/service-page/service-process";
import WhatsIncluded from "@/components/service-page/whats-included";
import ServiceMiniPortfolio from "@/components/service-page/service-mini-portfolio";
import ServiceFAQ from "@/components/service-page/service-faq";
import ServiceCTA from "@/components/service-page/service-cta";

interface Service {
  title?: string;
  tagline?: string;
  slug?: string;
  overview?: string[];
  benefits?: string[];
  audience?: string[];
  [key: string]: any;
}

interface ServiceLayoutProps {
  service?: Service;
}

export default function ServiceLayout({ service }: ServiceLayoutProps) {
  if (!service) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#1a1d29] mb-4">Service Not Found</h1>
          <p className="text-[#4a4f63] mb-6">The requested service page could not be found.</p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1d29] text-white font-semibold hover:opacity-90 transition"
          >
            View All Services →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceRegulations service={service} />
      <DesignConcepts service={service} />
      <ServiceProcess service={service} />
      <WhatsIncluded service={service} />
      <ServiceMiniPortfolio service={service} />
      <ServiceFAQ service={service} />
      <ServiceCTA />
    </main>
  );
}

