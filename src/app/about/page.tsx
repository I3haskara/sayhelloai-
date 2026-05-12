import { AboutHero } from "@/components/about/about-hero";
import { TeamSection } from "@/components/about/team-section";
import { AwardsSection } from "@/components/awards/awards-section";
import { PageShell } from "@/components/layout/page-shell";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { ServiceGrid } from "@/components/services/service-grid";
import { StatsGrid } from "@/components/stats/stats-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the SayHelloAI team, our creative process, awards, and cinematic AI portfolio showcase.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <TeamSection />
      <PortfolioShowcase />
      <ServiceGrid />
      <AwardsSection />
      <StatsGrid />
    </PageShell>
  );
}
