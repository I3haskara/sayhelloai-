"use client";

import { PROCESS_STEPS } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { motion } from "framer-motion";

export function ProcessFlow() {
  return (
    <section className="page-shell section-space">
      <SectionHeading
        eyebrow="Our Process"
        title="From Idea To Impact"
      />
      <div className="mt-10 overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <motion.article
                whileHover={{ y: -3 }}
                className="cinematic-card rounded-[24px] px-6 py-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff6b4a]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-[#4f6084] dark:text-[#b5c0e1]">We optimize each stage for quality and speed.</p>
              </motion.article>
              {index !== PROCESS_STEPS.length - 1 ? (
                <span className="h-px w-10 bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed]" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
