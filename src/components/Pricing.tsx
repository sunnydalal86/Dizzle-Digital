import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

type PricingPackage = {
  kicker: string;
  title: string;
  priceLabel?: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  revealDelay: string;
};

const packages: PricingPackage[] = [
  {
    kicker: 'Website package',
    title: 'Starter Website',
    priceLabel: 'Starting at',
    price: '$750',
    description:
      'A professional one-page website designed to generate leads and establish credibility.',
    features: [
      'Custom responsive design',
      'Mobile optimized',
      'Contact form integration',
      'Basic SEO setup',
      'Fast performance',
      'Professional copy guidance',
    ],
    cta: 'Get Started',
    revealDelay: '0ms',
  },
  {
    kicker: 'Most popular',
    title: 'Business Website',
    priceLabel: 'Starting at',
    price: '$1,500',
    description:
      'A custom multi-page website built to showcase your services, portfolio, and business story.',
    features: [
      'Everything in Starter Website',
      'Multiple custom pages',
      'Portfolio / gallery sections',
      'Advanced SEO structure',
      'Custom branding implementation',
      'Enhanced lead generation strategy',
    ],
    cta: 'Request Proposal',
    featured: true,
    revealDelay: '75ms',
  },
  {
    kicker: 'Custom scope',
    title: 'Premium / Custom Project',
    price: 'Custom Proposal',
    description:
      'Advanced functionality, integrations, booking systems, member portals, e-commerce, and custom requirements.',
    features: [
      'Custom web applications',
      'Booking & scheduling systems',
      'E-commerce functionality',
      'CRM & third-party integrations',
      'Membership portals',
      'Tailored project scoping',
    ],
    cta: 'Schedule Consultation',
    revealDelay: '150ms',
  },
];

const hostingFeatures = [
  'Secure hosting',
  'Routine website updates',
  'Performance monitoring',
  'Technical support',
  'Security maintenance',
  'Ongoing reliability and uptime',
];

