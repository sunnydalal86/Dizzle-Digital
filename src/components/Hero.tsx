import Button from './Button';
import RevealGroup from './RevealGroup';

export default function Hero() {
  const btnSecondaryHero =
    'border border-[color:color-mix(in_srgb,#fffbf7_18%,transparent)] bg-[color:color-mix(in_srgb,#fffbf7_8%,transparent)] text-[color:color-mix(in_srgb,#fffbf7_96%,transparent)] shadow-[0_0_0_1px_color-mix(in_srgb,#000_55%,transparent)_inset] backdrop-blur-md hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_45%,transparent)] hover:bg-[color:color-mix(in_srgb,#fffbf7_12%,transparent)] hover:shadow-[0_0_40px_-20px_color-mix(in_srgb,var(--color-dd-accent)_25%,transparent)]';

  const btnGlassBar =
    'border border-[color:color-mix(in_srgb,#fffbf7_14%,transparent)] bg-[color:color-mix(in_srgb,#fffbf7_10%,transparent)] text-[color:#fffbf7] backdrop-blur-md hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_40%,transparent)]';

  return (
    <RevealGroup className="hero-cinematic-root text-[color:#faf8f5]">
      <section
        aria-label="Introduction"
        className="hero-intro-section relative flex min-h-0 flex-col overflow-x-hidden justify-start pb-7 sm:pb-9"
      >
        <div className="hero-visual-stack" aria-hidden>
          <div className="hero-cinematic-bg" aria-hidden />
          <div className="hero-cinematic-urban" aria-hidden />
          <div className="hero-cinematic-grid" aria-hidden />

          <div className="hero-bg-art-layer pointer-events-none absolute inset-0 z-[2] overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
              <div className="hero-bg-art" aria-hidden>
                <div className="hero-bg-art__shift">
                  <div className="hero-bg-art__scale">
                    <img
                      src="/hero/hero-bg-hires.png"
                      alt=""
                      width={1024}
                      height={819}
                      className="hero-bg-art__img"
                      decoding="async"
                      fetchPriority="high"
                      draggable={false}
                    />
                    <div className="hero-bg-art__tone" aria-hidden />
                    <div className="hero-bg-art__blend" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-cinematic-vignette" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col px-5 sm:px-9 lg:px-12 xl:px-[clamp(2rem,4.5vw,4.25rem)]">
          <div className="flex flex-col justify-start pb-3 pt-2 lg:pb-8 lg:pt-5">
            <div className="hero-copy-stack relative w-full max-w-[min(42rem,calc(100vw-2.5rem))] lg:max-w-[min(38rem,100%)] xl:max-w-[41rem]">
              <p className="font-kicker hero-kicker reveal-on-scroll">Premium websites. Real growth.</p>

              <h1 className="reveal-on-scroll mt-9 font-[family-name:var(--font-hero-condensed)] text-[clamp(2.65rem,8.6vw,6.35rem)] font-normal uppercase leading-[0.95] tracking-[0.02em] lg:mt-11 [transition-delay:40ms]">
                <span className="hero-headline-primary inline-block max-w-[22ch] text-[color:color-mix(in_srgb,#fffefb_99%,transparent)] lg:max-w-none">
                  Websites that{' '}
                  <span className="text-[color:color-mix(in_srgb,var(--color-dd-accent)_96%,#fffdf9)]">move</span>{' '}
                  brands forward.
                </span>
              </h1>

              <div className="reveal-on-scroll mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:mt-11 [transition-delay:110ms]">
                <Button variant="primary" href="#portfolio" className="w-full rounded-xl sm:w-auto sm:min-w-[12.5rem] sm:py-4">
                  View our work <span aria-hidden className="text-[1.05rem] font-normal leading-none opacity-95">→</span>
                </Button>
                <Button variant="secondary" href="#contact" className={`w-full rounded-xl sm:w-auto sm:min-w-[12.5rem] sm:py-4 ${btnSecondaryHero}`}>
                  Let&apos;s talk <span aria-hidden className="text-[1.05rem] font-normal leading-none opacity-95">→</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll relative z-10 mt-16 flex flex-col gap-6 overflow-hidden rounded-[1.25rem] border border-[color:color-mix(in_srgb,#f4efe6_34%,transparent)] bg-[color:color-mix(in_srgb,#050608_14%,transparent)] px-5 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] sm:mt-[4.5rem] sm:gap-8 sm:px-8 sm:py-9 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-12 [transition-delay:280ms]">
            <p className="relative max-w-2xl text-[14px] font-light leading-[1.85] text-[color:color-mix(in_srgb,#fffefb_99%,#faf8f5)] sm:text-[15px] [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_10px_36px_rgba(0,0,0,0.65)]">
              If your business is ready to look as sharp online as it does in person, we&apos;ll design a fast, clear site that
              builds trust — and makes the next step obvious for every visitor.
            </p>
            <div className="relative shrink-0">
              <Button variant="secondary" href="#contact" className={`rounded-xl px-9 py-3.5 sm:py-4 ${btnGlassBar}`}>
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
