"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  x: (i * 57) % 100,
  y: (i * 33) % 100,
  d: 3 + (i % 3),
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0.18, 0.45, 0.18], y: [0, -12, 0] }}
          transition={{
            duration: 6 + (particle.id % 5),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/70 dark:bg-white/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.d,
            height: particle.d,
          }}
        />
      ))}
    </div>
  );
}
