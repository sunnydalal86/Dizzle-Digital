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
      className="scroll-mt-32 border-y border-[color:color-mix(in_srgb,var(--color-dd-border)_120%,transparent)] bg-[color:var(--color-dd-surface)] py-28 sm:scroll-mt-36 sm:py-40 lg:py-44"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Capabilities</p>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
            Outcomes,{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              not deliverable lists.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            Everything ladders to credibility, clarity, and inquiries that respect your time.
          </p>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal-on-scroll premium-card group relative overflow-hidden p-10 sm:p-11 ${
                i % 3 === 1 ? 'lg:translate-y-6' : ''
              } ${i % 3 === 2 ? 'lg:-translate-y-4' : ''}`}
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` } as CSSProperties}
            >
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent)_12%,transparent),transparent)] transition-transform duration-700 group-hover:scale-125" aria-hidden />
              <div className="relative">
                <div className="h-px w-12 bg-gradient-to-r from-[color:var(--color-dd-accent)]/70 to-transparent" />
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[color:var(--color-dd-text)]">
                  {s.title}
                </h3>
                <p className="mt-6 text-[15px] font-light leading-[1.8] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
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
