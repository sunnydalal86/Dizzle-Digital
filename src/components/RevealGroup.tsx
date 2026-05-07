import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Applies intersection-observer reveals to descendant `.reveal-on-scroll` elements.
 */
export default function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      el.querySelectorAll('.reveal-on-scroll').forEach((node) => node.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    el.querySelectorAll('.reveal-on-scroll').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
