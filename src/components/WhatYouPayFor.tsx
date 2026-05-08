import Section from './Section';

const outcomes = [
  'A stronger first impression in seconds',
  'Confidence with discerning, comparison-shopping buyers',
  'Messaging that holds up next to competitors',
  'Mobile-first layouts that feel effortless',
  'Lead paths shaped around how you actually sell',
  'Fast launches without cutting corners on quality',
  'Clean, maintainable front-end work',
  'A site you are proud to send people to',
];

export default function WhatYouPayFor() {
  return (
    <Section
      id="value"
      className="dd-surface-grain relative scroll-mt-36 overflow-hidden sm:scroll-mt-40 py-36 sm:py-48 lg:py-[min(13rem,18vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[55%] max-w-2xl bg-[radial-gradient(circle_at_78%_28%,color-mix(in_srgb,var(--color-dd-champagne-light)_38%,transparent),transparent_72%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:items-start lg:gap-x-32 xl:gap-x-40 lg:gap-y-28">
          <div className="reveal-on-scroll max-w-xl">
            <p className="font-kicker text-[color:var(--color-dd-muted)]">Perspective</p>
            <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
              What You&apos;re{' '}
              <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
                Really Paying For
              </span>
            </h2>
            <p className="mt-12 text-[1.0625rem] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
              You are not buying decoration — you are investing in a sales asset built for short attention spans, reputational
              risk, and the moment prospects quietly compare you on their phone.
            </p>
          </div>

          <ul className="reveal-on-scroll grid gap-px overflow-hidden rounded-[length:var(--dd-radius-xl)] border border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] shadow-[0_40px_88px_-48px_rgba(42,40,37,0.16)] sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-5 bg-[color:var(--color-dd-elevated)] px-10 py-8 text-[15px] font-light text-[color:var(--color-dd-text)] transition-[background-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:bg-[color:var(--color-dd-accent-muted)]"
                style={{ fontWeight: 300 }}
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
