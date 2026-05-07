import Section from './Section';

const steps = [
  {
    phase: '01',
    title: 'Discover',
    detail: 'Coffee-chat vibes: goals, services, dream customers, what “winning” means.',
  },
  {
    phase: '02',
    title: 'Design',
    detail: 'Layout and visuals that feel like you—and steer visitors toward contacting you.',
  },
  {
    phase: '03',
    title: 'Build',
    detail: 'Fast pages, responsive polish, and the details that make it feel finished.',
  },
  {
    phase: '04',
    title: 'Launch',
    detail: 'Domain hooked up, HTTPS on, tested on real phones—we celebrate, then support.',
  },
];

export default function Process() {
  return (
    <Section id="process" className="scroll-mt-28 border-t border-white/[0.05] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-sky-400/90">How it goes</p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Simple phases. Zero mystery.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 lg:text-lg">
            You&apos;ll always know what&apos;s happening next—no ghosting, no endless meetings for the sake of meetings.
            Built for owners who want progress you can feel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-on-scroll relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(100%-0.75rem)] top-12 z-0 hidden h-px w-[calc(100%+1rem)] bg-gradient-to-r from-sky-500/40 via-white/15 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-full flex-col rounded-2xl border border-white/[0.08] bg-neutral-950/70 p-6 transition-colors duration-300 hover:border-sky-400/35">
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-white/10">
                  {s.phase}
                </span>
                <h3 className="font-[family-name:var(--font-display)] mt-3 text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
