"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";

export function TeamSection() {
  return (
    <section className="page-shell section-space" id="team">
      <SectionHeading eyebrow="Team" title="Editorial profile cards with creative depth." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <motion.article
            key={member.name}
            whileHover={{ y: -4 }}
            className="cinematic-card overflow-hidden rounded-[24px] p-6"
          >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1f57] via-[#2747a1] to-[#8242c2]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority={false}
                />
              </div>
            <h3 className="mt-5 text-2xl font-semibold">{member.name}</h3>
            <p className="mt-2 text-sm text-[#ff6b4a]">{member.role}</p>
            <p className="mt-4 text-sm text-[#4f6084] dark:text-[#b5c0e1]">
              Built for execution quality, narrative depth, and production scalability across campaigns.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
