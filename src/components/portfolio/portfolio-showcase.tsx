import { SectionHeading } from "@/components/shared/section-heading";

const showcase = [
  "game cinematics",
  "AI advertising",
  "restaurant branding",
  "fashion campaign",
  "concept art",
];

export function PortfolioShowcase() {
  return (
    <section className="page-shell section-space">
      <SectionHeading eyebrow="Portfolio Showcase" title="Large-format creative strip for campaign storytelling." />
      <div className="mt-8 overflow-hidden rounded-[24px] border border-white/20 bg-white/40 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-3 md:grid-cols-5">
          {showcase.map((item) => (
            <article key={item} className="h-[240px] rounded-[18px] bg-gradient-to-br from-[#0e1f54] via-[#24428f] to-[#7d3dc0] p-4 text-white">
              <p className="mt-auto text-xs uppercase tracking-[0.15em]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {showcase.map((item) => (
            <span key={item} className="btn-pill border border-white/30 bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.16em] dark:bg-white/10">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
