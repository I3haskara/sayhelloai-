import { WhySayHello } from "@/components/about/why-sayhello";
import { HomeHero } from "@/components/hero/home-hero";
import { PageShell } from "@/components/layout/page-shell";
import { BrandStrip } from "@/components/portfolio/brand-strip";
import { FeaturedWorkGrid } from "@/components/portfolio/featured-work-grid";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { IndustriesStrip } from "@/components/services/industries-strip";
import { ProcessFlow } from "@/components/services/process-flow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SayHelloAI builds cinematic AI-led creative media systems for modern growth brands.",
};

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <BrandStrip />
      <FeaturedWorkGrid />
      <WhySayHello />
      <ProcessFlow />
      <IndustriesStrip />
      <PricingCards />
    </PageShell>
  );
}
