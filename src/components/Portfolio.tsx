import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

/** Logical CSS pixels for mobile layout breakpoints inside the iframe. */
const MOBILE_VIEWPORT_W = 390;
const MOBILE_VIEWPORT_H = 844;

/**
 * Scaled live preview in an iPhone-style frame; iframe uses mobile width so sites render their mobile breakpoints.
 */
function PortfolioSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex w-full justify-center py-2 sm:py-4">
      <div
        className="relative w-full max-w-[min(100%,17.5rem)] shrink-0"
        style={
          {
            filter: 'drop-shadow(0 22px 40px rgba(42, 40, 37, 0.12)) drop-shadow(0 8px 16px rgba(42, 40, 37, 0.06))',
          } as CSSProperties
        }
      >
        {/* Device body */}
        <div className="relative rounded-[2.35rem] border border-[color:color-mix(in_srgb,var(--color-dd-text)_16%,transparent)] bg-gradient-to-b from-[#3a3836] to-[#1f1e1d] p-[9px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          {/* Screen */}
          <div
            className="@container relative w-full overflow-hidden rounded-[1.65rem] bg-black ring-1 ring-black/40"
            style={{ aspectRatio: `${MOBILE_VIEWPORT_W} / ${MOBILE_VIEWPORT_H}` }}
          >
            <iframe
              src={url}
              title={`Mobile preview — ${title}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: MOBILE_VIEWPORT_W, height: MOBILE_VIEWPORT_H }}
              className={`pointer-events-none absolute left-0 top-0 block border-0 origin-top-left [transform:scale(calc(100cqw/${MOBILE_VIEWPORT_W}px))]`}
            />
          </div>
          {/* Home indicator */}
          <div
            aria-hidden
            className="mx-auto mt-2.5 h-1 w-[92px] rounded-full bg-white/22"
          />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    category: 'Construction / Remodeling',
    title: 'Pristine Construction',
    description:
      'High-trust photography and layout that sells premium remodeling without leaning on tired contractor clichés.',
    url: 'https://pristineconstructionv1preview.netlify.app/',
    domain: 'pristineconstruction…',
  },
  {
    category: 'Education / Barber Academy',
    title: 'Premium Barber College',
    description:
      'A credible first impression for admissions and programs — clear story, strong visuals, and an experience that feels as serious as the training.',
    url: 'https://premiumbarbercollege.com/',
    domain: 'premiumbarbercollege.com',
  },
  {
    category: 'Technical Services',
    title: 'Elite Precision GPR',
    description:
      'Technical services explained in plain language — so the right clients understand the value and know how to reach you.',
    url: 'https://eliteprecisiongprv1preview.netlify.app/',
    domain: 'eliteprecisiongpr…',
  },
] as const;

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="dd-from-hero-bridge dd-surface-grain relative scroll-mt-36 overflow-hidden sm:scroll-mt-40 py-14 sm:py-18 lg:py-[min(6.5rem,11vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(48%,620px)] bg-[radial-gradient(ellipse_72%_78%_at_68%_-8%,color-mix(in_srgb,var(--color-dd-champagne-light)_42%,transparent),transparent_70%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll flex max-w-4xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 xl:gap-28">
          <div className="max-w-3xl">
            <p className="font-kicker text-[color:var(--color-dd-muted)]">Selected work</p>
            <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(3rem,5.85vw,4.875rem)] font-semibold leading-[1.02] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
              Recent work for{' '}
              <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_85%,var(--color-dd-text))]">
                brands that invest in how they look online
              </span>
              .
            </h2>
          </div>
          <p
            className="max-w-[22rem] text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))] lg:pb-2"
            style={{ fontWeight: 300 }}
          >
            Each site is designed to feel memorable on a phone, confident on a desktop, and easy for real customers to use.
          </p>
        </div>

        <div className="mt-28 flex flex-col gap-28 lg:mt-40 lg:gap-40">
          {projects.map((p, i) => {
            const previewOnLeft = i % 2 === 0;
            return (
              <article
                key={p.title}
                className="reveal-on-scroll group relative lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
                style={{ '--reveal-delay': `${i * 100}ms` } as CSSProperties}
              >
                <div
                  className={`premium-card relative z-[2] overflow-hidden p-5 sm:p-7 lg:p-9 ${
                    previewOnLeft ? 'lg:col-span-8 lg:col-start-1' : 'lg:col-span-8 lg:col-start-5'
                  } lg:row-start-1`}
                >
                  <p className="mb-4 text-center font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-dd-muted)]">
                    {p.domain}
                  </p>
                  <PortfolioSitePreview url={p.url} title={p.title} />
                </div>

                <div
                  className={`relative mt-16 flex flex-col justify-center lg:mt-0 lg:min-h-[200px] ${
                    previewOnLeft ? 'lg:col-span-4 lg:col-start-9' : 'lg:col-span-4 lg:col-start-1'
                  } lg:row-start-1`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute top-[10%] hidden h-[72%] w-56 rounded-[length:var(--dd-radius-xl)] bg-gradient-to-b from-[color:color-mix(in_srgb,var(--color-dd-accent-soft)_88%,transparent)] to-transparent blur-3xl lg:block ${
                      previewOnLeft ? '-left-24' : '-right-24'
                    }`}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-accent)]">
                    {p.category}
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,3.2vw,2.75rem)] font-semibold tracking-[-0.02em] text-[color:var(--color-dd-text)] transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] group-hover:text-[color:color-mix(in_srgb,var(--color-dd-text)_94%,var(--color-dd-accent))]">
                    {p.title}
                  </h3>
                  <p className="mt-8 text-[1.0625rem] font-light leading-[1.75] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
                    {p.description}
                  </p>
                  <div className="mt-12">
                    <Button
                      variant="secondary"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="!tracking-[0.2em]"
                    >
                      Open live site
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
