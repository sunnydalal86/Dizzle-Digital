import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroServicesMarquee from './components/HeroServicesMarquee';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhatYouPayFor from './components/WhatYouPayFor';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';

function OgPreviewDev() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0f0f12] p-6 text-[#e8e6e3]">
      <div className="max-w-xl text-center">
        <h1 className="text-base font-semibold tracking-wide">Open Graph preview (1200 × 630)</h1>
        <p className="mt-2 text-sm text-[#989498]">
          Uses <code className="text-[#c4b8c8]">/og-image.png</code> from the dev server. Run{' '}
          <code className="text-[#c4b8c8]">npm run generate:og</code> if it is missing.
        </p>
      </div>
      <div
        className="w-full max-w-[960px] overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06]"
        style={{ aspectRatio: '1200 / 630' }}
      >
        <img
          src="/og-image.png"
          width={1200}
          height={630}
          alt="OG composite preview"
          className="h-full w-full bg-[#1a1a1f] object-contain"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

export default function App() {
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('ogPreview') === '1') {
      return <OgPreviewDev />;
    }
  }

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-[clamp(7rem,15vmin,9.75rem)] z-[60] -translate-x-[120%] rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-accent)_34%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_94%,white)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-dd-text)] shadow-[0_14px_36px_-18px_rgba(42,40,37,0.14)] backdrop-blur-[var(--dd-blur-panel)] transition-[transform] duration-[420ms] [transition-timing-function:var(--dd-motion-smooth)] focus-visible:translate-x-0 lg:top-[clamp(11rem,18vmin,13rem)] xl:top-[clamp(12rem,20vmin,15rem)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <HeroServicesMarquee />
        <Portfolio />
        <Services />
        <WhatYouPayFor />
        <Process />
        <Pricing />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
