"use client";

import { INDUSTRIES } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { motion } from "framer-motion";

export function IndustriesStrip() {
  return (
    <section className="page-shell section-space" id="industries">
      <SectionHeading eyebrow="Industries We Serve" title="Built For Every Industry That Moves Forward." />
      <div className="mt-8 flex gap-4 overflow-x-auto pb-3">
        {INDUSTRIES.map((industry) => (
          <motion.article
            key={industry}
            whileHover={{ y: -3 }}
            className="cinematic-card min-w-[200px] rounded-[20px] p-4"
          >
            <div className="h-16 rounded-xl bg-gradient-to-br from-[#1c346f] via-[#345cc1] to-[#8f50d4]" />
            <p className="mt-3 text-base font-semibold">{industry}</p>
            <p className="mt-1 text-xs text-[#4f6084] dark:text-[#b5c0e1]">Tailored creative systems.</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
