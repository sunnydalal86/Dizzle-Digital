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
      className="scroll-mt-32 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] py-28 sm:scroll-mt-36 sm:py-40 lg:py-44"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll max-w-3xl">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Investment</p>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
            Clear anchors.{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              Serious craft.
            </span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            Ballpark entry points — final scope reflects content depth, integrations, and timeline; we define that openly
            before pixels ship.
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:mt-28 lg:grid-cols-3 lg:gap-10">
          {tiers.map((tier, idx) => (
            <article
              key={tier.name}
              className={`reveal-on-scroll relative flex flex-col rounded-[1.65rem] p-12 transition-all duration-500 sm:p-12 ${
                tier.highlight
                  ? 'glass-panel lg:scale-[1.02] scale-100 border-[color:color-mix(in_srgb,var(--color-dd-accent)_32%,transparent)] shadow-[0_40px_100px_-40px_color-mix(in_srgb,var(--color-dd-accent)_28%,transparent),0_0_0_1px_rgba(255,255,255,0.5)_inset] lg:z-[2]'
                  : 'premium-card !shadow-[0_24px_60px_-40px_rgba(42,40,37,0.14)] hover:!shadow-[0_32px_80px_-40px_rgba(42,40,37,0.18)]'
              }`}
              style={{ '--reveal-delay': `${idx * 110}ms` } as CSSProperties}
            >
              {!tier.highlight && (
                <div
                  className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
                  aria-hidden
                />
              )}
              {tier.highlight && (
                <div className="absolute left-10 right-10 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[color:var(--color-dd-accent)]/70 to-transparent" />
              )}
              {tier.highlight && (
                <p className="mb-8 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-accent)]">
                  Studio favorite
                </p>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--color-dd-text)]">
                {tier.name}
              </h3>
              <p className="mt-12">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--color-dd-muted)]">
                  {tier.label}
                </span>
                <span className="mt-3 block font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-[color:var(--color-dd-text)] sm:text-[3.25rem]">
                  {tier.price}
                </span>
              </p>
              <ul className="mt-10 flex-1 space-y-5 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] pt-10">
                {tier.bullets.map((b) => (
                  <li key={b} className="font-light leading-[1.8] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? 'primary' : 'secondary'} href="#contact" className="mt-12 w-full !py-4">
                Start a project
              </Button>
            </article>
          ))}
        </div>

        <p className="reveal-on-scroll mt-16 text-center text-sm font-light text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
          Scope adjusts with copy, assets, and technical complexity — you’ll always see the reasoning.
        </p>
      </div>
    </Section>
  );
}
