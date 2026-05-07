import { useState } from 'react';
import Button from './Button';

const links = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#packages', label: 'Packages' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-white">
              D<span className="text-sky-400">.</span>
            </span>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-neutral-50 sm:text-base">
              Dizzle Digital
            </span>
            <span className="hidden text-[11px] font-medium text-neutral-500 sm:block">
              Websites without the corporate stiffness
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" href="#contact" className="!py-2.5 !text-sm">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-200 md:hidden"
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
        className={`border-t border-white/[0.06] bg-neutral-950/95 px-4 py-4 backdrop-blur-xl md:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" href="#contact" className="mt-2 !py-3" onClick={() => setOpen(false)}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
}
