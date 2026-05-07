import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

/** Live scaled homepage preview — fills card width. */
function PortfolioSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="@container relative aspect-[21/10] min-h-[clamp(15rem,38vw,22rem)] w-full overflow-hidden rounded-[length:var(--dd-radius-md)] bg-[#eae6df] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)]">
      <iframe
        src={url}
        title={`Homepage preview — ${title}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute left-0 top-0 block border-0 [height:820px] [width:1440px] origin-top-left [transform:scale(calc(100cqw/1440px))]"
      />
    </div>
  );
}

const projects = [
  {
    category: 'Education / Barber Academy',
    title: 'Premium Barber College',
    description:
      'A polished flagship built for credibility — programs, admissions, and a sense of craft before guests walk through the door.',
    url: 'https://premiumbarbercollege.com/',
    domain: 'premiumbarbercollege.com',
  },
  {
    category: 'Construction / Remodeling',
    title: 'Pristine Construction',
    description:
      'High-trust visuals and restraint where it counts — framing premium remodeling without drowning in cliché.',
    url: 'https://pristineconstructionv1preview.netlify.app/',
    domain: 'pristineconstruction…',
  },
  {
    category: 'Technical Services',
    title: 'Elite Precision GPR',
    description:
      'Complex services, quiet confidence — explanations that invite the right inquiries, clearly and quickly.',
    url: 'https://eliteprecisiongprv1preview.netlify.app/',
    domain: 'eliteprecisiongpr…',
  },
];

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="dd-from-hero-bridge dd-surface-grain relative scroll-mt-36 overflow-hidden sm:scroll-mt-40 py-36 sm:py-48 lg:py-[min(13rem,18vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(48%,620px)] bg-[radial-gradient(ellipse_72%_78%_at_68%_-8%,color-mix(in_srgb,var(--color-dd-champagne-light)_42%,transparent),transparent_70%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll flex max-w-4xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 xl:gap-28">
          <div className="max-w-3xl">
            <p className="font-kicker text-[color:var(--color-dd-muted)]">Selected launches</p>
            <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(3rem,5.85vw,4.875rem)] font-semibold leading-[1.02] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
              Work presented like a{' '}
              <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_85%,var(--color-dd-text))]">
                campaign
              </span>
              .
            </h2>
          </div>
          <p
            className="max-w-[22rem] text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))] lg:pb-2"
            style={{ fontWeight: 300 }}
          >
            Large canvases, quiet motion, and editorial pacing — crafted for operators who refuse to blend in.
          </p>
        </div>

        <div className="mt-28 flex flex-col gap-28 lg:mt-40 lg:gap-40">
          {/* Featured */}
          <article className="reveal-on-scroll group relative lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <div className="premium-card relative z-[2] overflow-hidden p-5 sm:p-7 lg:col-span-8 lg:p-9">
              <div className="glass-panel mb-7 flex flex-wrap items-center gap-4 rounded-[length:var(--dd-radius-md)] px-5 py-3 shadow-none">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#f6e3dd]" />
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#eae6cf]" />
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#dde8db]" />
                </div>
                <div className="min-w-0 flex-1 text-center font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-dd-muted)]">
                  {projects[0].domain}
                </div>
              </div>
              <PortfolioSitePreview url={projects[0].url} title={projects[0].title} />
            </div>

            <div className="relative mt-16 flex flex-col justify-center lg:col-span-4 lg:mt-0 lg:min-h-[200px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-[10%] hidden h-[72%] w-56 rounded-[length:var(--dd-radius-xl)] bg-gradient-to-b from-[color:color-mix(in_srgb,var(--color-dd-accent-soft)_88%,transparent)] to-transparent blur-3xl lg:block"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-accent)]">
                {projects[0].category}
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,3.2vw,2.75rem)] font-semibold tracking-[-0.02em] text-[color:var(--color-dd-text)] transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] group-hover:text-[color:color-mix(in_srgb,var(--color-dd-text)_94%,var(--color-dd-accent))]">
                {projects[0].title}
              </h3>
              <p className="mt-8 text-[1.0625rem] font-light leading-[1.75] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
                {projects[0].description}
              </p>
              <div className="mt-12">
                <Button
                  variant="secondary"
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!tracking-[0.2em]"
                >
                  Open live site
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-24 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {projects.slice(1).map((p, i) => (
              <article
                key={p.title}
                className="reveal-on-scroll premium-card group flex flex-col overflow-hidden"
                style={{ '--reveal-delay': `${140 + i * 90}ms` } as CSSProperties}
              >
                <div className="border-b border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_90%,transparent)] px-7 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 opacity-90">
                      <span className="h-2 w-2 rounded-full bg-[#e8d5ce]" />
                      <span className="h-2 w-2 rounded-full bg-[#e8e2cd]" />
                      <span className="h-2 w-2 rounded-full bg-[#d5e5d8]" />
                    </div>
                    <div className="mx-auto min-w-0 flex-1 truncate text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--color-dd-muted)]">
                      {p.domain}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden p-5 pb-3 sm:p-6">
                  <PortfolioSitePreview url={p.url} title={p.title} />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-12 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(250,248,244,0.92))]"
                  />
                </div>

                <div className="flex flex-1 flex-col px-9 pb-12 pt-4 sm:px-11 sm:pb-14">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-dd-accent)]">
                    {p.category}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.75rem,2.8vw,2.125rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[color:var(--color-dd-text)] transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] group-hover:text-[color:color-mix(in_srgb,var(--color-dd-text)_94%,var(--color-dd-accent))]">
                    {p.title}
                  </h3>
                  <p className="mt-6 flex-1 text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
                    {p.description}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex origin-left text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--color-dd-accent)] underline decoration-[color:color-mix(in_srgb,var(--color-dd-accent)_38%,transparent)] decoration-1 underline-offset-[10px] transition-all duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:decoration-[color:var(--color-dd-accent)] hover:underline-offset-[14px]"
                  >
                    View live
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
