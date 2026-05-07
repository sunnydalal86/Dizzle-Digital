import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhatYouPayFor from './components/WhatYouPayFor';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-[clamp(7rem,15vmin,9.75rem)] z-[60] -translate-x-[120%] rounded-full border border-[color:color-mix(in_srgb,var(--color-dd-accent)_38%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_92%,white)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-dd-text)] shadow-[0_12px_32px_-16px_rgba(42,40,37,0.18)] backdrop-blur-md transition-[transform] focus-visible:translate-x-0 lg:top-[clamp(11rem,18vmin,13rem)] xl:top-[clamp(12rem,20vmin,15rem)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
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
