import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

const websiteFeatures = [
  'Custom design and build — from a focused starter landing page to a full premium business website.',
  'Copy shaped with an editorial eye — messaging that holds up next to competitors and sounds like you in the room, not template filler.',
  'Responsive layout, performance-minded delivery, and conversion-oriented structure.',
  'SEO groundwork, proof and trust signals, lead paths, and integrations as your scope requires.',
  'Everything you need for a polished launch; your investment scales openly with depth, assets, and complexity.',
];

const hostingFeatures = [
  'Managed hosting with SSL and dependable uptime.',
  'Security patches, backups, and monitoring so issues surface before visitors do.',
  'Performance checks and tune-ups to keep pages fast as the web evolves.',
  'Priority support and minor content updates — small copy, image, or section tweaks so the live site stays current while everything runs smoothly.',
];

function PricingFeatureList({
  items,
  variant,
}: {
  items: string[];
  variant: 'accent' | 'muted';
}) {
  const ringClass =
    variant === 'accent'
      ? 'border-[color:color-mix(in_srgb,var(--color-dd-accent)_40%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-accent-soft)_100%,transparent)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,white_55%,transparent)]'
      : 'border-[color:color-mix(in_srgb,var(--color-dd-champagne-mid)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-champagne-light)_42%,transparent)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,white_50%,transparent)]';
  const dotClass =
    variant === 'accent'
      ? 'bg-[color:var(--color-dd-accent)] shadow-[0_0_12px_-2px_color-mix(in_srgb,var(--color-dd-accent)_70%,transparent)]'
      : 'bg-[color:color-mix(in_srgb,var(--color-dd-champagne-mid)_88%,var(--color-dd-text))] shadow-[0_0_10px_-3px_color-mix(in_srgb,var(--color-dd-champagne-mid)_55%,transparent)]';

  return (
    <ul className="mt-12 flex-1 space-y-7 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] pt-12">
      {items.map((item) => (
        <li key={item} className="flex gap-[1.125rem]">
          <span
            className={`relative mt-[0.38em] flex h-[1.375rem] w-[1.375rem] shrink-0 items-center justify-center rounded-full border ${ringClass}`}
            aria-hidden
          >
            <span className={`h-[6px] w-[6px] shrink-0 rounded-full ${dotClass}`} />
          </span>
          <span
            className="min-w-0 text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
            style={{ fontWeight: 300 }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
            Build once.{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              Stay smooth after launch.
            </span>
          </h2>
          <p className="mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            One clear project fee for the site, plus optional ongoing care — scope and timeline are defined together before
            anything ships.
          </p>
          <p className="mt-8 max-w-2xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            When you already show up sharply in person, your site should meet that same standard — we craft a fast, legible
            experience that earns trust on first scan and leaves the next step unmistakable for every visitor.
          </p>
        </div>

        <div className="mt-32 grid gap-14 lg:mt-40 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <article
            className="reveal-on-scroll relative flex flex-col rounded-[length:var(--dd-radius-xl)] p-12 transition-[box-shadow,border-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] sm:p-14 glass-panel border-[color:color-mix(in_srgb,var(--color-dd-accent)_26%,transparent)] shadow-[0_36px_96px_-44px_color-mix(in_srgb,var(--color-dd-accent)_22%,transparent),0_12px_32px_-24px_rgba(42,40,37,0.08)] lg:z-[2]"
            style={{ '--reveal-delay': '0ms' } as CSSProperties}
          >
            <div className="absolute left-10 right-10 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-accent)_65%,transparent)] to-transparent" />
            <p className="mb-9 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-accent)]">
              One-time project fee
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.375rem,2vw,1.625rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">
              Website build
            </h3>
            <p className="mt-6 text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
              Starter landing page through premium business website — one engagement, scope-driven pricing.
            </p>
            <p className="mt-14">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
                Starting at
              </span>
              <span className="mt-3 block font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] text-[color:var(--color-dd-text)]">
                $1,500+
              </span>
            </p>
            <PricingFeatureList items={websiteFeatures} variant="accent" />
            <Button variant="primary" href="#contact" className="mt-14 w-full !py-4">
              Start your project
            </Button>
          </article>

          <article
            className="reveal-on-scroll relative flex flex-col rounded-[length:var(--dd-radius-xl)] p-12 transition-[box-shadow,border-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] sm:p-14 premium-card !rounded-[length:var(--dd-radius-xl)] !shadow-[0_28px_64px_-42px_rgba(42,40,37,0.12)] hover:!shadow-[0_36px_80px_-40px_rgba(42,40,37,0.14)]"
            style={{ '--reveal-delay': '95ms' } as CSSProperties}
          >
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
              aria-hidden
            />
            <p className="mb-9 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-muted)]">
              Ongoing
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.375rem,2vw,1.625rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">
              Hosting &amp; maintenance
            </h3>
            <p className="mt-6 text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
              Hands-on care after launch — we keep things fast, safe, and dependable while you run the business.
            </p>
            <p className="mt-14">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
                Per month
              </span>
              <span className="mt-3 block font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] text-[color:var(--color-dd-text)]">
                $75
              </span>
            </p>
            <PricingFeatureList items={hostingFeatures} variant="muted" />
            <Button variant="secondary" href="#contact" className="mt-14 w-full !py-4">
              Talk about care
            </Button>
          </article>
        </div>

        <p className="reveal-on-scroll mt-20 text-center text-sm font-light text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
          Final numbers always follow a scoped plan — you&apos;ll see the reasoning before you commit.
        </p>
      </div>
    </Section>
  );
}
