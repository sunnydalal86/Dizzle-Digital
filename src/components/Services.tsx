import Section from './Section';

const services = [
  {
    title: 'Premium Website Builds',
    outcome:
      'A flagship digital presence that frames your services clearly and moves visitors toward contacting you.',
  },
  {
    title: 'Website Revamps',
    outcome:
      'An elevated experience from your current site—tighter story, stronger visuals, less friction on mobile.',
  },
  {
    title: 'Local SEO Foundations',
    outcome:
      'Discoverability where it matters: structured pages, titles, and technical basics that support local search.',
  },
  {
    title: 'Lead Capture Systems',
    outcome:
      'Forms, calls-to-action, and page flow aligned with how your customers actually hire you.',
  },
  {
    title: 'Portfolio & Project Galleries',
    outcome:
      'Proof that sells—project showcases that build trust without burying your pitch.',
  },
  {
    title: 'Launch, Hosting & Support',
    outcome:
      'Confident go-live: hosting setup, SSL, performance checks, and a partner for what comes next.',
  },
];

export default function Services() {
  return (
    <Section id="services" className="scroll-mt-32 border-y border-stone-800/45 bg-[color:var(--color-dd-surface)] py-24 sm:scroll-mt-36 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="font-kicker">Capabilities</p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
            Outcomes, not deliverable lists.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Everything ties back to credibility, clarity, and qualified inquiries.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal-on-scroll premium-card p-8"
              style={{ transitionDelay: `${(i % 3) * 40}ms` }}
            >
              <div className="h-px w-10 bg-[color:var(--color-dd-accent)]/55" />
              <h3 className="font-[family-name:var(--font-display)] mt-6 text-lg font-bold text-stone-50">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">{s.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
