import { useEffect, useRef } from 'react';
import Button from './Button';
import RevealGroup from './RevealGroup';

function MockChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[color:color-mix(in_srgb,var(--color-dd-text)_8%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,white_92%,transparent),color-mix(in_srgb,var(--color-dd-cream)_88%,transparent))] px-3 py-2.5 sm:px-3.5 sm:py-3">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[color:color-mix(in_srgb,var(--color-dd-accent)_65%,var(--color-dd-sand))]" />
        <span className="h-2 w-2 rounded-full bg-[color:color-mix(in_srgb,var(--color-dd-champagne-mid)_55%,var(--color-dd-sand))]" />
        <span className="h-2 w-2 rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-text)_12%,transparent)] bg-[color:color-mix(in_srgb,white_75%,transparent)]" />
      </div>
      <div className="mx-auto min-w-0 flex-1 truncate text-center font-[family-name:var(--font-sans)] text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:color-mix(in_srgb,var(--color-dd-muted)_92%,transparent)] sm:text-[10px]">
        {url}
      </div>
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const parallaxA = useRef<HTMLDivElement>(null);
  const parallaxB = useRef<HTMLDivElement>(null);
  const parallaxC = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      return;
    }

    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      target.x = (e.clientX - r.left) / Math.max(r.width, 1);
      target.y = (e.clientY - r.top) / Math.max(r.height, 1);
    };

    const applyParallax = (el: HTMLDivElement | null, mx: number, my: number, rz: number) => {
      if (!el) return;
      const nx = (current.x - 0.5) * 2;
      const ny = (current.y - 0.5) * 2;
      el.style.transform = `translate3d(${nx * mx}px, ${ny * my}px, 0) rotate(${rz}deg)`;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.07;
      current.y += (target.y - current.y) * 0.07;

      const r = root.getBoundingClientRect();
      if (cursorRef.current) {
        const cx = current.x * r.width;
        const cy = current.y * r.height;
        cursorRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      }

      applyParallax(parallaxA.current, 18, 14, -5.5);
      applyParallax(parallaxB.current, -14, 11, 4.25);
      applyParallax(parallaxC.current, 16, -13, -3.5);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    root.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      root.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const mega = megaRef.current;
    if (!mega) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        mega.style.transform = `translate3d(0, ${Math.min(y * 0.035, 48)}px, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <RevealGroup className="hero-cinematic-root text-[color:#f4efe6]">
      <section
        ref={rootRef}
        aria-label="Introduction"
        className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[clamp(7rem,15vmin,9.75rem)] pb-16 sm:pb-20 lg:pt-[clamp(11rem,18vmin,13rem)] xl:pt-[clamp(12rem,20vmin,15rem)] lg:pb-28"
      >
        <div className="hero-cinematic-bg" aria-hidden />
        <div className="hero-cinematic-urban" aria-hidden />
        <div className="hero-cinematic-grid" aria-hidden />
        <div className="hero-cinematic-chrome" aria-hidden />
        <div className="hero-cinematic-leak" aria-hidden />
        <div className="hero-cinematic-leak hero-cinematic-leak--2" aria-hidden />
        <div className="hero-cinematic-vhs" aria-hidden />
        <div className="hero-cinematic-scan" aria-hidden />
        <div className="hero-cinematic-vignette" aria-hidden />

        <div ref={megaRef} className="hero-mega-field" aria-hidden>
          <span
            className="hero-mega-word left-[-5%] top-[5%] text-[clamp(4.875rem,18vw,13.5rem)] sm:left-[-2.5%]"
            style={{ animationDelay: '-3s' }}
          >
            DIGITAL
          </span>
          <span
            className="hero-mega-word right-[-20%] top-[27%] text-[clamp(3.75rem,13.5vw,10.25rem)] sm:right-[-9%]"
            style={{ animationDelay: '-1.2s' }}
          >
            MOTION
          </span>
          <span
            className="hero-mega-word left-[3%] bottom-[23%] text-[clamp(3.25rem,11.25vw,8.75rem)] sm:left-[7%]"
            style={{ animationDelay: '-5s' }}
          >
            CREATIVE
          </span>
          <span
            className="hero-mega-word right-[-7%] bottom-[5%] text-[clamp(4.25rem,15vw,11.5rem)] sm:right-[3%]"
            style={{ animationDelay: '-7s' }}
          >
            PREMIUM
          </span>
        </div>

        <div className="hero-cursor-glow" ref={cursorRef} aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid flex-1 items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-14">
            <div className="relative max-w-[42rem] lg:max-w-none lg:pr-2">
              <p className="font-kicker reveal-on-scroll">Creative digital studio — Bay Area</p>

              <h1 className="reveal-on-scroll mt-8 font-[family-name:var(--font-hero-condensed)] text-[clamp(3.95rem,12.25vw,8.85rem)] font-normal uppercase leading-[0.86] tracking-[0.008em] [transition-delay:40ms]">
                <span className="hero-headline-primary block text-[color:color-mix(in_srgb,#f4efe6_98%,transparent)]">
                  Websites that move
                </span>
                <span className="hero-headline-primary block text-[color:color-mix(in_srgb,#f4efe6_90%,transparent)]">
                  brands forward.
                </span>
                <span className="reveal-on-scroll mt-7 block max-w-[36ch] font-[family-name:var(--font-display)] text-[clamp(1.85rem,4.6vw,3.35rem)] font-semibold lowercase leading-[1.06] tracking-[-0.02em] text-[color:color-mix(in_srgb,var(--color-dd-accent)_92%,#f4efe6)] [font-feature-settings:'liga'_1] [transition-delay:120ms]">
                  <span className="italic">Premium digital presence — for operators done playing small.</span>
                </span>
              </h1>

              <p
                className="reveal-on-scroll mt-10 max-w-lg text-base font-light leading-[1.75] text-[color:color-mix(in_srgb,#e8dfd2_72%,#2a2826)] sm:text-lg [transition-delay:180ms]"
                style={{ fontWeight: 300 }}
              >
                Built with motion, clarity, and intent — a digital presence that moves like a campaign, reads like an
                editorial, and converts like a product team.
              </p>

              <div className="reveal-on-scroll mt-12 flex flex-col gap-4 sm:flex-row sm:items-center [transition-delay:250ms]">
                <Button variant="primary" href="#contact" className="w-full rounded-2xl sm:w-auto sm:px-10 sm:py-4">
                  Start a project
                </Button>
                <Button variant="secondary" href="#portfolio" className="w-full rounded-2xl sm:w-auto sm:px-10 sm:py-4">
                  View selected work
                </Button>
              </div>
            </div>

            <div className="relative mx-auto min-h-[min(70dvh,640px)] w-full max-w-lg lg:mx-0 lg:max-w-none lg:min-h-[580px]">
              <div
                className="pointer-events-none absolute -left-[6%] top-[16%] z-0 hidden h-[48%] w-[54%] rounded-[2rem] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-dd-accent-soft)_100%,transparent),transparent_65%)] blur-3xl lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[10%] right-[-2%] z-0 h-[40%] w-[50%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-champagne-mid)_32%,transparent),transparent_70%)] blur-3xl"
                aria-hidden
              />

              <div
                ref={parallaxA}
                className="absolute left-0 top-[0%] z-[3] w-[88%] max-w-[392px] will-change-transform sm:top-[3%] sm:w-[86%] lg:left-[2%] lg:w-[80%] lg:max-w-[418px]"
              >
                <div className="hero-mock-hover-wrap hero-float-depth">
                  <div className="hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                    <MockChrome url="premiumbarbercollege.com" />
                    <div className="relative aspect-[16/15] overflow-hidden bg-[linear-gradient(180deg,#2c2622_0%,#1a1816_100%)]">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--color-dd-accent)_40%,transparent),transparent_55%)] [opacity:0.85]" />
                      <div className="relative h-full overflow-hidden">
                        <div className="hero-mock-inner flex flex-col gap-3 px-4 py-4 sm:gap-3.5 sm:px-5 sm:py-5">
                          <div className="flex items-end justify-between gap-3">
                            <p className="font-[family-name:var(--font-display)] text-lg font-semibold italic text-[color:var(--color-dd-off-white)] sm:text-xl">
                              Premium Barber College
                            </p>
                            <span className="shrink-0 rounded-full border border-[color:color-mix(in_srgb,white_22%,transparent)] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:color-mix(in_srgb,var(--color-dd-off-white)_78%,transparent)]">
                              Enroll
                            </span>
                          </div>
                          <div className="h-24 rounded-xl bg-[linear-gradient(125deg,color-mix(in_srgb,white_14%,transparent),transparent)] sm:h-28" />
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <div className="h-20 rounded-lg bg-[color:color-mix(in_srgb,var(--color-dd-accent)_32%,#2a2826)] sm:h-[5.25rem]" />
                            <div className="h-20 rounded-lg bg-[color:color-mix(in_srgb,white_12%,transparent)] sm:h-[5.25rem]" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-[88%] rounded-full bg-[color:color-mix(in_srgb,white_18%,transparent)]" />
                            <div className="h-2 w-[62%] rounded-full bg-[color:color-mix(in_srgb,white_11%,transparent)]" />
                          </div>
                          <div className="h-28 rounded-xl border border-[color:color-mix(in_srgb,white_12%,transparent)] bg-[color:color-mix(in_srgb,#000_38%,transparent)] sm:h-32" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={parallaxB}
                className="absolute right-[-2%] top-[36%] z-[4] w-[74%] max-w-[348px] will-change-transform sm:right-[2%] lg:top-[34%] lg:w-[70%]"
              >
                <div className="hero-mock-hover-wrap hero-float-depth--b">
                  <div className="hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                    <MockChrome url="pristineconstruction.co" />
                    <div className="relative aspect-[16/14] overflow-hidden bg-[linear-gradient(180deg,#ebe4d8_0%,#d9d1c4_100%)]">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,color-mix(in_srgb,white_62%,transparent)_95%)] opacity-45 mix-blend-multiply" />
                      <div className="relative h-full overflow-hidden">
                        <div className="hero-mock-inner--mid flex flex-col gap-3 px-4 py-4 text-[color:var(--color-dd-text)] sm:gap-3.5 sm:px-5 sm:py-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-[family-name:var(--font-hero-condensed)] text-2xl uppercase leading-none tracking-[0.04em] sm:text-[1.65rem]">
                                Pristine
                              </p>
                              <p className="mt-1 font-[family-name:var(--font-sans)] text-[10px] font-medium uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--color-dd-text)_52%,transparent)]">
                                Construction
                              </p>
                            </div>
                            <div className="h-10 w-10 rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-text)_12%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-text)_6%,transparent)]" />
                          </div>
                          <div className="h-px w-full bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-dd-text)_20%,transparent),transparent)]" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-2 h-24 rounded-lg bg-[color:var(--color-dd-text)] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] sm:h-28" />
                            <div className="flex flex-col gap-2">
                              <div className="h-11 rounded-md bg-[color:color-mix(in_srgb,var(--color-dd-text)_12%,transparent)]" />
                              <div className="h-11 rounded-md bg-[color:color-mix(in_srgb,var(--color-dd-text)_8%,transparent)]" />
                            </div>
                          </div>
                          <div className="h-32 rounded-xl bg-[linear-gradient(180deg,var(--color-dd-off-white),var(--color-dd-sand))] shadow-inner sm:h-36" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={parallaxC}
                className="absolute bottom-[0%] left-[6%] z-[5] w-[66%] max-w-[308px] will-change-transform sm:bottom-[2%] sm:left-[12%] lg:bottom-[3%] lg:left-[16%] lg:w-[60%] lg:max-w-[328px]"
              >
                <div className="hero-mock-hover-wrap hero-float-depth--c">
                  <div className="hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                    <MockChrome url="eliteprecisiongpr.com" />
                    <div className="relative aspect-[16/14] overflow-hidden bg-[linear-gradient(160deg,#1f2328_0%,#121418_100%)]">
                      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_52px,color-mix(in_srgb,white_6%,transparent)_53px)]" />
                      </div>
                      <div className="relative h-full overflow-hidden">
                        <div className="hero-mock-inner--slow flex flex-col gap-3 px-4 py-4 text-[color:var(--color-dd-off-white)] sm:gap-3.5 sm:px-5 sm:py-5">
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:color-mix(in_srgb,var(--color-dd-off-white)_58%,transparent)]">
                              Elite Precision GPR
                            </p>
                            <span className="h-1.5 w-10 rounded-full bg-[linear-gradient(90deg,var(--color-dd-accent),var(--color-dd-off-white))] [opacity:0.85]" />
                          </div>
                          <div className="relative overflow-hidden rounded-xl border border-[color:color-mix(in_srgb,white_14%,transparent)] bg-[color:color-mix(in_srgb,#000_42%,transparent)] p-4 sm:p-5">
                            <div className="mb-3 flex gap-1">
                              {[0, 1, 2, 3].map((i) => (
                                <span
                                  key={i}
                                  className="h-6 flex-1 rounded-sm bg-[color:color-mix(in_srgb,var(--color-dd-accent)_24%,#1f2328)]"
                                />
                              ))}
                            </div>
                            <div className="h-16 rounded-lg bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-dd-accent)_38%,transparent),transparent)] sm:h-[4.5rem]" />
                          </div>
                          <div className="flex gap-2">
                            <div className="h-14 flex-1 rounded-lg bg-[color:color-mix(in_srgb,white_10%,transparent)]" />
                            <div className="h-14 w-14 shrink-0 rounded-lg border border-[color:color-mix(in_srgb,var(--color-dd-accent)_38%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-accent)_14%,transparent)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-[10%] bottom-[8%] z-[2] mx-auto h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-text)_16%,transparent)] to-transparent opacity-70"
                aria-hidden
              />
            </div>
          </div>

          <div className="reveal-on-scroll relative z-10 mt-20 flex flex-col overflow-hidden border-y border-[color:color-mix(in_srgb,var(--color-dd-text)_8%,transparent)] bg-[linear-gradient(95deg,color-mix(in_srgb,var(--color-dd-off-white)_88%,transparent),color-mix(in_srgb,var(--color-dd-cream)_78%,transparent))] px-6 py-10 shadow-[0_40px_100px_-56px_color-mix(in_srgb,var(--color-dd-text)_18%,transparent)] backdrop-blur-xl sm:mt-24 sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between [transition-delay:280ms]">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[18%] top-[-55%] h-[210%] w-[52%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent)_14%,transparent),transparent_68%)] blur-3xl"
            />
            <p className="relative max-w-2xl text-sm font-light leading-[1.85] text-[color:color-mix(in_srgb,var(--color-dd-muted)_98%,var(--color-dd-text))] sm:text-[15px]">
              For operators ready to look as intentional as the work behind the brand — flagship sites with cinematic pacing
              and quiet confidence.
            </p>
            <div className="relative mt-8 flex shrink-0 flex-col gap-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[color:var(--color-dd-accent)]">
                Now booking Q2 / Q3
              </span>
              <Button variant="primary" href="#contact" className="rounded-2xl px-8 py-3.5 sm:px-9">
                Inquire
              </Button>
            </div>
          </div>

          <div className="pointer-events-none relative z-10 mt-14 px-2 sm:mt-16" aria-hidden>
            <div className="rule-accent opacity-55 [background:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-dd-accent)_38%,transparent),color-mix(in_srgb,var(--color-dd-champagne-mid)_22%,transparent),transparent)]" />
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
