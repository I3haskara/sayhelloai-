"use client";

import { motion } from "framer-motion";
import { FEATURED_WORK } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedWorkGrid() {
  return (
    <section className="page-shell section-space" id="portfolio">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_2fr]">
        <SectionHeading
          eyebrow="Featured Work"
          title="Crafted With AI. Refined By Creativity."
          body="A glimpse of our work across brands, industries and ideas."
        />
        <div className="mt-2 flex items-center lg:justify-end">
          <button className="btn-pill border border-white/30 bg-white/60 px-5 py-2 text-sm font-semibold dark:bg-white/10">
            View All Work
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_WORK.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -4 }}
            className="group gradient-border relative overflow-hidden rounded-[24px]"
          >
            <div className="h-44 w-full bg-gradient-to-br from-[#0e1f54] via-[#233f8d] to-[#8a44cc] transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b4d]/85 via-[#061b4d]/35 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.16em] text-blue-100/80">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
