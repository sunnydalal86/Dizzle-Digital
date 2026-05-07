import Section from './Section';
import Button from './Button';

const tiers = [
  {
    name: 'Starter Site',
    price: '$1,500',
    badge: '',
    bullets: ['Perfect when you need something clean and credible ASAP—think sharp one-pager or tight starter site.'],
    highlight: false,
  },
  {
    name: 'Business Website',
    price: '$2,500',
    badge: 'Most popular 🔥',
    bullets: [
      'The sweet spot for most service businesses—service breakdowns, SEO basics, and forms that actually get used.',
    ],
    highlight: true,
  },
  {
    name: 'Premium Build',
    price: '$4,000',
    badge: '',
    bullets: [
      'When you want custom visuals, richer storytelling, galleries, and an overall “we’re the obvious choice” vibe.',
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <Section id="packages" className="scroll-mt-28 border-t border-white/[0.05] bg-gradient-to-b from-neutral-950/80 to-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-sky-400/90">Packages</p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Clear starting points—no “call for quote” games
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 lg:text-lg">
            Ballpark numbers so you know if we&apos;re in the same galaxy. Final scope depends on content, bells,
            whistles, and how fast you need it—but we&apos;ll spell that out before anything weird happens.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`reveal-on-scroll relative flex flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                tier.highlight
                  ? 'border-sky-400/45 bg-gradient-to-b from-sky-500/10 via-neutral-950/90 to-neutral-950 shadow-[0_24px_80px_-28px_rgba(56,189,248,0.25)]'
                  : 'border-white/[0.08] bg-neutral-950/60 hover:border-sky-400/25'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-sky-400/40 bg-neutral-950 px-3 py-1 text-[11px] font-semibold tracking-wide text-sky-300">
                  {tier.badge}
                </div>
              )}
              <div className="flex items-baseline gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">{tier.name}</h3>
              </div>
              <p className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="text-sm font-medium text-neutral-500">Starting around </span>
                <br className="sm:hidden" />
                {tier.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-neutral-400">
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? 'primary' : 'secondary'} href="#contact" className="mt-8 w-full !py-3">
                Let&apos;s talk
              </Button>
            </article>
          ))}
        </div>

        <p className="reveal-on-scroll mt-12 text-center text-sm text-neutral-500">
          Fine print, but friendly: final numbers depend on scope, content, integrations, and timeline—we&apos;ll map it
          together.
        </p>
      </div>
    </Section>
  );
}
