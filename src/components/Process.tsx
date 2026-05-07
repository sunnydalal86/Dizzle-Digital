import Section from './Section';

const steps = [
  {
    phase: '01',
    title: 'Strategy',
    detail: 'Offer, audience, and goals—so every page earns its place.',
  },
  {
    phase: '02',
    title: 'Direction',
    detail: 'Structure, narrative, and visual direction aligned with how you win work.',
  },
  {
    phase: '03',
    title: 'Build',
    detail: 'Design execution, responsive refinement, and conversion paths tested on real devices.',
  },
  {
    phase: '04',
    title: 'Launch',
    detail: 'Domain, hosting, performance pass, handoff—and clear next steps.',
  },
];

export default function Process() {
  return (
    <Section id="process" className="scroll-mt-32 border-t border-stone-800/45 bg-[color:var(--color-dd-surface)] py-24 sm:scroll-mt-36 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="font-kicker">Process</p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
            Four phases. No theater.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Straightforward collaboration built for owners who want momentum.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-on-scroll relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(100%-1rem)] top-[3.25rem] z-0 hidden h-px w-[calc(100%+1.25rem)] bg-gradient-to-r from-[color:var(--color-dd-accent)]/65 via-stone-600/55 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="premium-card relative z-10 flex h-full flex-col p-8">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold tabular-nums text-stone-500">
                  {s.phase}
                </span>
                <h3 className="font-[family-name:var(--font-display)] mt-5 text-xl font-bold text-stone-50">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-400">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
