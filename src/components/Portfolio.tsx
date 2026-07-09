import type { CSSProperties, ReactNode } from 'react';
import Section from './Section';
import Button from './Button';

type CaseStudyProject = {
  title: string;
  industry: string;
  improved: ReactNode;
  outcome: string;
  stack: readonly string[];
  techStack: readonly string[];
  url: string;
  /** Set true to keep the entry in code but omit it from the site. */
  hidden?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

/** Logical CSS pixels for mobile layout breakpoints inside the iframe. */
const MOBILE_VIEWPORT_W = 390;
const MOBILE_VIEWPORT_H = 844;

function CaseStudyField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-[color:color-mix(in_srgb,var(--color-dd-text)_9%,transparent)] pt-7 first:border-t-0 first:pt-0">
      <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-dd-muted)]">
        {label}
      </p>
      <div className="mt-3 text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_92%,var(--color-dd-text))] [&_strong]:font-medium [&_strong]:text-[color:var(--color-dd-text)]">
        {children}
      </div>
    </div>
  );
}

function TagPills({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-text)_12%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_55%,transparent)] px-3.5 py-1.5 text-[12px] font-medium leading-none tracking-[0.02em] text-[color:color-mix(in_srgb,var(--color-dd-muted)_88%,var(--color-dd-text))]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

/**
 * Scaled live preview in an iPhone-style frame; iframe uses mobile width so sites render their mobile breakpoints.
 */
function PortfolioSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex w-full justify-center py-1 sm:py-2">
      <div
        className="relative w-full max-w-[min(100%,24rem)] shrink-0"
        style={
          {
            filter: 'drop-shadow(0 28px 48px rgba(42, 40, 37, 0.14)) drop-shadow(0 12px 24px rgba(42, 40, 37, 0.07))',
          } as CSSProperties
        }
      >
        {/* Device body */}
        <div className="relative rounded-[2.5rem] border border-[color:color-mix(in_srgb,var(--color-dd-text)_16%,transparent)] bg-gradient-to-b from-[#3a3836] to-[#1f1e1d] p-[10px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          {/* Screen */}
          <div
            className="relative w-full overflow-hidden rounded-[1.75rem] bg-black ring-1 ring-black/40 [container-type:inline-size]"
            style={{
              aspectRatio: `${MOBILE_VIEWPORT_W} / ${MOBILE_VIEWPORT_H}`,
            }}
          >
            <div
              className="pointer-events-none absolute left-0 top-0"
              style={{
                width: MOBILE_VIEWPORT_W,
                height: MOBILE_VIEWPORT_H,
                transform: `scale(calc(100cqw / ${MOBILE_VIEWPORT_W}px))`,
                transformOrigin: 'top left',
              }}
            >
              <iframe
                src={url}
                title={`Mobile preview — ${title}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none block h-full w-full border-0"
              />
            </div>
          </div>
          {/* Home indicator */}
          <div aria-hidden className="mx-auto mt-3 h-1 w-[92px] rounded-full bg-white/22" />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Pristine Construction',
    industry: 'Construction & remodeling',
    improved: (
      <>
        Full revamp from a limiting <strong>Squarespace</strong> template—new structure and layout, refreshed brand
        expression, <strong>portfolio galleries</strong> reworked into a refined, high-end, gallery-forward presentation,
        plus mobile-first polish and technical <strong>SEO</strong> foundations.
      </>
    ),
    outcome:
      'A high-trust site that matches premium craft: clearer services, stronger credibility, and a presence that earns inquiries without default contractor clichés.',
    stack: [
      'Squarespace → custom revamp',
      'Branding',
      'Copywriting',
      'Mobile optimization',
      'SEO',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Netlify',
    ],
    url: 'https://pristineconstructionllc.com/',
    testimonial: {
      quote:
        'Really impressed—the site looks professional, simple, and clean. Best money I’ve ever spent. Loving it; great work.',
      author: 'Allan Garcia',
      role: 'CEO, Pristine Construction',
    },
  },
  {
    title: 'Premium Barber College',
    industry: 'Barber education & training',
    improved: (
      <>
        Positioning shift from <strong>barbershop to barber college</strong>—admissions-ready story, program clarity,
        embedded <strong>course catalog</strong>, and <strong>LMS</strong> integration with a polished mobile
        experience throughout, plus technical <strong>SEO</strong> foundations for program and location discovery.
      </>
    ),
    outcome:
      'A serious first impression for students and partners: credibility for a regulated training environment, smoother discovery of programs, and a path from browse to enrollment. They loved the finished site enough to refer us to more people who want websites.',
    stack: [
      'Website design',
      'Branding',
      'Copywriting',
      'Mobile optimization',
      'SEO',
      'Course catalog',
      'LMS integration',
    ],
    techStack: [
      'Vite',
      'React',
      'JavaScript (JSX)',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
    ],
    url: 'https://premiumbarbercollege.com/',
  },
  {
    title: 'Elite Precision GPR',
    hidden: true,
    industry: 'Geophysical & subsurface services',
    improved: (
      <>
        First professional web presence—built from zero with a tight <strong>brand</strong>, mobile-optimized
        layouts, technical <strong>SEO</strong> foundations, and <strong>service narratives</strong> that translate
        complex scans into plain-language value.
      </>
    ),
    outcome:
      'Qualified buyers understand what you do, when to call, and why it matters—fewer wrong-fit inquiries and more confident outreach from GCs and property stakeholders.',
    stack: [
      'Website design (greenfield)',
      'Branding',
      'Copywriting',
      'Mobile optimization',
      'SEO',
      'Service positioning',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    url: 'https://eliteprecisiongprv1preview.netlify.app/',
  },
] satisfies CaseStudyProject[];

export default function Portfolio() {
  return (
    <Section
      id="case-studies"
      className="dd-from-hero-bridge dd-surface-grain relative scroll-mt-36 overflow-hidden sm:scroll-mt-40 py-14 sm:py-18 lg:py-[min(6.5rem,11vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(48%,620px)] bg-[radial-gradient(ellipse_72%_78%_at_68%_-8%,color-mix(in_srgb,var(--color-dd-champagne-light)_42%,transparent),transparent_70%)]"
      />
      {/* Bright field under intro copy so dark type reads on the hero bridge without a card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(62%,720px)] bg-[radial-gradient(ellipse_92%_115%_at_20%_10%,color-mix(in_srgb,var(--color-dd-off-white)_82%,var(--color-dd-bg)),transparent_72%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[92rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll flex max-w-4xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 xl:gap-28">
          <div className="max-w-3xl">
            <p className="font-kicker text-[color:var(--color-dd-accent)]">Case Studies</p>
            <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(3rem,5.85vw,4.875rem)] font-semibold leading-[1.02] tracking-[-0.022em] text-[color:color-mix(in_srgb,var(--color-dd-text)_62%,#0a0908)]">
              Selected work with{' '}
              <span className="font-normal italic text-[color:var(--color-dd-accent)]">
                industry context, outcomes, and craft
              </span>
              —not a thumbnail wall.
            </h2>
          </div>
          <p
            className="max-w-[24rem] text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_68%,var(--color-dd-text))] lg:pb-2"
            style={{ fontWeight: 300 }}
          >
            Each project is documented like a case study: who it serves, what changed, why it mattered, and what we used to
            ship it—then a live preview you can open in full.
          </p>
        </div>

        <div className="mt-28 flex flex-col gap-20 sm:gap-24 lg:mt-40 lg:gap-32">
          {projects.filter((p) => !p.hidden).map((p, i) => {
            const previewOnLeft = i % 2 === 0;
            return (
              <article
                key={p.title}
                className="reveal-on-scroll premium-card relative z-[2] overflow-hidden p-6 sm:p-9 lg:p-12 xl:p-14"
                style={{ '--reveal-delay': `${i * 100}ms` } as CSSProperties}
              >
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-14 xl:gap-x-20">
                  <div
                    className={`flex flex-col lg:col-span-5 ${
                      previewOnLeft ? 'lg:col-start-8' : 'lg:col-start-1'
                    } ${previewOnLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute top-[18%] hidden h-[52%] w-64 rounded-[length:var(--dd-radius-xl)] bg-gradient-to-b from-[color:color-mix(in_srgb,var(--color-dd-accent-soft)_88%,transparent)] to-transparent blur-3xl lg:block ${
                        previewOnLeft ? '-right-16 xl:-right-24' : '-left-16 xl:-left-24'
                      }`}
                    />
                    <p className="font-[family-name:var(--font-sans)] text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:var(--color-dd-accent)]">
                      Case study
                    </p>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.125rem,3.6vw,3rem)] font-semibold tracking-[-0.022em] text-[color:var(--color-dd-text)]">
                      {p.title}
                    </h3>

                    <div className="mt-10 space-y-0">
                      <CaseStudyField label="Industry">{p.industry}</CaseStudyField>
                      <CaseStudyField label="What we improved">{p.improved}</CaseStudyField>
                      <CaseStudyField label="Business outcome">{p.outcome}</CaseStudyField>
                      {p.testimonial ? (
                        <CaseStudyField label="Client feedback">
                          <blockquote className="m-0 border-0 p-0">
                            <p className="font-normal italic leading-[1.72]">
                              &ldquo;{p.testimonial.quote}&rdquo;
                            </p>
                            <footer className="mt-4 font-[family-name:var(--font-sans)] text-[13px] font-normal not-italic leading-snug tracking-[0.02em] text-[color:var(--color-dd-muted)]">
                              <cite className="font-semibold not-italic text-[color:color-mix(in_srgb,var(--color-dd-muted)_20%,var(--color-dd-text))]">
                                {p.testimonial.author}
                              </cite>
                              <span className="mt-0.5 block">{p.testimonial.role}</span>
                            </footer>
                          </blockquote>
                        </CaseStudyField>
                      ) : null}
                      <CaseStudyField label="Stack & services">
                        <TagPills tags={p.stack} />
                      </CaseStudyField>
                      <CaseStudyField label="Tech stack">
                        <TagPills tags={p.techStack} />
                      </CaseStudyField>
                    </div>

                    <div className="relative z-[1] mt-10">
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

                  <div
                    className={`flex flex-col justify-center lg:col-span-7 ${
                      previewOnLeft ? 'lg:col-start-1' : 'lg:col-start-6'
                    } ${previewOnLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
                  >
                    <PortfolioSitePreview url={p.url} title={p.title} />
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
