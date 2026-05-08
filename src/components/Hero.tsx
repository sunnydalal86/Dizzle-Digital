import { useEffect, useRef } from 'react';
import Button from './Button';
import RevealGroup from './RevealGroup';

const PARTICLES = [
  { left: 12, top: 18, delay: '-2s', dur: '18s' },
  { left: 28, top: 44, delay: '-5s', dur: '22s' },
  { left: 52, top: 12, delay: '-1s', dur: '20s' },
  { left: 68, top: 36, delay: '-7s', dur: '24s' },
  { left: 84, top: 22, delay: '-3s', dur: '19s' },
  { left: 18, top: 62, delay: '-6s', dur: '21s' },
  { left: 44, top: 78, delay: '-4s', dur: '23s' },
  { left: 72, top: 68, delay: '-8s', dur: '17s' },
  { left: 56, top: 52, delay: '-2.5s', dur: '20s' },
  { left: 92, top: 48, delay: '-5.5s', dur: '22s' },
  { left: 8, top: 40, delay: '-1.5s', dur: '25s' },
  { left: 36, top: 28, delay: '-9s', dur: '18s' },
] as const;

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const sceneShiftRef = useRef<HTMLDivElement>(null);
  const scrollLayerFar = useRef<HTMLDivElement>(null);
  const scrollLayerMid = useRef<HTMLDivElement>(null);
  const scrollLayerNear = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const shift = sceneShiftRef.current;
    if (!root || !shift) return;
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqCoarse = window.matchMedia('(pointer: coarse)');
    if (mqReduce.matches || mqCoarse.matches) return;

    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };
    const LERP = 0.06;
    const EPS = 0.001;
    const IDLE_MS = 180;
    let rafId = 0;
    let lastMove = 0;
    let loopActive = false;

    const apply = () => {
      const nx = (current.x - 0.5) * 2;
      const ny = (current.y - 0.5) * 2;
      shift.style.transform = `translate3d(${nx * 10}px, ${ny * 8}px, 0)`;
    };

    const stopLoop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      loopActive = false;
    };

    const tick = () => {
      if (document.visibilityState === 'hidden') {
        stopLoop();
        return;
      }

      current.x += (target.x - current.x) * LERP;
      current.y += (target.y - current.y) * LERP;
      apply();

      const dx = target.x - current.x;
      const dy = target.y - current.y;
      const settled = Math.abs(dx) < EPS && Math.abs(dy) < EPS;
      const idle = performance.now() - lastMove > IDLE_MS;
      if (settled && idle) {
        stopLoop();
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (loopActive || document.visibilityState === 'hidden') return;
      loopActive = true;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      lastMove = performance.now();
      const r = root.getBoundingClientRect();
      target.x = (e.clientX - r.left) / Math.max(r.width, 1);
      target.y = (e.clientY - r.top) / Math.max(r.height, 1);
      startLoop();
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') stopLoop();
    };

    root.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      root.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      stopLoop();
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const far = scrollLayerFar.current;
    const mid = scrollLayerMid.current;
    const near = scrollLayerNear.current;
    let raf = 0;

    const onScroll = () => {
      if (document.visibilityState === 'hidden') return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const f = Math.min(y * 0.022, 36);
        const m = Math.min(y * 0.038, 56);
        const n = Math.min(y * 0.055, 72);
        if (far) far.style.transform = `translate3d(0, ${f}px, 0)`;
        if (mid) mid.style.transform = `translate3d(0, ${m}px, 0)`;
        if (near) near.style.transform = `translate3d(0, ${n}px, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const btnSecondaryHero =
    'border border-[color:color-mix(in_srgb,#f4efe6_14%,transparent)] bg-[color:color-mix(in_srgb,#f4efe6_6%,transparent)] text-[color:color-mix(in_srgb,#f4efe6_92%,transparent)] shadow-[0_0_0_1px_color-mix(in_srgb,#000_55%,transparent)_inset] backdrop-blur-md hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_45%,transparent)] hover:bg-[color:color-mix(in_srgb,#f4efe6_10%,transparent)] hover:shadow-[0_0_40px_-20px_color-mix(in_srgb,var(--color-dd-accent)_25%,transparent)]';

  const btnGlassBar =
    'border border-[color:color-mix(in_srgb,#f4efe6_12%,transparent)] bg-[color:color-mix(in_srgb,#f4efe6_8%,transparent)] text-[color:#f4efe6] backdrop-blur-md hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_40%,transparent)]';

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
        <div className="hero-cinematic-fog" aria-hidden />
        <div className="hero-cinematic-grain" aria-hidden />
        <div className="hero-cinematic-vignette" aria-hidden />

        <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-12 xl:gap-16">
            <div className="relative max-w-[44rem] lg:max-w-none lg:pr-4">
              <p className="font-kicker reveal-on-scroll tracking-[0.42em]">Digital studio — Bay Area</p>

              <h1 className="reveal-on-scroll mt-8 font-[family-name:var(--font-hero-condensed)] text-[clamp(3.5rem,10.8vw,7.75rem)] font-normal uppercase leading-[0.92] tracking-[0.02em] [transition-delay:40ms]">
                <span className="hero-headline-primary block text-[color:color-mix(in_srgb,#faf7f2_98%,transparent)]">
                  Websites that move
                </span>
                <span className="hero-headline-primary block text-[color:color-mix(in_srgb,#faf7f2_94%,transparent)]">
                  brands forward
                </span>
                <span className="reveal-on-scroll mt-6 block max-w-[38ch] font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.85vw,2.65rem)] font-medium lowercase leading-[1.12] tracking-[-0.028em] text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,#f4efe6)] [transition-delay:110ms]">
                  <span className="italic">
                    Premium digital presence — built for growth
                  </span>
                </span>
              </h1>

              <p
                className="reveal-on-scroll mt-9 max-w-lg text-[15px] font-light leading-[1.82] text-[color:color-mix(in_srgb,#d8cfc3_74%,#1a1816)] sm:text-[17px] [transition-delay:170ms]"
                style={{ fontWeight: 300 }}
              >
                We build modern websites with memorable visuals, intentional storytelling, and a polished experience your
                customers can trust — then we ship it with the care you&apos;d expect from a high-end agency.
              </p>

              <div className="reveal-on-scroll mt-11 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center [transition-delay:230ms]">
                <Button variant="primary" href="#contact" className="w-full rounded-xl sm:w-auto sm:min-w-[12.5rem] sm:py-4">
                  Start your project
                </Button>
                <Button variant="secondary" href="#portfolio" className={`w-full rounded-xl sm:w-auto sm:min-w-[12.5rem] sm:py-4 ${btnSecondaryHero}`}>
                  View our work
                </Button>
              </div>
            </div>

            <div className="relative mx-auto min-h-[min(68dvh,600px)] w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:min-h-[580px]">
              <div ref={sceneShiftRef} className="hero-studio-mouse-shift absolute inset-0 will-change-transform">
                <div ref={scrollLayerFar} className="hero-studio-layer hero-studio-layer--far" aria-hidden>
                  <div className="hero-studio-horizon" />
                  <div className="hero-studio-terrain" />
                  <div className="hero-studio-grid-floor" />
                </div>

                <div ref={scrollLayerMid} className="hero-studio-layer hero-studio-layer--mid" aria-hidden>
                  <div className="hero-studio-orb hero-studio-orb--a" />
                  <div className="hero-studio-orb hero-studio-orb--b" />

                  <div className="hero-studio-holo">
                    <div className="hero-studio-holo-float hero-studio-float-slow">
                      <div className="hero-studio-holo__glass">
                        <div className="hero-studio-holo__chrome" />
                        <div className="hero-studio-holo__header">
                          <span className="hero-studio-holo__chip" />
                          <span className="hero-studio-holo__pulse" aria-hidden />
                          <span className="hero-studio-holo__label">Your web presence</span>
                        </div>
                        <svg className="hero-studio-holo__chart" viewBox="0 0 280 140" aria-hidden preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="heroHoloLn" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#b8592e" stopOpacity="0.15" />
                              <stop offset="40%" stopColor="#e07a45" stopOpacity="0.65" />
                              <stop offset="100%" stopColor="#f4efe6" stopOpacity="0.35" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 96 Q 54 118 112 74 T 224 54 T 280 28"
                            fill="none"
                            stroke="url(#heroHoloLn)"
                            strokeWidth="1.65"
                            vectorEffect="non-scaling-stroke"
                          />
                          <path
                            d="M 0 108 L 44 104 L 104 118 L 168 92 L 224 96 L 280 78"
                            fill="none"
                            stroke="color-mix(in srgb, #f4efe6 22%, transparent)"
                            strokeWidth="0.9"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                        <div className="hero-studio-holo__ticks">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-studio-chip hero-studio-chip--tl hero-studio-float-delayed">
                    <span className="hero-studio-chip__rule" />
                    <span className="hero-studio-chip__text">Structure</span>
                  </div>
                  <div className="hero-studio-chip hero-studio-chip--br hero-studio-float-slow hero-studio-float-delayed--lg">
                    <span className="hero-studio-chip__text">Refined motion</span>
                    <span className="hero-studio-chip__gleam" aria-hidden />
                  </div>

                  <div className="hero-studio-particles" aria-hidden>
                    {PARTICLES.map((p, i) => (
                      <span
                        key={i}
                        className="hero-studio-particle"
                        style={{
                          left: `${p.left}%`,
                          top: `${p.top}%`,
                          animationDuration: p.dur,
                          animationDelay: p.delay,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div ref={scrollLayerNear} className="hero-studio-layer hero-studio-layer--near" aria-hidden>
                  <div className="hero-studio-streak hero-studio-streak--1" />
                  <div className="hero-studio-streak hero-studio-streak--2" />
                  <div className="hero-studio-rim-light" />
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-[6%_4%_10%_4%] rounded-[1.85rem] border border-[color:color-mix(in_srgb,#f4efe6_8%,transparent)] bg-[linear-gradient(155deg,color-mix(in_srgb,#f4efe6_4%,transparent)_0%,transparent_42%)] shadow-[inset_0_1px_0_color-mix(in_srgb,#f4efe6_12%,transparent)] sm:rounded-[2.1rem]"
                aria-hidden
              />

              <div
                className="pointer-events-none absolute inset-x-[12%] bottom-[14%] z-[2] mx-auto h-px bg-gradient-to-r from-transparent via-[color:color-mix(in_srgb,var(--color-dd-accent)_28%,transparent)] to-transparent opacity-50"
                aria-hidden
              />
            </div>
          </div>

          <div className="reveal-on-scroll relative z-10 mt-16 flex flex-col gap-8 overflow-hidden rounded-[1.25rem] border border-[color:color-mix(in_srgb,#f4efe6_10%,transparent)] bg-[color:color-mix(in_srgb,#121418_72%,transparent)] px-6 py-9 shadow-[0_44px_100px_-60px_rgba(0,0,0,0.75),inset_0_1px_0_color-mix(in_srgb,#f4efe6_8%,transparent)] backdrop-blur-xl sm:mt-20 sm:gap-10 sm:px-11 sm:py-11 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-12 [transition-delay:280ms]">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[10%] top-[-70%] h-[210%] w-[48%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent)_18%,transparent),transparent_65%)] opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-40%] right-[-14%] h-[140%] w-[44%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-dd-accent-soft)_14%,transparent),transparent_68%)] opacity-55"
            />
            <p className="relative max-w-2xl text-[14px] font-light leading-[1.85] text-[color:color-mix(in_srgb,#e8dfd2_78%,#0a0a0c)] sm:text-[15px]">
              If your business is ready to look as sharp online as it does in person, we&apos;ll design a fast, clear site that
              builds trust — and makes the next step obvious for every visitor.
            </p>
            <div className="relative shrink-0">
              <Button variant="secondary" href="#contact" className={`rounded-xl px-9 py-3.5 sm:py-4 ${btnGlassBar}`}>
                Book a consultation
              </Button>
            </div>
          </div>

          <div className="pointer-events-none relative z-10 mt-12 px-2 sm:mt-14" aria-hidden>
            <div className="rule-accent opacity-45 [background:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-dd-accent)_42%,transparent),color-mix(in_srgb,var(--color-dd-champagne-mid)_22%,transparent),transparent)]" />
          </div>
        </div>
      </section>
    </RevealGroup>
  );
}
