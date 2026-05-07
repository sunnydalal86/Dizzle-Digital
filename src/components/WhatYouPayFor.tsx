import Section from './Section';

const outcomes = [
  'A stronger first impression',
  'Better trust with customers',
  'Clearer messaging',
  'Mobile-first experience',
  'Lead-focused structure',
  'Faster launch speed',
  'Clean, scalable code',
  'A site the owner is proud to send people to',
];

export default function WhatYouPayFor() {
  return (
    <Section id="value" className="scroll-mt-32 py-24 sm:scroll-mt-36 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div className="reveal-on-scroll max-w-lg">
            <p className="font-kicker">The real investment</p>
            <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
              What You&apos;re Really Paying For
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-stone-400">
              Not decoration—a commercial asset that earns attention and holds up when prospects compare you to the
              competition.
            </p>
          </div>

          <ul className="reveal-on-scroll grid gap-px overflow-hidden rounded-2xl border border-stone-700/45 bg-stone-800/35 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item}
                className="flex items-center bg-[color:var(--color-dd-elevated)] px-7 py-6 text-sm font-medium text-stone-200 transition-colors hover:bg-[color:var(--color-dd-accent-muted)]"
              >
                <span className="mr-4 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-dd-accent)]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
