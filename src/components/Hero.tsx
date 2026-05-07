import { useEffect, useRef } from 'react';
import Button from './Button';
import RevealGroup from './RevealGroup';

function MockChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[color:color-mix(in_srgb,#f4efe6_12%,transparent)] bg-[color:color-mix(in_srgb,#1a1918_88%,transparent)] px-3 py-2.5 backdrop-blur-md sm:px-3.5 sm:py-3">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[color:color-mix(in_srgb,#b8592e_55%,#2a2826)]" />
        <span className="h-2 w-2 rounded-full bg-[color:color-mix(in_srgb,#c9a96b_45%,#2a2826)]" />
        <span className="h-2 w-2 rounded-full bg-[color:color-mix(in_srgb,#f4efe6_18%,#2a2826)]" />
      </div>
      <div className="mx-auto min-w-0 flex-1 truncate text-center font-[family-name:var(--font-sans)] text-[9px] font-medium uppercase tracking-[0.24em] text-[color:color-mix(in_srgb,#f4efe6_48%,transparent)] sm:text-[10px]">
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
        className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-[clamp(5.75rem,12vmin,8.5rem)] pb-12 sm:pb-16 lg:pt-[clamp(8rem,14vmin,11rem)] lg:pb-20"
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
            className="hero-mega-word left-[-4%] top-[6%] text-[clamp(4.5rem,16vw,12rem)] sm:left-[-2%]"
            style={{ animationDelay: '-3s' }}
          >
            DIGITAL
          </span>
          <span
            className="hero-mega-word right-[-18%] top-[28%] text-[clamp(3.5rem,12vw,9rem)] sm:right-[-8%]"
            style={{ animationDelay: '-1.2s' }}
          >
            MOTION
          </span>
          <span
            className="hero-mega-word left-[4%] bottom-[22%] text-[clamp(3rem,10vw,8rem)] opacity-80 sm:left-[8%]"
            style={{ animationDelay: '-5s' }}
          >
            CREATIVE
          </span>
          <span
            className="hero-mega-word right-[-6%] bottom-[6%] text-[clamp(4rem,14vw,10.5rem)] sm:right-[4%]"
            style={{ animationDelay: '-7s' }}
          >
            PREMIUM
          </span>
        </div>

        <div className="hero-cursor-glow" ref={cursorRef} aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-[88rem] flex-1 flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-16">
            <div className="relative max-w-[40rem] lg:max-w-none lg:pr-4">
              <p className="font-kicker reveal-on-scroll text-[color:color-mix(in_srgb,#e8dfd2_82%,#b8592e)]">
                Creative digital studio — Dallas
              </p>

              <h1 className="reveal-on-scroll mt-7 font-[family-name:var(--font-hero-condensed)] text-[clamp(3.35rem,10.5vw,7.25rem)] font-normal uppercase leading-[0.9] tracking-[0.01em] [transition-delay:70ms]">
                <span className="block text-[color:color-mix(in_srgb,#f4efe6_96%,transparent)]">Premium websites</span>
                <span className="block text-[color:color-mix(in_srgb,#f4efe6_88%,transparent)]">for brands</span>
                <span className="mt-3 block max-w-[20ch] font-[family-name:var(--font-display)] text-[clamp(1.65rem,4.2vw,3rem)] font-semibold lowercase leading-[1.05] tracking-[-0.02em] text-[color:color-mix(in_srgb,#b8592e_92%,#f4efe6)] [font-feature-settings:'liga'_1]">
                  <span className="italic">done playing small.</span>
                </span>
              </h1>

              <p
                className="reveal-on-scroll mt-8 max-w-md text-base font-light leading-[1.7] text-[color:color-mix(in_srgb,#e8dfd2_72%,#2a2826)] sm:text-lg [transition-delay:120ms]"
                style={{ fontWeight: 300 }}
              >
                Built with motion, clarity, and intent — digital presence with personality.
              </p>

              <div className="reveal-on-scroll mt-12 flex flex-col gap-4 sm:flex-row sm:items-center [transition-delay:180ms]">
                <Button
                  variant="primary"
                  href="#contact"
                  className="w-full rounded-2xl shadow-[0_20px_52px_-18px_color-mix(in_srgb,var(--color-dd-accent)_50%,transparent),0_0_0_1px_color-mix(in_srgb,#f4efe6_22%,transparent)_inset] sm:w-auto sm:px-10 sm:py-4"
                >
                  Start a project
                </Button>
                <Button
                  variant="secondary"
                  href="#portfolio"
                  className="w-full rounded-2xl border-[color:color-mix(in_srgb,#f4efe6_18%,transparent)] bg-[color:color-mix(in_srgb,#f4efe6_10%,transparent)] text-[color:#f4efe6] shadow-[0_16px_44px_-28px_rgba(0,0,0,0.65)] backdrop-blur-md hover:border-[color:color-mix(in_srgb,#b8592e_38%,transparent)] hover:bg-[color:color-mix(in_srgb,#f4efe6_14%,transparent)] hover:text-[color:#fdfcfa] sm:w-auto sm:px-10 sm:py-4"
                >
                  View selected work
                </Button>
              </div>
            </div>

            <div className="relative mx-auto min-h-[min(68dvh,620px)] w-full max-w-lg lg:mx-0 lg:max-w-none lg:min-h-[560px]">
              <div
                className="pointer-events-none absolute -left-[8%] top-[18%] z-0 hidden h-[46%] w-[52%] rounded-[2rem] bg-[linear-gradient(135deg,color-mix(in_srgb,#b8592e_22%,transparent),transparent_62%)] blur-3xl lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[12%] right-[-4%] z-0 h-[38%] w-[48%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#c9a96b_26%,transparent),transparent_68%)] blur-3xl"
                aria-hidden
              />

              <div ref={parallaxA} className="absolute left-0 top-[2%] z-[3] w-[86%] max-w-[380px] will-change-transform sm:top-[4%] lg:left-[4%] lg:w-[78%] lg:max-w-[400px]">
                <div className="hero-float-depth hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                  <MockChrome url="premiumbarbercollege.com" />
                  <div className="relative aspect-[16/15] overflow-hidden bg-[linear-gradient(180deg,#241f1c_0%,#1a1816_100%)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,#b8592e_35%,transparent),transparent_55%)] opacity-80" />
                    <div className="relative h-full overflow-hidden">
                      <div className="hero-mock-inner flex flex-col gap-3 px-4 py-4 sm:gap-3.5 sm:px-5 sm:py-5">
                        <div className="flex items-end justify-between gap-3">
                          <p className="font-[family-name:var(--font-display)] text-lg font-semibold italic text-[#f4efe6] sm:text-xl">
                            Premium Barber College
                          </p>
                          <span className="shrink-0 rounded-full border border-[color:color-mix(in_srgb,#f4efe6_18%,transparent)] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:color-mix(in_srgb,#e8dfd2_75%,transparent)]">
                            Enroll
                          </span>
                        </div>
                        <div className="h-24 rounded-xl bg-[linear-gradient(125deg,color-mix(in_srgb,#f4efe6_12%,transparent),transparent)] sm:h-28" />
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div className="h-20 rounded-lg bg-[color:color-mix(in_srgb,#b8592e_28%,#2a2826)] sm:h-[5.25rem]" />
                          <div className="h-20 rounded-lg bg-[color:color-mix(in_srgb,#f4efe6_10%,transparent)] sm:h-[5.25rem]" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-[88%] rounded-full bg-[color:color-mix(in_srgb,#f4efe6_16%,transparent)]" />
                          <div className="h-2 w-[62%] rounded-full bg-[color:color-mix(in_srgb,#f4efe6_10%,transparent)]" />
                        </div>
                        <div className="h-28 rounded-xl border border-[color:color-mix(in_srgb,#f4efe6_10%,transparent)] bg-[color:color-mix(in_srgb,#000_35%,transparent)] sm:h-32" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={parallaxB} className="absolute right-[-2%] top-[38%] z-[4] w-[72%] max-w-[340px] will-change-transform sm:right-[2%] lg:top-[36%] lg:w-[68%]">
                <div className="hero-float-depth--b hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                  <MockChrome url="pristineconstruction.co" />
                  <div className="relative aspect-[16/14] overflow-hidden bg-[linear-gradient(180deg,#ebe4d8_0%,#ddd5c8_100%)]">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,color-mix(in_srgb,#f4efe6_65%,transparent)_95%)] opacity-40 mix-blend-multiply" />
                    <div className="relative h-full overflow-hidden">
                      <div className="hero-mock-inner--mid flex flex-col gap-3 px-4 py-4 text-[#2a2825] sm:gap-3.5 sm:px-5 sm:py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-[family-name:var(--font-hero-condensed)] text-2xl uppercase leading-none tracking-[0.04em] sm:text-[1.65rem]">
                              Pristine
                            </p>
                            <p className="mt-1 font-[family-name:var(--font-sans)] text-[10px] font-medium uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,#2a2825_55%,transparent)]">
                              Construction
                            </p>
                          </div>
                          <div className="h-10 w-10 rounded-full border border-[color:color-mix(in_srgb,#2a2825_12%,transparent)] bg-[color:color-mix(in_srgb,#2a2825_6%,transparent)]" />
                        </div>
                        <div className="h-px w-full bg-[linear-gradient(90deg,color-mix(in_srgb,#2a2825_22%,transparent),transparent)]" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-2 h-24 rounded-lg bg-[#2a2825] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] sm:h-28" />
                          <div className="flex flex-col gap-2">
                            <div className="h-11 rounded-md bg-[color:color-mix(in_srgb,#2a2825_14%,transparent)]" />
                            <div className="h-11 rounded-md bg-[color:color-mix(in_srgb,#2a2825_10%,transparent)]" />
                          </div>
                        </div>
                        <div className="h-32 rounded-xl bg-[linear-gradient(180deg,#f4efe6,#ebe4d8)] shadow-inner sm:h-36" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={parallaxC} className="absolute bottom-[0%] left-[8%] z-[5] w-[64%] max-w-[300px] will-change-transform sm:bottom-[2%] sm:left-[14%] lg:bottom-[4%] lg:left-[18%] lg:w-[58%] lg:max-w-[320px]">
                <div className="hero-float-depth--c hero-glass-mock overflow-hidden rounded-2xl sm:rounded-[1.35rem]">
                  <MockChrome url="eliteprecisiongpr.com" />
                  <div className="relative aspect-[16/14] overflow-hidden bg-[linear-gradient(160deg,#1f2328_0%,#15171b_100%)]">
                    <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_52px,color-mix(in_srgb,#f4efe6_5%,transparent)_53px)]" />
                    </div>
                    <div className="relative h-full overflow-hidden">
                      <div className="hero-mock-inner--slow flex flex-col gap-3 px-4 py-4 text-[#f4efe6] sm:gap-3.5 sm:px-5 sm:py-5">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-[family-name:var(--font-sans)] text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:color-mix(in_srgb,#f4efe6_55%,transparent)]">
                            Elite Precision GPR
                          </p>
                          <span className="h-1.5 w-10 rounded-full bg-[linear-gradient(90deg,#b8592e,#f4efe6)] opacity-80" />
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-[color:color-mix(in_srgb,#f4efe6_12%,transparent)] bg-[color:color-mix(in_srgb,#000_40%,transparent)] p-4 sm:p-5">
                          <div className="mb-3 flex gap-1">
                            {[0, 1, 2, 3].map((i) => (
                              <span key={i} className="h-6 flex-1 rounded-sm bg-[color:color-mix(in_srgb,#b8592e_22%,#1f2328)]" />
                            ))}
                          </div>
                          <div className="h-16 rounded-lg bg-[linear-gradient(90deg,color-mix(in_srgb,#b8592e_35%,transparent),transparent)] sm:h-[4.5rem]" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-14 flex-1 rounded-lg bg-[color:color-mix(in_srgb,#f4efe6_8%,transparent)]" />
                          <div className="h-14 w-14 shrink-0 rounded-lg border border-[color:color-mix(in_srgb,#b8592e_35%,transparent)] bg-[color:color-mix(in_srgb,#b8592e_12%,transparent)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-[10%] bottom-[8%] z-[2] mx-auto h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,#f4efe6_22%,transparent)] to-transparent opacity-70"
                aria-hidden
              />
            </div>
          </div>

          <div className="reveal-on-scroll relative z-10 mt-16 overflow-hidden rounded-[1.35rem] border border-[color:color-mix(in_srgb,#f4efe6_12%,transparent)] bg-[color:color-mix(in_srgb,#1a1918_55%,transparent)] px-6 py-7 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:mt-20 sm:flex sm:items-center sm:justify-between sm:px-10 sm:py-8 [transition-delay:220ms]">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[15%] top-[-60%] h-[220%] w-[55%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#b8592e_22%,transparent),transparent_68%)] blur-3xl"
            />
            <p className="relative max-w-xl text-sm font-light leading-relaxed text-[color:color-mix(in_srgb,#e8dfd2_88%,#2a2826)] sm:text-[15px]">
              For operators and brands ready to look as intentional as the work behind the brand — modern sites with
              cinematic energy.
            </p>
            <div className="relative mt-6 flex shrink-0 flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:gap-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,#b8592e_85%,#f4efe6)]">
                Now booking Q2 / Q3
              </span>
              <Button variant="primary" href="#contact" className="rounded-2xl px-7 py-3.5 sm:px-8">
                Inquire
              </Button>
            </div>
          </div>

          <div className="pointer-events-none relative z-10 mt-10 px-2 sm:mt-12" aria-hidden>
            <div className="rule-accent opacity-60 [background:linear-gradient(90deg,transparent,color-mix(in_srgb,#b8592e_42%,transparent),color-mix(in_srgb,#f4efe6_14%,transparent),transparent)]" />
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
