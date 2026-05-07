import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Packages from './components/Packages';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-[4.5rem] z-[60] -translate-x-[120%] rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg transition-transform focus-visible:translate-x-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Portfolio />
        <Services />
        <WhyUs />
        <Process />
        <Packages />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
