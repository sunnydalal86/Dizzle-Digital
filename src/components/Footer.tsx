export default function Footer() {
  return (
    <footer className="border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-bg)] pb-28 pt-24 sm:pb-36 sm:pt-28">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-24 px-4 sm:px-8 lg:flex-row lg:justify-between lg:gap-28 lg:px-12 xl:gap-36 xl:px-16">
        <div className="w-full max-w-xl">
          <img
            src="/dizzle-digital-logo.png"
            alt="Dizzle Digital"
            width={670}
            height={228}
            sizes="(max-width: 768px) 100vw, 420px"
            className="block h-auto w-full max-w-[min(22rem,100%)] object-contain object-left opacity-95"
          />
          <p className="mt-10 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-muted)]">
            Dizzle Digital, LLC
          </p>
          <p className="mt-6 max-w-sm text-sm font-light leading-[1.82] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            A founder-led studio for growing businesses — premium websites with clear strategy, reliable delivery, and design
            you are happy to stand behind.
          </p>
        </div>
        <div className="grid gap-20 sm:grid-cols-2 sm:gap-28 lg:gap-36">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-muted)]">Navigate</p>
            <nav className="mt-10 flex flex-col gap-5 text-sm font-medium text-[color:color-mix(in_srgb,var(--color-dd-text)_72%,var(--color-dd-muted))]">
              <a href="#portfolio" className="transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent)]">
                Work
              </a>
              <a href="#services" className="transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent)]">
                Services
              </a>
              <a href="#value" className="transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent)]">
                Value
              </a>
              <a href="#pricing" className="transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent)]">
                Pricing
              </a>
              <a href="#contact" className="transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent)]">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-muted)]">Email</p>
            <a
              href="mailto:hello@dizzledigital.com"
              className="mt-10 inline-block text-sm font-semibold tracking-wide text-[color:var(--color-dd-accent)] transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:text-[color:var(--color-dd-accent-hover)]"
            >
              hello@dizzledigital.com
            </a>
            <p className="mt-14 text-[13px] font-light text-[color:color-mix(in_srgb,var(--color-dd-muted)_92%,transparent)]">
              © {new Date().getFullYear()} Dizzle Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-24 max-w-[88rem] px-4 opacity-70 sm:px-8 lg:px-12 xl:px-16" aria-hidden>
        <div className="rule-accent" />
      </div>
    </footer>
  );
}
