import Button from './Button';
import RevealGroup from './RevealGroup';

export default function Hero() {
  /* Solid orange CTA — reads clearly on dark hero art */
  const btnHeroTalk =
    '!text-[14px] !tracking-[0.19em] sm:!text-[15px] !border-transparent !bg-[#ea5f26] !text-white !shadow-[0_12px_38px_-14px_rgba(234,95,38,0.55),0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:!bg-[#ff742e] hover:!text-white hover:!-translate-y-px hover:!shadow-[0_18px_48px_-14px_rgba(255,116,46,0.52),0_0_48px_-18px_rgba(255,140,90,0.22)] active:!translate-y-0 active:!shadow-[0_8px_26px_-12px_rgba(234,95,38,0.45)]';

  return (
    <RevealGroup className="hero-cinematic-root text-[color:#fffefb]">
      <section
        aria-label="Introduction"
        className="hero-intro-section relative flex min-h-[100svh] flex-col overflow-x-hidden justify-start pb-10 sm:pb-14"
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

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[92rem] flex-1 flex-col px-5 sm:px-9 lg:px-12 xl:px-[clamp(2rem,4.5vw,4.25rem)]">
          <div className="min-h-0 flex-1 basis-0" aria-hidden />
          <div className="flex w-full shrink-0 flex-col items-start">
            <div className="hero-copy-stack relative w-full max-w-[min(42rem,calc(100vw-2.5rem))] text-left lg:max-w-[min(38rem,100%)] xl:max-w-[41rem]">
              <p className="font-kicker hero-kicker reveal-on-scroll">
                Helping local businesses modernize their digital presence
              </p>

              <h1 className="reveal-on-scroll mt-9 text-[color:#fffcfa] font-[family-name:var(--font-hero-condensed)] text-[clamp(2.45rem,8.8vw,6.75rem)] font-normal uppercase leading-[0.95] tracking-[0.02em] lg:mt-11 [transition-delay:40ms]">
                <span className="block hero-headline-primary whitespace-nowrap">
                  Websites{'\u00A0'}that{'\u00A0'}
                  <span className="text-[#ea5f26]">move</span>
                </span>
                <span className="block hero-headline-primary">brands forward.</span>
              </h1>
            </div>
          </div>
          <div className="min-h-0 flex-1 basis-0" aria-hidden />

          <div className="w-full shrink-0 pb-1 pt-2 sm:pb-2">
            <div className="flex w-full flex-col items-start gap-6 sm:gap-7 lg:flex-row lg:items-center lg:gap-12 xl:gap-14">
              <div className="reveal-on-scroll shrink-0 [transition-delay:120ms]">
                <Button variant="primary" href="#contact" className={`rounded-xl px-9 py-3.5 sm:py-4 ${btnHeroTalk}`}>
                  Start Your Website
                </Button>
              </div>
              <p
                className="hero-intro-subcopy reveal-on-scroll max-w-2xl font-light leading-[1.85] text-[color:#fffefb] [transition-delay:140ms] lg:max-w-[34rem] lg:flex-1 lg:min-w-0"
              >
                Premium websites for businesses ready to look established, earn trust, and generate more leads.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
