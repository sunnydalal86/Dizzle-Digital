import { Fragment } from 'react';

/** Short labels distilled from the pricing section (build + hosting). */
const OFFERINGS = [
  'Website builds',
  'Editorial copy',
  'Fast performance',
  'SEO foundations',
  'Lead paths',
  'Managed hosting',
  'SSL security',
  'Backups & monitoring',
  'Performance tuning',
  'Content updates',
  'Priority support',
];

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {OFFERINGS.map((label) => (
        <Fragment key={label}>
          <span className="whitespace-nowrap font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--color-dd-muted)_88%,var(--color-dd-text))] sm:text-[11px] sm:tracking-[0.28em]">
            {label}
          </span>
          <span
            className="select-none text-[10px] font-light text-[color:color-mix(in_srgb,var(--color-dd-accent)_42%,transparent)] sm:text-[11px]"
            aria-hidden
          >
            ·
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default function HeroServicesMarquee() {
  const staticLine = OFFERINGS.join(' · ');

  return (
    <div
      className="relative border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-surface)] py-3 sm:py-3.5"
      role="region"
      aria-label="Services overview"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[color:var(--color-dd-surface)] to-transparent sm:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[color:var(--color-dd-surface)] to-transparent sm:w-20"
        aria-hidden
      />

      <div className="dd-marquee-wrap overflow-hidden">
        <div className="dd-marquee-track flex w-max">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </div>

      <p className="dd-marquee-static px-6 text-center font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.26em] text-[color:color-mix(in_srgb,var(--color-dd-muted)_88%,var(--color-dd-text))] sm:text-[11px] sm:tracking-[0.24em]">
        {staticLine}
      </p>
    </div>
  );
}
