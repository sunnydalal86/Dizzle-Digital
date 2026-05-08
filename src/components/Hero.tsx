import Button from './Button';
import RevealGroup from './RevealGroup';

export default function Hero() {
  /* Solid orange CTA — reads clearly on dark hero art */
  const btnHeroTalk =
    '!border-transparent !bg-[#ea5f26] !text-[#fffefb] !shadow-[0_12px_38px_-14px_rgba(234,95,38,0.55),0_0_0_1px_rgba(255,255,255,0.16)_inset] hover:!bg-[#ff742e] hover:!text-white hover:!-translate-y-px hover:!shadow-[0_18px_48px_-14px_rgba(255,116,46,0.52),0_0_48px_-18px_rgba(255,140,90,0.22)] active:!translate-y-0 active:!shadow-[0_8px_26px_-12px_rgba(234,95,38,0.45)]';

  return (
    <RevealGroup className="hero-cinematic-root text-[color:#faf8f5]">
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
              <h1 className="reveal-on-scroll font-[family-name:var(--font-hero-condensed)] text-[clamp(2.65rem,8.6vw,6.35rem)] font-normal uppercase leading-[0.95] tracking-[0.02em] [transition-delay:40ms]">
                <span className="hero-headline-primary block text-[color:#ffffff]">
                  <span className="block">Websites that</span>
                  <span className="block text-[color:#ff7814] drop-shadow-[0_0_26px_rgba(255,96,24,0.95),0_0_52px_rgba(255,130,40,0.45),0_1px_0_rgba(255,240,220,0.35)]">move</span>
                  <span className="block">brands forward.</span>
                </span>
              </h1>
            </div>
          </div>
          <div className="min-h-0 flex-1 basis-0" aria-hidden />

          <div className="w-full shrink-0 pb-1 pt-2 sm:pb-2">
            <div className="hero-copy-stack relative w-full max-w-[min(42rem,calc(100vw-2.5rem))] lg:max-w-[min(38rem,100%)] xl:max-w-[41rem]">
              <div className="reveal-on-scroll [transition-delay:120ms]">
                <Button variant="primary" href="#contact" className={`rounded-xl px-9 py-3.5 sm:py-4 ${btnHeroTalk}`}>
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
