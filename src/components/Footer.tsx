export default function Footer() {
  return (
    <footer className="border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-bg)] pb-24 pt-20 sm:pb-28 sm:pt-24">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-20 px-4 sm:px-8 lg:flex-row lg:justify-between lg:gap-24 lg:px-12 xl:px-16">
        <div className="w-full max-w-xl">
          <img
            src="/dizzle-digital-logo.png"
            alt="Dizzle Digital"
            width={670}
            height={228}
            sizes="(max-width: 768px) 100vw, 420px"
            className="block h-auto w-full max-w-[min(22rem,100%)] object-contain object-left opacity-95"
          />
          <p className="mt-8 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-muted)]">
            Dizzle Digital, LLC
          </p>
          <p className="mt-5 max-w-sm text-sm font-light leading-[1.8] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            A founder-led studio for ambitious businesses — brand-grade websites with the discipline of a product team and
            the taste of a creative shop.
          </p>
        </div>
        <div className="grid gap-16 sm:grid-cols-2 sm:gap-24 lg:gap-32">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-muted)]">Navigate</p>
            <nav className="mt-8 flex flex-col gap-4 text-sm font-medium text-[color:color-mix(in_srgb,var(--color-dd-text)_72%,var(--color-dd-muted))]">
              <a href="#portfolio" className="transition-colors hover:text-[color:var(--color-dd-accent)]">
                Work
              </a>
              <a href="#services" className="transition-colors hover:text-[color:var(--color-dd-accent)]">
                Services
              </a>
              <a href="#value" className="transition-colors hover:text-[color:var(--color-dd-accent)]">
                Value
              </a>
              <a href="#pricing" className="transition-colors hover:text-[color:var(--color-dd-accent)]">
                Pricing
              </a>
              <a href="#contact" className="transition-colors hover:text-[color:var(--color-dd-accent)]">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-muted)]">Email</p>
            <a
              href="mailto:hello@dizzledigital.com"
              className="mt-8 inline-block text-sm font-semibold text-[color:var(--color-dd-accent)] tracking-wide transition-colors hover:text-[color:var(--color-dd-accent-hover)]"
            >
              hello@dizzledigital.com
            </a>
            <p className="mt-12 text-[13px] font-light text-[color:color-mix(in_srgb,var(--color-dd-muted)_95%,transparent)]">
              © {new Date().getFullYear()} Dizzle Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-20 max-w-[88rem] px-4 opacity-75 sm:px-8 lg:px-12 xl:px-16" aria-hidden>
        <div className="rule-accent" />
      </div>
    </footer>
  );
}
