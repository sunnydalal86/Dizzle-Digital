export default function Footer() {
  return (
    <footer className="border-t border-stone-700/50 bg-[color:var(--color-dd-bg)] pb-20 pt-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="w-full max-w-5xl">
          <img
            src="/dizzle-digital-logo.png"
            alt="Dizzle Digital"
            width={670}
            height={228}
            sizes="(max-width: 768px) 100vw, 560px"
            className="block h-auto w-full max-w-[min(40rem,100%)] object-contain object-left opacity-95 sm:max-w-[min(44rem,90vw)] lg:max-w-[min(48rem,85vw)]"
          />
          <p className="font-[family-name:var(--font-display)] mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
            Dizzle Digital, LLC
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-500">
            A founder-led studio partnering with local service businesses on websites built to convert.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600">Navigate</p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-stone-400">
              <a href="#portfolio" className="transition-colors hover:text-stone-100">
                Work
              </a>
              <a href="#services" className="transition-colors hover:text-stone-100">
                Services
              </a>
              <a href="#value" className="transition-colors hover:text-stone-100">
                Value
              </a>
              <a href="#pricing" className="transition-colors hover:text-stone-100">
                Pricing
              </a>
              <a href="#contact" className="transition-colors hover:text-stone-100">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600">Email</p>
            <a
              href="mailto:hello@dizzledigital.com"
              className="mt-5 block text-sm font-medium text-[color:var(--color-dd-accent)] hover:text-[color:var(--color-dd-accent-hover)]"
            >
              hello@dizzledigital.com
            </a>
            <p className="mt-8 text-xs text-stone-600">© {new Date().getFullYear()} Dizzle Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-14 h-px max-w-6xl rule-accent opacity-60" aria-hidden />
    </footer>
  );
}
