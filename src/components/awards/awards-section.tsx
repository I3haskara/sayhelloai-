import { AWARDS } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function AwardsSection() {
  return (
    <section className="page-shell section-space">
      <SectionHeading eyebrow="Awards" title="Recognition for cinematic craft and AI innovation." />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {AWARDS.map((award) => (
          <article key={award} className="cinematic-card rounded-[24px] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4f6084] dark:text-[#b5c0e1]">Award</p>
            <h3 className="mt-3 text-xl font-semibold">{award}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
