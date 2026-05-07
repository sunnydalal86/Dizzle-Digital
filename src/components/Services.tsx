import type { CSSProperties } from 'react';
import Section from './Section';

const services = [
  {
    title: 'Premium Website Builds',
    outcome:
      'A flagship digital presence that frames your offer with editorial clarity — visitors know why you, and what to do next.',
  },
  {
    title: 'Website Revamps',
    outcome:
      'Elevated from the site you have: tighter story, braver spacing, and frictionless mobile — without the template feel.',
  },
  {
    title: 'Local SEO Foundations',
    outcome:
      'Discoverability where hiring happens: intentional structure, titles, and technical hygiene that support real search.',
  },
  {
    title: 'Lead Capture Systems',
    outcome:
      'Forms, CTAs, and page flow aligned with how clients actually choose a partner — not scattershot buttons.',
  },
  {
    title: 'Portfolio & Project Galleries',
    outcome:
      'Proof that earns trust — cinematic galleries and case rhythm that support the sale without stealing the narrative.',
  },
  {
    title: 'Launch, Hosting & Support',
    outcome:
      'Calm go-live: SSL, performance, backups, and a steady hand for what comes next after launch day.',
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
            Outcomes,{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              not deliverable lists.
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-[1.0625rem] font-light leading-[1.72] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Everything ladders to credibility, clarity, and inquiries that respect your time.
          </p>
        </div>

        <div className="mt-32 grid gap-9 sm:grid-cols-2 lg:mt-40 lg:grid-cols-3 lg:gap-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal-on-scroll premium-card group relative overflow-hidden rounded-[length:var(--dd-radius-lg)] p-11 sm:p-12"
              style={{ '--reveal-delay': `${(i % 3) * 75}ms` } as CSSProperties}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent)_10%,transparent),transparent)] opacity-90 transition-transform duration-[720ms] [transition-timing-function:var(--dd-motion-smooth)] group-hover:scale-105"
                aria-hidden
              />
              <div className="relative">
                <div className="h-px w-14 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--color-dd-accent)_72%,transparent)] to-transparent" />
                <h3 className="mt-9 font-[family-name:var(--font-display)] text-[clamp(1.375rem,2.1vw,1.625rem)] font-semibold tracking-[-0.018em] text-[color:var(--color-dd-text)]">
                  {s.title}
                </h3>
                <p className="mt-7 text-[15px] font-light leading-[1.78] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
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
