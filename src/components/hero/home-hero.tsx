"use client";

import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/shared/floating-particles";
import { CinematicButton } from "@/components/shared/cinematic-button";

const cards = ["AI UGC Video", "Game Cinematics", "Concept Art"];

export function HomeHero() {
  return (
    <section className="page-shell section-space relative">
      <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/60 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-[#081640]/75 md:p-12 lg:p-16">
        <FloatingParticles />
        <div className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#ff6b4a]/25 blur-3xl" />
        <div className="pointer-events-none absolute right-4 top-0 h-64 w-64 rounded-full bg-[#7c3aed]/25 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="caption mb-6 uppercase tracking-[0.2em] text-[#4f6084] dark:text-[#b5c0e1]">Cinematic AI Studio</p>
            <h1 className="heading-xl text-balance">We Build The Future Of Creative Media With AI.</h1>
            <p className="body-lg mt-6 max-w-xl text-[#4f6084] dark:text-[#b5c0e1]">
              Premium storytelling systems for modern brands, games, and campaigns with editorial precision.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CinematicButton href="/services#contact" label="Start a Project" />
              <CinematicButton href="/about" label="View Our Work" variant="secondary" />
            </div>
            <div className="mt-10 inline-flex items-center gap-3 text-sm text-[#4f6084] dark:text-[#b5c0e1]">
              <span className="h-6 w-px bg-current/40" /> Scroll to explore
            </div>
          </div>

          <div className="relative grid gap-4">
            {cards.map((card, index) => (
              <motion.article
                key={card}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.55 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="cinematic-card relative rounded-[24px] p-6"
                style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
              >
                <div className="mb-5 h-28 rounded-2xl bg-gradient-to-br from-[#ff6b4a]/70 via-[#7c3aed]/60 to-[#00c2ff]/70" />
                <p className="text-xs uppercase tracking-[0.16em] text-[#4f6084] dark:text-[#b5c0e1]">Featured Capability</p>
                <h3 className="heading-md mt-3">{card}</h3>
              </motion.article>
            ))}
            <article className="absolute -bottom-6 left-8 rounded-2xl bg-white p-4 shadow-[0_24px_44px_-30px_rgba(6,27,77,0.8)] dark:bg-[#132a63]">
              <p className="text-xs text-[#4f6084] dark:text-[#b5c0e1]">Campaign Performance</p>
              <p className="text-2xl font-semibold">+248%</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
