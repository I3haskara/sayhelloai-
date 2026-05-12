import { SERVICE_CARDS } from "@/content/site";
import { CinematicButton } from "@/components/shared/cinematic-button";

export function ServicesHero() {
  return (
    <section className="page-shell section-space" id="services">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="caption uppercase tracking-[0.2em] text-[#4f6084] dark:text-[#b5c0e1]">Our Services</p>
          <h1 className="heading-xl mt-6 text-balance">End-to-End Creative Solutions <span className="text-[#ff6b4a]">Powered by AI.</span></h1>
          <p className="mt-6 body-lg max-w-xl text-[#4f6084] dark:text-[#b5c0e1]">
            From AI-driven content and game development to virtual production and SaaS platforms, we deliver impactful creative experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CinematicButton href="/services#contact" label="Start a Project" />
            <CinematicButton href="/about" label="View Portfolio" variant="secondary" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICE_CARDS.slice(0, 4).map((service) => (
            <article key={service.title} className="cinematic-card rounded-[24px] p-5">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-[#4f6084] dark:text-[#b5c0e1]">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
