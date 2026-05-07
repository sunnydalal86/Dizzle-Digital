import Section from './Section';

const reasons = [
  'First impressions that don’t scream “DIY”',
  'Messaging people actually understand',
  'Designed for thumbs, not just desktops',
  'Trust-building layout—not fluff',
  'Momentum on timelines',
  'Structure aimed at inquiries',
  'Clean code you can grow into',
];

export default function WhyUs() {
  return (
    <Section id="why" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="reveal-on-scroll">
            <p className="text-sm font-medium tracking-wide text-sky-400/90">Why work with us</p>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
              You&apos;re not buying pages—you&apos;re buying peace of mind
            </h2>
            <p className="mt-5 text-lg font-normal leading-relaxed text-neutral-400">
              A lot of local businesses lose work before the phone rings because the website feels sketchy, confusing, or
              buried on mobile. We fix that with sensible hierarchy, straight-talk copy, and layouts shaped around how
              people actually decide to hire someone.
            </p>
            <p className="mt-4 border-l-2 border-amber-400/35 pl-4 text-sm text-neutral-400">
              We&apos;re rooting for the overlooked operators—the ones who do great work and just need the internet to
              catch up.
            </p>
          </div>

          <ul className="reveal-on-scroll grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 text-sm font-normal text-neutral-200 backdrop-blur-sm transition-colors hover:border-sky-400/30"
              >
                <span className="mt-0.5 text-sky-400" aria-hidden>
                  ●
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
