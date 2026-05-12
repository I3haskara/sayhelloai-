import { ContactSection } from "@/components/contact/contact-section";
import { PageShell } from "@/components/layout/page-shell";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ServiceGrid } from "@/components/services/service-grid";
import { ServicesHero } from "@/components/services/services-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SayHelloAI services including AI creative ads, virtual production, game content, and contact our studio.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHero />
      <ServiceGrid />
      <PricingCards id="pricing" />
      <ContactSection />
    </PageShell>
  );
}
