"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/content/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { CinematicButton } from "@/components/shared/cinematic-button";

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-4 md:px-[90px] xl:px-[120px]">
      <div className="cinematic-container gradient-border mx-auto flex h-18 max-w-[1440px] items-center justify-between border border-white/20 bg-white/60 px-4 backdrop-blur-2xl dark:border-white/10 dark:bg-[#081640]/70 md:px-6">
        <Link href="/" className="font-[var(--font-clash)] text-2xl font-bold tracking-tight">
          SayHello<span className="text-[#ff6b4a]">Ai</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-[#4f6084] transition hover:text-[#061b4d] dark:text-[#b5c0e1] dark:hover:text-white"
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed]"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <CinematicButton href="/services#contact" label="Start a Project" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
