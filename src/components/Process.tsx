import Section from './Section';

const steps = [
  {
    phase: '01',
    title: 'Strategy',
    detail:
      'We align on offer, buyer, and what success looks like — so every page has a deliberate job before design starts.',
  },
  {
    phase: '02',
    title: 'Direction',
    detail: 'Site structure and visual direction aligned with how customers actually choose you.',
  },
  {
    phase: '03',
    title: 'Build',
    detail: 'Design fidelity across screen sizes — validated on phones first, then refined for desktop.',
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
      className="dd-surface-grain scroll-mt-36 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-surface)] sm:scroll-mt-40 py-36 sm:py-48 lg:py-[min(13rem,18vw)]"
    >
      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll max-w-3xl">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Process</p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5.15vw,4.125rem)] font-semibold leading-[1.03] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
            A straightforward process. No drama.
          </h2>
          <p className="mt-10 max-w-xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Direct communication and clear milestones — built for owners who want progress, not vague retainers.
          </p>
        </div>

        <div className="mt-32 grid gap-10 sm:grid-cols-2 lg:mt-40 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-on-scroll relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(100%-0.75rem)] top-[3.25rem] z-0 hidden h-px w-[calc(100%+1rem)] bg-gradient-to-r from-[color:color-mix(in_srgb,var(--color-dd-accent)_38%,transparent)] via-black/12 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="premium-card relative z-10 flex h-full flex-col rounded-[length:var(--dd-radius-lg)] p-11 sm:p-11">
                <span className="font-[family-name:var(--font-display)] text-[0.8125rem] font-semibold tabular-nums tracking-[0.12em] text-[color:color-mix(in_srgb,var(--color-dd-muted)_88%,var(--color-dd-text))]">
                  {s.phase}
                </span>
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(1.25rem,1.9vw,1.375rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">{s.title}</h3>
                <p className="mt-6 text-[14px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
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
