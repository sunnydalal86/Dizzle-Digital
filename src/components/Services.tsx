import type { CSSProperties } from 'react';
import Section from './Section';

const services = [
  {
    title: 'Conversion-focused websites',
    outcome:
      'Visitors land with a sharp read on your offer, see why you are the credible choice, and move to inquiry or booking — not bounce after a skim.',
  },
  {
    title: 'Local business positioning',
    outcome:
      'Your business reads as the obvious option for people hiring in your area: clear relevance, trustworthy proof, and a story that stacks up next to competitors.',
  },
  {
    title: 'Premium visual identity',
    outcome:
      'Prospects feel caliber before they read a full sentence — a cohesive look that earns trust fast and separates you from template-and-font-pair energy.',
  },
  {
    title: 'Mobile optimization',
    outcome:
      'Most of your traffic holds a phone: fast loads, readable type, and friction-free navigation so you are not losing leads to pinch-zoom or slow pages.',
  },
  {
    title: 'Lead generation systems',
    outcome:
      'Qualified inquiries land in your inbox with context — page flow, calls-to-action, and follow-up paths aligned with how serious clients actually decide.',
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      className="dd-surface-grain scroll-mt-36 border-y border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-surface)] sm:scroll-mt-40 py-36 sm:py-48 lg:py-[min(13rem,18vw)]"
    >
      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Outcomes</p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5.35vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
            What changes for your business,{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              explained without jargon.
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            We sell outcomes — credibility, clarity, and inquiries that respect your time — not a checklist of deliverables.
          </p>
        </div>

        <div className="mt-32 grid grid-cols-1 items-stretch justify-items-stretch gap-9 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal-on-scroll premium-card group relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[length:var(--dd-radius-lg)] p-11 sm:p-12"
              style={{ '--reveal-delay': `${(i % 3) * 75}ms` } as CSSProperties}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent)_10%,transparent),transparent)] opacity-90 transition-transform duration-[720ms] [transition-timing-function:var(--dd-motion-smooth)] group-hover:scale-105"
                aria-hidden
              />
              <div className="relative flex min-h-0 flex-1 flex-col">
                <div className="h-px w-14 shrink-0 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--color-dd-accent)_72%,transparent)] to-transparent" />
                <h3 className="mt-9 min-h-[2.65em] text-balance font-[family-name:var(--font-display)] text-[clamp(1.375rem,2.1vw,1.625rem)] font-semibold leading-snug tracking-[-0.018em] text-[color:var(--color-dd-text)]">
                  {s.title}
                </h3>
                <p
                  className="mt-7 flex-1 text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
                  style={{ fontWeight: 300 }}
                >
                  {s.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
