import type { CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

/** Live scaled homepage preview — fills card width. */
function PortfolioSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="@container relative aspect-[21/11] min-h-[200px] w-full overflow-hidden rounded-[calc(1.25rem-1px)] bg-[#eae6df] shadow-inner">
      <iframe
        src={url}
        title={`Homepage preview — ${title}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute left-0 top-0 block border-0 [height:780px] [width:1440px] origin-top-left [transform:scale(calc(100cqw/1440px))]"
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
      className="relative scroll-mt-32 bg-[color:var(--color-dd-bg)] py-28 sm:scroll-mt-36 sm:py-40 lg:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(40%,520px)] bg-[radial-gradient(ellipse_80%_85%_at_70%_-10%,rgba(237,229,217,0.55),transparent_65%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll flex max-w-3xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-kicker text-[color:var(--color-dd-muted)]">Selected launches</p>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5.5vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
              Work presented like a{' '}
              <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_85%,var(--color-dd-text))]">
                campaign
              </span>
              .
            </h2>
          </div>
          <p
            className="max-w-sm text-lg font-light leading-[1.7] text-[color:var(--color-dd-muted)] lg:pb-3"
            style={{ fontWeight: 300 }}
          >
            Large canvases, quiet motion, and editorial pacing — crafted for operators who refuse to blend in.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24 lg:mt-28 lg:gap-32">
          {/* Featured */}
          <article className="reveal-on-scroll group relative lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-14 lg:gap-y-16">
            <div className="premium-card relative z-[2] overflow-hidden p-4 sm:p-6 lg:col-span-8 lg:p-8">
              <div className="glass-panel mb-6 flex flex-wrap items-center gap-4 rounded-xl px-5 py-3.5 shadow-none">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#f6e3dd]" />
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#eae6cf]" />
                  <span className="h-3 w-3 rounded-full border border-black/10 bg-[#dde8db]" />
                </div>
                <div className="min-w-0 flex-1 text-center font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-dd-muted)]">
                  {projects[0].domain}
                </div>
              </div>
              <PortfolioSitePreview url={projects[0].url} title={projects[0].title} />
            </div>

            <div className="relative mt-12 flex flex-col justify-center lg:col-span-4 lg:mt-0 lg:min-h-[200px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-[10%] hidden h-[70%] w-52 rounded-[2rem] bg-gradient-to-b from-[color:var(--color-dd-accent-soft)] to-transparent blur-3xl lg:block"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--color-dd-accent)]">
                {projects[0].category}
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[color:var(--color-dd-text)] transition-transform duration-500 ease-out group-hover:translate-x-1">
                {projects[0].title}
              </h3>
              <p className="mt-6 text-base font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
                {projects[0].description}
              </p>
              <div className="mt-10">
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

          <div className="grid gap-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {projects.slice(1).map((p, i) => (
              <article
                key={p.title}
                className="reveal-on-scroll premium-card group flex flex-col overflow-hidden"
                style={{ '--reveal-delay': `${160 + i * 100}ms` } as CSSProperties}
              >
                <div className="border-b border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_88%,transparent)] px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 opacity-85">
                      <span className="h-2 w-2 rounded-full bg-[#e8d5ce]" />
                      <span className="h-2 w-2 rounded-full bg-[#e8e2cd]" />
                      <span className="h-2 w-2 rounded-full bg-[#d5e5d8]" />
                    </div>
                    <div className="mx-auto min-w-0 flex-1 truncate text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-dd-muted)]">
                      {p.domain}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden p-4 pb-2 sm:p-5">
                  <PortfolioSitePreview url={p.url} title={p.title} />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-10 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(250,248,244,0.95))]"
                  />
                </div>

                <div className="flex flex-1 flex-col px-8 pb-10 pt-2 sm:px-10 sm:pb-11">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-dd-accent)]">
                    {p.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] mt-4 text-[1.875rem] font-semibold leading-tight text-[color:var(--color-dd-text)] transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                    {p.title}
                  </h3>
                  <p className="mt-5 flex-1 font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
                    {p.description}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex origin-left text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-dd-accent)] underline decoration-[color:color-mix(in_srgb,var(--color-dd-accent)_42%,transparent)] decoration-1 underline-offset-[10px] transition-all duration-300 hover:decoration-[color:var(--color-dd-accent)] hover:underline-offset-[12px]"
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
