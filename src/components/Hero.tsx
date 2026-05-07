import Button from './Button';
import RevealGroup from './RevealGroup';

export default function Hero() {
  return (
    <RevealGroup className="relative overflow-hidden pt-[clamp(7rem,15vmin,9.75rem)] pb-20 sm:pb-28 lg:pb-36 lg:pt-[clamp(11rem,18vmin,13rem)] xl:pt-[clamp(12rem,20vmin,15rem)] hero-ambient">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-700/40 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-kicker reveal-on-scroll">Boutique digital studio</p>
          <h1 className="font-[family-name:var(--font-display)] reveal-on-scroll mt-6 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-stone-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
            Premium Websites for Service Businesses That Need to Look Legit
          </h1>
          <p className="reveal-on-scroll mt-8 max-w-lg text-lg leading-relaxed text-stone-400 sm:text-xl">
            Dizzle Digital builds modern, conversion-focused websites for local businesses that need stronger
            credibility, better first impressions, and more qualified leads.
          </p>
          <div className="reveal-on-scroll mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" href="#contact" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button variant="secondary" href="#portfolio" className="w-full sm:w-auto">
              View Work
            </Button>
          </div>
          <p className="reveal-on-scroll mt-12 text-sm leading-relaxed text-stone-500">
            Built for contractors, barbers, schools, technical services, and local brands.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 rule-accent opacity-90" aria-hidden />
    </RevealGroup>
  );
}
