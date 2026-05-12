export function ContactSection() {
  return (
    <section className="page-shell section-space" id="contact">
      <div className="grid gap-8 rounded-[32px] border border-white/20 bg-white/55 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-[#081640]/72 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex h-full min-h-[280px] w-full flex-col justify-between rounded-[24px] bg-gradient-to-br from-[#ff6b4a]/22 via-[#ffffff] to-[#7c3aed]/22 p-6 dark:from-[#ff6b4a]/18 dark:via-[#0d1f52] dark:to-[#7c3aed]/25">
            <div>
              <p className="caption uppercase tracking-[0.2em] text-[#4f6084] dark:text-[#b5c0e1]">Get in touch</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight">Let&apos;s Build Something Amazing <span className="text-[#ff6b4a]">Together.</span></h3>
            </div>
            <p className="text-sm italic text-[#4f6084] dark:text-[#b5c0e1]">Great ideas deserve the right team behind them.</p>
          </div>
        </div>

        <div>
          <p className="caption uppercase tracking-[0.2em] text-[#4f6084] dark:text-[#b5c0e1]">Contact</p>
          <h2 className="heading-lg mt-4">Let&apos;s build your next cinematic campaign.</h2>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="btn-pill border border-white/30 bg-white/70 px-4 py-3 text-sm dark:bg-white/10" placeholder="Name" />
            <input className="btn-pill border border-white/30 bg-white/70 px-4 py-3 text-sm dark:bg-white/10" placeholder="Email" type="email" />
            <input className="btn-pill border border-white/30 bg-white/70 px-4 py-3 text-sm dark:bg-white/10 md:col-span-2" placeholder="Company" />
            <textarea className="rounded-[24px] border border-white/30 bg-white/70 px-4 py-3 text-sm dark:bg-white/10 md:col-span-2" placeholder="Project scope" rows={5} />
            <button type="submit" className="btn-pill bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed] px-6 py-3 text-sm font-semibold text-white md:col-span-2">
              Send Inquiry
            </button>
          </form>

          <div className="mt-8 grid gap-3 text-sm text-[#4f6084] dark:text-[#b5c0e1]">
            <p>Email: hello@sayhelloai.in</p>
            <p>Phone: +91 90000 12345</p>
            <p>Studio: Hyderabad, India</p>
            <p>Working Hours: Mon-Sat, 10:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