function PricingFeatureList({
  items,
  variant,
  compact,
}: {
  items: string[];
  variant: 'accent' | 'muted';
  compact?: boolean;
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
    <ul
      className={`flex-1 border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] ${compact ? 'mt-10 space-y-5 pt-10 sm:mt-12 sm:space-y-6 sm:pt-12' : 'mt-10 space-y-6 pt-10 sm:mt-12 sm:space-y-7 sm:pt-12'}`}
    >
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

function PricingCard({ pkg }: { pkg: PricingPackage }) {
  const isFeatured = pkg.featured === true;

  return (
    <article
      className={`reveal-on-scroll relative flex flex-col rounded-[length:var(--dd-radius-xl)] p-10 transition-[box-shadow,border-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] sm:p-12 lg:p-11 xl:p-12 ${
        isFeatured
          ? 'glass-panel border-[color:color-mix(in_srgb,var(--color-dd-accent)_26%,transparent)] shadow-[0_36px_96px_-44px_color-mix(in_srgb,var(--color-dd-accent)_22%,transparent),0_12px_32px_-24px_rgba(42,40,37,0.08)] lg:z-[2] lg:-translate-y-2'
          : 'premium-card !rounded-[length:var(--dd-radius-xl)] !shadow-[0_28px_64px_-42px_rgba(42,40,37,0.12)] hover:!shadow-[0_36px_80px_-40px_rgba(42,40,37,0.14)]'
      }`}
      style={{ '--reveal-delay': pkg.revealDelay } as CSSProperties}
    >
      {isFeatured ? (
        <div className="absolute left-10 right-10 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-accent)_65%,transparent)] to-transparent" />
      ) : (
        <div
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
          aria-hidden
        />
      )}
      <p
        className={`mb-8 font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] sm:mb-9 ${
          isFeatured ? 'text-[color:var(--color-dd-accent)]' : 'text-[color:var(--color-dd-muted)]'
        }`}
      >
        {pkg.kicker}
      </p>
      <h3 className="min-h-[2.65em] text-balance font-[family-name:var(--font-display)] text-[clamp(1.375rem,2vw,1.625rem)] font-semibold leading-snug tracking-[-0.018em] text-[color:var(--color-dd-text)]">
        {pkg.title}
      </h3>
      <p
        className="mt-5 min-h-[5.34em] text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))] sm:mt-6"
        style={{ fontWeight: 300 }}
      >
        {pkg.description}
      </p>
      <div className="mt-10 min-h-[5.75rem] sm:mt-12">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
          {pkg.priceLabel ?? '\u00A0'}
        </span>
        <span
          className={`mt-3 block font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-dd-text)] ${
            pkg.price === 'Custom Proposal'
              ? 'text-[clamp(1.875rem,2.65vw,2.375rem)] leading-[1.12]'
              : 'text-[clamp(2.75rem,4.5vw,3.25rem)] leading-none'
          }`}
        >
          {pkg.price}
        </span>
      </div>
      <PricingFeatureList items={pkg.features} variant={isFeatured ? 'accent' : 'muted'} />
      <Button
        variant={isFeatured ? 'primary' : 'secondary'}
        href="#contact"
        className="mt-10 w-full !py-4 sm:mt-12 lg:mt-14"
      >
        {pkg.cta}
      </Button>
    </article>
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
          <p
            className="mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
            style={{ fontWeight: 300 }}
          >
            Three clear paths — from a focused starter site to fully custom builds — each scoped to your goals, audience,
            and growth stage.
          </p>
          <p
            className="mt-8 max-w-2xl text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
            style={{ fontWeight: 300 }}
          >
            When you already show up sharply in person, your site should meet that same standard — crafted to earn trust on
            first scan and make the next step unmistakable for every visitor.
          </p>
        </div>

        <div className="mt-32 grid grid-cols-1 items-stretch gap-10 sm:gap-12 lg:mt-40 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-10">
          {packages.map((pkg) => (
            <PricingCard key={pkg.title} pkg={pkg} />
          ))}
        </div>

        <p
          className="reveal-on-scroll mt-16 text-center text-sm font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))] sm:mt-20"
          style={{ fontWeight: 300, '--reveal-delay': '200ms' } as CSSProperties}
        >
          Every project is customized to your goals and requirements. Final pricing is provided through a tailored
          proposal.
        </p>

        <article
          className="reveal-on-scroll relative mt-20 overflow-hidden rounded-[length:var(--dd-radius-xl)] border border-[color:color-mix(in_srgb,var(--color-dd-accent)_18%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_78%,transparent)] p-10 shadow-[0_36px_88px_-48px_color-mix(in_srgb,var(--color-dd-accent)_16%,transparent),0_12px_32px_-24px_rgba(42,40,37,0.08)] backdrop-blur-[var(--dd-blur-panel)] sm:mt-24 sm:p-12 lg:mt-28 lg:p-14"
          style={{ '--reveal-delay': '240ms' } as CSSProperties}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-accent)_55%,transparent)] to-transparent"
            aria-hidden
          />
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-x-16 xl:gap-x-20">
            <div>
              <p className="font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-dd-accent)]">
                Ongoing partnership
              </p>
              <h3 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,1.875rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">
                Ongoing Hosting &amp; Maintenance
              </h3>
              <p
                className="mt-6 max-w-md text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
                style={{ fontWeight: 300 }}
              >
                A dependable partnership after launch — we keep your site secure, current, and performing, with routine
                website updates when you need them, while you focus on running the business. Available with any website
                package.
              </p>
              <p className="mt-10">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
                  Per month
                </span>
                <span className="mt-3 block font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] text-[color:var(--color-dd-text)]">
                  $75
                </span>
              </p>
              <Button variant="secondary" href="#contact" className="mt-10 w-full !py-4 sm:mt-12 lg:w-auto lg:min-w-[16rem]">
                Add ongoing care
              </Button>
            </div>

            <PricingFeatureList items={hostingFeatures} variant="accent" compact />
          </div>
        </article>
      </div>
    </Section>
  );
}
