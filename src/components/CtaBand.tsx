import Section from './Section';
import Button from './Button';

export default function CtaBand() {
  return (
    <Section
      aria-labelledby="cta-heading"
      className="relative border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-cream)] py-28 sm:py-36 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(245,232,220,0.65),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_90%,rgba(184,89,46,0.06),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll glass-panel mx-auto overflow-hidden rounded-[2rem] px-8 py-20 text-center shadow-[0_48px_100px_-48px_rgba(42,40,37,0.2)] sm:px-14 sm:py-24 lg:max-w-[56rem] lg:rounded-[2.25rem] lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[20%] top-[-40%] h-[120%] w-[65%] bg-[linear-gradient(125deg,color-mix(in_srgb,var(--color-dd-accent)_16%,transparent),transparent_62%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-25%] h-[90%] w-[55%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#c9a96b_22%,transparent),transparent_68%)] blur-3xl"
          />

          <p className="font-kicker relative text-[color:var(--color-dd-muted)]">Studio availability</p>
          <h2
            id="cta-heading"
            className="relative mt-10 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.8vw,3.65rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--color-dd-text)]"
          >
            Your standards already belong in the foreground.{' '}
            <span className="block font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              Put the site beside them.
            </span>
          </h2>
          <p
            className="relative mx-auto mt-10 max-w-lg text-lg font-light leading-[1.75] text-[color:var(--color-dd-muted)]"
            style={{ fontWeight: 300 }}
          >
            Let&apos;s shape a presence that earns trust quietly — cinematic, disciplined, unmistakably yours.
          </p>
          <div className="relative mt-14 flex justify-center">
            <Button variant="primary" href="#contact" className="!px-12">
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
