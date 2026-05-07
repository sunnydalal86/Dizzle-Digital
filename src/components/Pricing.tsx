import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

const tiers = [
  {
    name: 'Starter Site',
    price: '$1,500',
    label: 'Starting at',
    bullets: ['Ideal when credibility needs to land fast — a refined single-page or compact multi-section build.'],
    highlight: false,
  },
  {
    name: 'Business Website',
    price: '$2,500',
    label: 'Starting at',
    bullets: ['The standard for standout service brands: services, proof, SEO groundwork, and lead paths built to convert.'],
    highlight: true,
  },
  {
    name: 'Premium Build',
    price: '$4,000',
    label: 'Starting at',
    bullets: ['For brands raising the bar — bespoke pacing, cinematic galleries, and a flagship finish end to end.'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      className="dd-surface-grain scroll-mt-36 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] sm:scroll-mt-40 py-36 sm:py-48 lg:py-[min(13rem,18vw)]"
    >
      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll max-w-3xl">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Investment</p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5.15vw,4.125rem)] font-semibold leading-[1.03] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
            Clear anchors.{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              Serious craft.
            </span>
          </h2>
          <p className="mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Ballpark entry points — final scope reflects content depth, integrations, and timeline; we define that openly
            before pixels ship.
          </p>
        </div>

        <div className="mt-32 grid gap-14 lg:mt-40 lg:grid-cols-3 lg:gap-10">
          {tiers.map((tier, idx) => (
            <article
              key={tier.name}
              className={`reveal-on-scroll relative flex flex-col rounded-[length:var(--dd-radius-xl)] p-12 transition-[box-shadow,border-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] sm:p-14 ${
                tier.highlight
                  ? 'glass-panel border-[color:color-mix(in_srgb,var(--color-dd-accent)_26%,transparent)] shadow-[0_36px_96px_-44px_color-mix(in_srgb,var(--color-dd-accent)_22%,transparent),0_12px_32px_-24px_rgba(42,40,37,0.08)] lg:z-[2]'
                  : 'premium-card !rounded-[length:var(--dd-radius-xl)] !shadow-[0_28px_64px_-42px_rgba(42,40,37,0.12)] hover:!shadow-[0_36px_80px_-40px_rgba(42,40,37,0.14)]'
              }`}
              style={{ '--reveal-delay': `${idx * 95}ms` } as CSSProperties}
            >
              {!tier.highlight && (
                <div
                  className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
                  aria-hidden
                />
              )}
              {tier.highlight && (
                <div className="absolute left-10 right-10 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-accent)_65%,transparent)] to-transparent" />
              )}
              {tier.highlight && (
                <p className="mb-9 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-accent)]">
                  Studio favorite
                </p>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.375rem,2vw,1.625rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">
                {tier.name}
              </h3>
              <p className="mt-14">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
                  {tier.label}
                </span>
                <span className="mt-3 block font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] text-[color:var(--color-dd-text)]">
                  {tier.price}
                </span>
              </p>
              <ul className="mt-12 flex-1 space-y-6 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] pt-12">
                {tier.bullets.map((b) => (
                  <li key={b} className="text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? 'primary' : 'secondary'} href="#contact" className="mt-14 w-full !py-4">
                Start a project
              </Button>
            </article>
          ))}
        </div>

        <p className="reveal-on-scroll mt-20 text-center text-sm font-light text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
          Scope adjusts with copy, assets, and technical complexity — you’ll always see the reasoning.
        </p>
      </div>
    </Section>
  );
}
