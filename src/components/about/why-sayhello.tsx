import { ABOUT_STATS } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhySayHello() {
  return (
    <section className="page-shell section-space" id="about">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Why SayHelloAI"
            title="AI Speed. Human Creativity. Real Results."
            body="We combine intelligent AI workflows with creative direction to deliver content that connects and converts."
          />
          <button className="mt-8 btn-pill border border-white/30 bg-white/60 px-5 py-2 text-sm font-semibold dark:bg-white/10">
            About Us
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {ABOUT_STATS.map((stat) => (
            <article key={stat.label} className="cinematic-card rounded-[24px] p-6">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="mt-3 text-sm text-[#4f6084] dark:text-[#b5c0e1]">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
