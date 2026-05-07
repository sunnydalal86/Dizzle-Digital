import Section from './Section';
import Button from './Button';

export default function CtaBand() {
  return (
    <Section aria-labelledby="cta-heading" className="border-t border-stone-800/45 bg-[color:var(--color-dd-surface)] py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="reveal-on-scroll relative overflow-hidden rounded-2xl border border-stone-700/45 bg-[color:var(--color-dd-elevated)] px-10 py-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,136,85,0.09),transparent_55%)]"
          />
          <p className="font-kicker relative mb-6">Ready when you are</p>
          <h2
            id="cta-heading"
            className="font-[family-name:var(--font-display)] relative text-3xl font-extrabold tracking-tight text-stone-50 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Your business already does premium work. Your website should show it.
          </h2>
          <p className="relative mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-400">
            Let&apos;s build a site that makes people trust you before they ever call.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Button variant="primary" href="#contact" className="!px-10">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
