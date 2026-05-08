import type { CSSProperties } from 'react';
import Section from './Section';

const services = [
  {
    title: 'Premium Website Builds',
    outcome:
      'A custom site that frames your offer clearly — visitors understand why you are the right fit, see proof, and know exactly what to do next.',
  },
  {
    title: 'Website Revamps',
    outcome:
      'Level up from the site you have: clearer story, stronger visuals, and smoother mobile — without the generic template look.',
  },
  {
    title: 'Local SEO Foundations',
    outcome:
      'Get found where people hire: clean page structure, strong titles, and technical basics that support real local search.',
  },
  {
    title: 'Lead Capture Systems',
    outcome:
      'Forms, calls-to-action, and page flow aligned with how clients actually choose a partner — fewer dead ends, more qualified inquiries.',
  },
  {
    title: 'Portfolio & Project Galleries',
    outcome:
      'Project galleries that show your work with depth and polish — proof that supports the sale without cluttering the story.',
  },
  {
    title: 'Launch, Hosting & Support',
    outcome:
      'A calm launch: SSL, speed checks, backups, and a clear plan for updates after you go live.',
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
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Capabilities</p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5.35vw,4.25rem)] font-semibold leading-[1.03] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
            What you get,{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              in plain language.
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Every engagement is built around credibility, clarity, and inquiries that respect your time.
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
