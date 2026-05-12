"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="btn-pill theme-fade relative inline-flex h-11 w-20 items-center border border-white/25 bg-white/60 p-1 backdrop-blur-xl dark:border-white/15 dark:bg-white/5"
      type="button"
      disabled={!mounted}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="absolute left-1 top-1 h-9 w-9 rounded-full bg-gradient-to-br from-[#ff6b4a] to-[#7c3aed]"
        style={{ x: isDark ? 36 : 0 }}
      />
      <span className="relative z-10 flex w-full justify-between px-2 text-white">
        <Sun className="h-4 w-4" />
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
