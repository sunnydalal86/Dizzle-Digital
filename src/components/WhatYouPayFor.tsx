import Section from './Section';

const outcomes = [
  'A sharper first impression',
  'Confidence with discerning buyers',
  'Messaging that survives comparison',
  'Mobile-first choreography',
  'Lead paths shaped like your sales motion',
  'Launch velocity without sacrificing finish',
  'Lean, adaptable front-end craftsmanship',
  'A flagship you’re honored to forward',
];

export default function WhatYouPayFor() {
  return (
    <Section
      id="value"
      className="relative scroll-mt-32 overflow-hidden py-28 sm:scroll-mt-36 sm:py-40 lg:py-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_80%_30%,rgba(237,229,217,0.45),transparent_68%)]" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-x-28 lg:gap-y-24">
          <div className="reveal-on-scroll max-w-xl">
            <p className="font-kicker text-[color:var(--color-dd-muted)]">Perspective</p>
            <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.9vw,3.85rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
              What You&apos;re{' '}
              <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
                Really Paying For
              </span>
            </h2>
            <p className="mt-10 text-lg font-light leading-[1.8] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
              Beyond decoration — a commercial asset calibrated for attention spans, reputational risk, and the moment prospects
              cross-shop you quietly on their phones.
            </p>
          </div>

          <ul className="reveal-on-scroll grid gap-px overflow-hidden rounded-[1.5rem] border border-[color:color-mix(in_srgb,var(--color-dd-border)_120%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] shadow-[0_36px_80px_-52px_rgba(42,40,37,0.22)] sm:grid-cols-2">
            {outcomes.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-5 bg-[color:var(--color-dd-elevated)] px-9 py-7 text-[15px] font-light text-[color:var(--color-dd-text)] transition-colors duration-300 hover:bg-[color:var(--color-dd-accent-muted)]"
                style={{ fontWeight: 300, transitionDelay: `${i * 18}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-dd-accent)]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
