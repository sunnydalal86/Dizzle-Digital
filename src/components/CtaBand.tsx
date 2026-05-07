import Section from './Section';
import Button from './Button';

export default function CtaBand() {
  return (
    <Section
      aria-labelledby="cta-heading"
      className="dd-surface-grain relative border-t border-[color:color-mix(in_srgb,var(--color-dd-border)_100%,transparent)] bg-[color:var(--color-dd-cream)] py-36 sm:py-44 lg:py-[min(12rem,16vw)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_0%,rgba(245,232,220,0.55),transparent_58%),radial-gradient(ellipse_55%_48%_at_100%_88%,color-mix(in_srgb,var(--color-dd-accent)_7%,transparent),transparent_52%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[88rem] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal-on-scroll glass-panel mx-auto overflow-hidden px-10 py-24 text-center sm:px-16 sm:py-28 lg:max-w-[58rem] lg:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[18%] top-[-38%] h-[118%] w-[62%] bg-[linear-gradient(125deg,color-mix(in_srgb,var(--color-dd-accent)_14%,transparent),transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-28%] right-[-22%] h-[88%] w-[52%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-champagne-mid)_18%,transparent),transparent_72%)] blur-3xl"
          />

          <p className="font-kicker relative text-[color:var(--color-dd-muted)]">Studio availability</p>
          <h2
            id="cta-heading"
            className="relative mt-9 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.022em] text-[color:var(--color-dd-text)]"
          >
            Your standards already belong in the foreground.{' '}
            <span className="mt-2 block font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              Put the site beside them.
            </span>
          </h2>
          <p
            className="relative mx-auto mt-12 max-w-lg text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]"
            style={{ fontWeight: 300 }}
          >
            Let&apos;s shape a presence that earns trust quietly — cinematic, disciplined, unmistakably yours.
          </p>
          <div className="relative mt-16 flex justify-center">
            <Button variant="primary" href="#contact" className="!px-12">
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
