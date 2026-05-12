"use client";

import { PRICING } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { motion } from "framer-motion";

export function PricingCards({ id }: { id?: string }) {
  return (
    <section className="page-shell section-space" id={id}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_2fr]">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent Pricing. Premium Quality. Real Results."
        />
        <div className="flex items-center lg:justify-end">
          <div className="rounded-full border border-white/30 bg-white/60 p-1 text-sm dark:bg-white/10">
            <button className="btn-pill bg-white px-5 py-1.5 font-semibold dark:bg-[#0a1a47]">Monthly</button>
            <button className="btn-pill px-5 py-1.5 text-[#4f6084] dark:text-[#b5c0e1]">Custom</button>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {PRICING.map((plan) => (
          <motion.article
            key={plan.name}
            whileHover={{ y: -5 }}
            className={`cinematic-card rounded-[24px] p-7 ${plan.featured ? "gradient-border bg-white dark:bg-[#0a1a47]" : ""}`}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-3 text-4xl font-semibold">{plan.price}</p>
            <p className="mt-4 text-sm text-[#4f6084] dark:text-[#b5c0e1]">{plan.detail}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-7 w-full btn-pill px-5 py-2.5 text-sm font-semibold ${plan.featured ? "bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed] text-white" : "border border-white/30 bg-white/60 dark:bg-white/10"}`}>
              Get Started
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
