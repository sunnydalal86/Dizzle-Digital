import Section from './Section';
import Button from './Button';

const tiers = [
  {
    name: 'Starter Site',
    price: '$1,500',
    label: 'Starting at',
    bullets: ['Ideal when you need a credible, focused presence fast—a refined single-page or compact multi-section site.'],
    highlight: false,
  },
  {
    name: 'Business Website',
    price: '$2,500',
    label: 'Starting at',
    bullets: ['The standard for most service brands: services, proof, SEO groundwork, and lead paths that get used.'],
    highlight: true,
  },
  {
    name: 'Premium Build',
    price: '$4,000',
    label: 'Starting at',
    bullets: ['For brands raising the bar—richer storytelling, bespoke layouts, galleries, and a flagship finish.'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="scroll-mt-32 border-t border-stone-800/45 py-24 sm:scroll-mt-36 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll max-w-2xl">
          <p className="font-kicker">Pricing</p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
            Clear entry points. Serious execution.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Ballpark anchors so you know where we fit. Final investment reflects scope, content, and timeline—we define
            that before build begins.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`reveal-on-scroll relative flex flex-col rounded-2xl border p-10 transition-all duration-300 sm:p-11 ${
                tier.highlight
                  ? 'border-[color:color-mix(in_srgb,var(--color-dd-accent)_48%,transparent)] bg-[color:var(--color-dd-elevated)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(201,136,85,0.22)_inset,0_28px_56px_-28px_rgba(201,136,85,0.18)]'
                  : 'premium-card'
              }`}
            >
              {!tier.highlight && (
                <div
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-stone-600/45 to-transparent"
                  aria-hidden
                />
              )}
              {tier.highlight && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[color:var(--color-dd-accent)]/75 to-transparent" />
              )}
              {tier.highlight && (
                <p className="font-accent mb-5 text-sm tracking-wide text-[color:var(--color-dd-accent)]">
                  Most engaged
                </p>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-50">
                {tier.name}
              </h3>
              <p className="mt-8">
                <span className="block text-sm font-medium text-stone-400">{tier.label}</span>
                <span className="font-[family-name:var(--font-display)] mt-1 block text-4xl font-bold tracking-tight text-stone-50 sm:text-[2.75rem]">
                  {tier.price}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {tier.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-stone-400">
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? 'primary' : 'secondary'} href="#contact" className="mt-10 w-full !py-3.5">
                Start a Project
              </Button>
            </article>
          ))}
        </div>

        <p className="reveal-on-scroll mt-14 text-center text-sm text-stone-500">
          Scope drives the final number—integrations, copy depth, asset production, and turnaround all factor in.
        </p>
      </div>
    </Section>
  );
}
