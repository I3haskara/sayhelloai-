"use client";

import { motion } from "framer-motion";
import { SERVICE_CARDS } from "@/content/site";

export function ServiceGrid() {
  return (
    <section className="page-shell section-space">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_CARDS.map((service) => (
          <motion.article
            key={service.title}
            whileHover={{ y: -4 }}
            className="group cinematic-card gradient-border relative overflow-hidden rounded-[24px] p-5"
          >
            <div className="h-36 rounded-2xl bg-gradient-to-br from-[#ff6b4a]/70 via-[#7c3aed]/65 to-[#00c2ff]/70" />
            <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-[#4f6084] dark:text-[#b5c0e1]">{service.copy}</p>
            <button className="mt-5 btn-pill border border-white/30 px-4 py-2 text-sm font-medium">
              Explore Service
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
