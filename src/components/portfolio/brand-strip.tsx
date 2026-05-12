"use client";

import { BRAND_STRIP } from "@/content/site";

export function BrandStrip() {
  return (
    <section className="page-shell pb-10">
      <div className="cinematic-card rounded-[20px] px-6 py-5 md:px-8">
        <div className="grid items-center gap-4 md:grid-cols-[1.2fr_5fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d89a8] dark:text-[#9fb1df]">Trusted by innovative brands</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {BRAND_STRIP.map((brand) => (
            <p
              key={brand}
              className="text-center text-sm font-semibold text-[#8c98b5] grayscale transition hover:grayscale-0 hover:text-[#061b4d] dark:text-[#9fb1df] dark:hover:text-white"
            >
              {brand}
            </p>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
