import Link from "next/link";
import { NAV_ITEMS } from "@/content/site";

const socials = ["Instagram", "LinkedIn", "Behance", "X"];

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-gradient-to-br from-[#061b4d] via-[#0e2359] to-[#081640] text-white">
      <div className="page-shell py-20">
        <div className="mb-8 rounded-[28px] border border-white/15 bg-white/8 p-8">
          <p className="caption uppercase tracking-[0.2em] text-blue-100/70">Ready To Create Something Extraordinary?</p>
          <h3 className="mt-3 text-4xl font-semibold">Let&apos;s Build Your <span className="text-[#ff6b4a]">Next Big Story.</span></h3>
        </div>
        <div className="cinematic-container grid gap-10 rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h3 className="heading-md">SAYHELLOAI</h3>
            <p className="mt-4 max-w-md text-sm text-blue-100/80">
              Cinematic AI creative agency building high-end storytelling systems for bold brands.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-blue-100/70">Navigation</h4>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-blue-100/70">Stay in loop</h4>
            <form className="mt-4 flex gap-3">
              <input
                type="email"
                placeholder="you@sayhelloai.in"
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm outline-none placeholder:text-blue-100/55"
              />
              <button
                type="submit"
                className="btn-pill bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed] px-5 py-2 text-sm font-semibold"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-blue-100/70">
          <p>© {new Date().getFullYear()} SayHelloAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <Link key={social} href="#" className="transition hover:text-white">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
