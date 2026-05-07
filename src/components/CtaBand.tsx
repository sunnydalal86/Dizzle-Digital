import Section from './Section';
import Button from './Button';

export default function CtaBand() {
  return (
    <Section aria-labelledby="cta-heading" className="border-t border-white/[0.05] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="reveal-on-scroll relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-sky-500/15 via-neutral-950 to-neutral-950 p-10 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.2),transparent_55%)]"
          />
          <h2 id="cta-heading" className="font-[family-name:var(--font-display)] relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop apologizing for your website
          </h2>
          <p className="relative mt-4 text-lg font-normal leading-relaxed text-neutral-400">
            Tell us what you do, where you&apos;re stuck, and what “launch” looks like—we&apos;ll figure out the rest.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" href="#contact" className="!px-8">
              Say hey
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
