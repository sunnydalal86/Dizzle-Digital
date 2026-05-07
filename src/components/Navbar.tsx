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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-700/55 bg-[color:color-mix(in_srgb,var(--color-dd-bg)_82%,transparent)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--color-dd-bg)_76%,transparent)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-4 px-4 py-3.5 sm:gap-x-7 sm:px-6 sm:py-4 lg:gap-x-10 lg:gap-y-3 lg:px-8 lg:py-5">
        <a href="#" className="inline-flex shrink-0 py-0 leading-none">
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
                className="border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-stone-400 transition-colors hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_65%,transparent)] hover:text-stone-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0 lg:pl-2 xl:pl-3">
            <Button variant="primary" href="#contact" className="!py-3 !px-6 !text-sm xl:!px-7 xl:!text-[15px]">
              Start a Project
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 rounded-lg border border-stone-700/55 bg-[color:color-mix(in_srgb,var(--color-dd-elevated)_55%,transparent)] p-2.5 text-stone-200 lg:hidden"
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
        className={`border-t border-stone-700/55 bg-[color:color-mix(in_srgb,var(--color-dd-bg)_94%,transparent)] px-4 py-4 backdrop-blur-xl lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg border-l-2 border-transparent px-3 py-3 text-sm font-medium text-stone-300 transition-colors hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_55%,transparent)] hover:bg-white/[0.04] hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" href="#contact" className="mt-2 !py-3" onClick={() => setOpen(false)}>
            Start a Project
          </Button>
        </nav>
      </div>
    </header>
  );
}
