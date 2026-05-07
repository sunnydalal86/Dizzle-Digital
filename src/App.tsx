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
        className="fixed left-4 top-[clamp(7rem,15vmin,9.75rem)] z-[60] -translate-x-[120%] rounded-full border border-stone-700/55 bg-[color:var(--color-dd-elevated)] px-4 py-2 text-sm font-semibold text-stone-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-transform focus-visible:translate-x-0 lg:top-[clamp(11rem,18vmin,13rem)] xl:top-[clamp(12rem,20vmin,15rem)]"
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
