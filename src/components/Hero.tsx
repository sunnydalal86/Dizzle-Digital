import type { ReactNode } from 'react';
import Button from './Button';
import RevealGroup from './RevealGroup';

export default function Hero() {
  return (
    <RevealGroup className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32 gradient-mesh">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] h-[480px] w-[480px] rounded-full bg-sky-500/10 blur-[100px] animate-glow-bg"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[90px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.05fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="reveal-on-scroll text-sm font-medium tracking-wide text-sky-400/90">
              Dizzle Digital — hand-crafted websites for locals
            </p>
            <h1 className="font-[family-name:var(--font-display)] mt-5 text-[2.15rem] font-bold leading-[1.08] tracking-tight text-neutral-50 sm:text-5xl lg:text-[3.35rem] reveal-on-scroll">
              Let&apos;s build you a site you&apos;re excited to send people to.
            </h1>
            <p className="reveal-on-scroll mt-6 text-lg font-normal leading-relaxed text-neutral-400 sm:text-xl">
              No jargon parade—just clear storytelling, solid design, fast pages, and structure that makes it easy
              for people to actually hire you. Think barber colleges, remodel crews, GPR specialists—the folks who
              deserve to look as good online as they do on the job.
            </p>
            <p className="reveal-on-scroll mt-4 border-l-2 border-amber-400/40 pl-4 text-sm leading-snug text-neutral-400">
              If your site feels embarrassing to share, we fix that. Then we aim it at calls, forms, and quote
              requests—not vanity metrics.
            </p>
            <div className="reveal-on-scroll mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" href="#contact" className="w-full sm:w-auto">
                Start a project
              </Button>
              <Button variant="secondary" href="#portfolio" className="w-full sm:w-auto">
                Peek at the work
              </Button>
            </div>
            <p className="reveal-on-scroll mt-8 text-sm text-neutral-500">
              Contractors, schools, technical crews, consultants—if you serve your city, you&apos;re our people.
            </p>
          </div>

          <HeroVisual />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px glow-line opacity-70" aria-hidden />
    </RevealGroup>
  );
}

function HeroVisual() {
  return (
    <div className="reveal-on-scroll relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end">
      <div
        aria-hidden
        className="absolute inset-[-8%] rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/15 blur-xl"
      />

      {/* Back card */}
      <div className="animate-float-delayed absolute right-[-4%] top-[8%] z-10 hidden w-[72%] sm:block">
        <BrowserFrame title="premiumbarbercollege.com">
          <div className="h-32 rounded-b-lg bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 p-3">
            <div className="mb-2 h-2 w-1/3 rounded bg-white/15" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-white/[0.08]" />
              <div className="h-2 w-4/5 rounded bg-white/[0.06]" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-md bg-sky-500/10 ring-1 ring-sky-400/30" />
                <div className="h-16 rounded-md bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>

      {/* Front card */}
      <div className="animate-float relative z-20 w-full sm:w-[92%]">
        <BrowserFrame title="yourbusiness.com">
          <div className="rounded-b-lg bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">
                  Featured
                </div>
                <div className="font-[family-name:var(--font-display)] mt-1 text-xl font-bold text-white sm:text-2xl">
                  Look legit on day one.
                </div>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-neutral-500">
                  Words, layout, and proof that answer “why you?” before they bounce.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-sky-400/15 px-2.5 py-1 text-[10px] font-semibold text-sky-300 ring-1 ring-sky-400/35">
                New
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-14 rounded-lg ${
                    i === 2
                      ? 'bg-gradient-to-br from-sky-500/40 to-blue-700/35 ring-1 ring-sky-400/35'
                      : 'bg-white/[0.06]'
                  }`}
                />
              ))}
            </div>
          </div>
        </BrowserFrame>
      </div>

      {/* Floating badges */}
      <div className="animate-float-delayed absolute -bottom-6 left-0 z-30 flex gap-3 sm:left-[-4%]">
        <FloatingPill label="Phone-friendly" />
        <FloatingPill label="Ships fast" highlight />
      </div>
    </div>
  );
}

function BrowserFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-neutral-950/80 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)_inset] ring-1 ring-white/[0.06] backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-neutral-900/80 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
        </div>
        <div className="mx-auto flex min-w-0 flex-1 items-center justify-center">
          <span className="truncate rounded-md bg-black/40 px-3 py-1 text-[10px] font-medium text-neutral-500 ring-1 ring-white/[0.06]">
            {title}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

function FloatingPill({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide shadow-lg backdrop-blur-md ${
        highlight
          ? 'border border-sky-400/35 bg-sky-500/15 text-sky-100'
          : 'border border-white/10 bg-neutral-900/90 text-neutral-300'
      }`}
    >
      {label}
    </span>
  );
}
