import Section from './Section';
import Button from './Button';

const projects = [
  {
    category: 'Education',
    title: 'Premium Barber College',
    description:
      'Education site for a barber academy—programs, credibility, and “yes, we’re legit” energy for future students.',
    url: 'https://premiumbarbercollege.com/',
    accent: 'from-violet-500/25 to-transparent',
    domain: 'premiumbarbercollege.com',
  },
  {
    category: 'Construction',
    title: 'Pristine Construction',
    description:
      'Construction brand story with room to flex projects—trust-first, no cheesy stock-photo vibes.',
    url: 'https://pristineconstructionv1preview.netlify.app/',
    accent: 'from-sky-500/25 to-transparent',
    domain: 'pristineconstruction.com',
  },
  {
    category: 'Technical Services',
    title: 'Elite Precision GPR',
    description:
      'Technical services explained in plain English—so prospects get it and still hit “request a quote.”',
    url: 'https://eliteprecisiongprv1preview.netlify.app/',
    accent: 'from-emerald-500/20 to-transparent',
    domain: 'eliteprecisiongpr.com',
  },
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-sky-400/90">Portfolio</p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Real launches for real operators
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 lg:text-lg">
            Barber schools, builders, GPR crews—the kind of businesses where trust matters. Each site is structured to
            explain what you do without putting people to sleep, and nudge them toward the next step.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal-on-scroll group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/60 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-sky-400/35 hover:shadow-[0_28px_80px_-24px_rgba(56,189,248,0.12)]"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${p.accent}`}
              />

              <div className="relative border-b border-white/[0.06] bg-neutral-900/55 px-3 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/85" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/85" />
                  </div>
                  <div className="mx-auto min-w-0 flex-1 text-center">
                    <span className="inline-block max-w-[90%] truncate rounded bg-black/45 px-2 py-1 text-[10px] font-medium text-neutral-500 ring-1 ring-white/[0.06]">
                      {p.domain}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-[11px] font-semibold tracking-wide text-sky-400/90">
                  {p.category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] mt-3 text-xl font-semibold text-white lg:text-[1.35rem]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{p.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <Button
                    variant="secondary"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!px-5 !py-2.5 text-xs font-semibold tracking-wide"
                  >
                    View site
                  </Button>
                  <span className="text-[10px] font-medium tracking-wide text-neutral-600 opacity-80 transition-colors group-hover:text-neutral-400">
                    Opens live preview →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
