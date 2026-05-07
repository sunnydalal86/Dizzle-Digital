import Section from './Section';

const steps = [
  {
    phase: '01',
    title: 'Strategy',
    detail: 'Offer, buyer, ambition — pages earn their placement on purpose.',
  },
  {
    phase: '02',
    title: 'Direction',
    detail: 'Information architecture + visual language calibrated to how you actually win.',
  },
  {
    phase: '03',
    title: 'Build',
    detail: 'Design fidelity, breakpoints, choreography — validated on phones first.',
  },
  {
    phase: '04',
    title: 'Launch',
    detail: 'Domain, SSL, polish, handoff — with clear paths for iteration post-live.',
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      className="scroll-mt-32 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-surface)] py-28 sm:scroll-mt-36 sm:py-40 lg:py-44"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll max-w-3xl">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Process</p>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
            Four phases. Zero theatre.
          </h2>
          <p className="mt-8 max-w-xl text-lg font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            Momentum-forward collaboration built for founders who dislike vague retainers.
          </p>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-on-scroll relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(100%-0.875rem)] top-[3rem] z-0 hidden h-px w-[calc(100%+1.125rem)] bg-gradient-to-r from-[color:var(--color-dd-accent)]/45 via-black/14 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="premium-card relative z-10 flex h-full flex-col p-10 sm:p-10">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold tabular-nums text-[color:var(--color-dd-muted)]">
                  {s.phase}
                </span>
                <h3 className="font-[family-name:var(--font-display)] mt-6 text-xl font-semibold text-[color:var(--color-dd-text)]">{s.title}</h3>
                <p className="mt-5 text-sm font-light leading-[1.8] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
