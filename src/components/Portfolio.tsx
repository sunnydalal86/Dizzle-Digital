import Section from './Section';
import Button from './Button';

/** Live scaled homepage preview — fills card width; top of page above the fold. */
function PortfolioSitePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="@container relative aspect-[16/10] w-full overflow-hidden bg-[color:var(--color-dd-bg)]">
      <iframe
        src={url}
        title={`Homepage preview — ${title}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute left-0 top-0 block border-0 [height:800px] [width:1280px] origin-top-left [transform:scale(calc(100cqw/1280px))]"
      />
    </div>
  );
}

const projects = [
  {
    category: 'Education / Barber Academy',
    title: 'Premium Barber College',
    description:
      'A polished site built to establish credibility, explain programs, and support student interest.',
    url: 'https://premiumbarbercollege.com/',
    domain: 'premiumbarbercollege.com',
  },
  {
    category: 'Construction / Remodeling',
    title: 'Pristine Construction',
    description:
      'A premium website experience focused on trust, project quality, and high-end remodeling services.',
    url: 'https://pristineconstructionv1preview.netlify.app/',
    domain: 'pristineconstruction…',
  },
  {
    category: 'Technical Services',
    title: 'Elite Precision GPR',
    description:
      'A professional service website designed to explain complex offerings clearly and drive quote inquiries.',
    url: 'https://eliteprecisiongprv1preview.netlify.app/',
    domain: 'eliteprecisiongpr…',
  },
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="scroll-mt-32 py-24 sm:scroll-mt-36 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="font-kicker">Proof</p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
            Work that performs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Selected launches for operators who needed authority online—not another placeholder.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="reveal-on-scroll premium-card flex flex-col overflow-hidden">
              <div className="border-b border-stone-700/45 bg-[color:var(--color-dd-elevated)] px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-600" />
                  </div>
                  <div className="mx-auto min-w-0 flex-1 text-center">
                    <span className="inline-block max-w-[92%] truncate text-[10px] font-medium text-stone-500">
                      {p.domain}
                    </span>
                  </div>
                </div>
              </div>

              <PortfolioSitePreview url={p.url} title={p.title} />

              <div className="flex flex-1 flex-col p-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {p.category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] mt-4 text-xl font-bold text-stone-50">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">{p.description}</p>
                <Button
                  variant="secondary"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 !px-5 !py-2.5 text-xs"
                >
                  Open live site
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
