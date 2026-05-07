export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950/90 pb-16 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-white">Dizzle Digital, LLC</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
            Small-studio energy: hand-crafted sites, sensible timelines, and launches that don&apos;t feel like a root
            canal.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-wide text-neutral-600">Navigate</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
              <a href="#portfolio" className="hover:text-white">
                Portfolio
              </a>
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#packages" className="hover:text-white">
                Packages
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-neutral-600">Connect</p>
            <a
              href="mailto:hello@dizzledigital.com"
              className="mt-4 block text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              hello@dizzledigital.com
            </a>
            <p className="mt-4 text-xs text-neutral-600">© {new Date().getFullYear()} Dizzle Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-12 h-px max-w-6xl glow-line opacity-50" aria-hidden />
    </footer>
  );
}
