import { useState } from 'react';
import Button from './Button';

const links = [
  { href: '#portfolio', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#value', label: 'Value' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_78%,transparent)] shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.85)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_68%,transparent)]">
      <div className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-x-5 gap-y-4 px-4 py-4 sm:gap-x-7 sm:px-8 lg:gap-x-10 lg:gap-y-3 lg:px-12 xl:px-16">
        <a href="#" className="inline-flex shrink-0 py-0 leading-none transition-opacity hover:opacity-85">
          <img
            src="/dizzle-digital-logo.png"
            alt="Dizzle Digital"
            width={670}
            height={228}
            decoding="async"
            loading="eager"
            sizes="(max-width: 1024px) 56vw, 440px"
            className="block h-auto w-[clamp(11.5rem,58vmin,17rem)] max-w-[min(52vw,calc(100vw-8rem))] object-contain object-left sm:w-[clamp(13rem,48vmin,20rem)] md:w-[clamp(14rem,42vmin,22rem)] lg:w-[clamp(13rem,26vw,24rem)] xl:w-[clamp(15rem,22vw,28rem)] 2xl:w-[clamp(16rem,18vw,32rem)]"
          />
        </a>

        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-2 gap-y-2 sm:gap-x-3 lg:flex xl:flex-nowrap xl:gap-x-4">
          <nav className="flex flex-wrap items-center justify-end gap-x-1 gap-y-2 sm:gap-x-2 xl:flex-nowrap" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative border-b border-transparent px-3 py-2 text-[13px] font-medium text-[color:var(--color-dd-muted)] transition-colors hover:text-[color:var(--color-dd-text)]"
              >
                <span className="relative z-[1]">{l.label}</span>
                <span
                  className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-[color:var(--color-dd-accent)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          <div className="shrink-0 lg:pl-2 xl:pl-3">
            <Button variant="primary" href="#contact" className="!py-3 !text-[11px] !tracking-[0.2em] lg:!px-7 xl:!px-8">
              Start a project
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,white_70%,transparent)] p-3 text-[color:var(--color-dd-text)] shadow-sm backdrop-blur-md transition-colors hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_25%,transparent)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_94%,transparent)] px-4 py-6 backdrop-blur-2xl lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-[color:var(--color-dd-muted)] transition-colors hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_18%,transparent)] hover:bg-[color:var(--color-dd-cream)] hover:text-[color:var(--color-dd-text)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" href="#contact" className="mt-3 !py-3.5" onClick={() => setOpen(false)}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
}
