import { ABOUT_STATS } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function StatsGrid() {
  return (
    <section className="page-shell section-space">
      <SectionHeading eyebrow="Stats" title="Measured impact, clean presentation." />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_STATS.map((stat) => (
          <article key={stat.label} className="cinematic-card rounded-[24px] p-6">
            <p className="text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm text-[#4f6084] dark:text-[#b5c0e1]">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
