import Section from './Section';

const services = [
  {
    title: 'Premium Website Builds',
    body: 'Sites built around your story—not a generic template dump. Clear sections, strong visuals, and paths that lead to calls and forms.',
    icon: '◇',
  },
  {
    title: 'Website Revamps',
    body: 'If your site feels stuck in 2014, we tidy the UX, typography, and imagery so people stick around instead of bouncing.',
    icon: '◆',
  },
  {
    title: 'Local SEO Setup',
    body: 'Basics that help neighbors find you: sensible titles, crawl-friendly structure, and maps-ready groundwork—not keyword stuffing.',
    icon: '◎',
  },
  {
    title: 'Lead Capture Setup',
    body: 'Buttons and flows that match how people actually hire you—whether that’s “book now,” “get a quote,” or “call the shop.”',
    icon: '✦',
  },
  {
    title: 'Portfolio & Gallery Experiences',
    body: 'Show the work without bogging down the pitch—great for builders, schools, and anyone with proof to flex.',
    icon: '▤',
  },
  {
    title: 'Launch, Hosting & Support',
    body: 'Domains, deploys, HTTPS, backups—the unglamorous stuff—handled so launch day feels calm instead of chaotic.',
    icon: '⬡',
  },
];

export default function Services() {
  return (
    <Section id="services" className="scroll-mt-28 border-y border-white/[0.05] bg-neutral-950/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-sky-400/90">What we actually do</p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            The helpful stuff—minus the buzzwords
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 lg:text-lg">
            Besides debating font pairings and drinking too much coffee, we focus on one question: does this make someone
            trust you faster and reach out with less friction—especially on a phone?
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal-on-scroll group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-300 hover:border-sky-400/35 hover:bg-white/[0.05]`}
              style={{ transitionDelay: `${(i % 3) * 40}ms` }}
            >
              <span className="text-xl text-sky-400/90">{s.icon}</span>
              <h3 className="font-[family-name:var(--font-display)] mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
