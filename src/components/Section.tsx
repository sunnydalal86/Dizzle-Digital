import type { ComponentPropsWithoutRef } from 'react';
import RevealGroup from './RevealGroup';

export default function Section({
  id,
  className = '',
  children,
  ...rest
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <RevealGroup>
      <section id={id} className={className} {...rest}>
        {children}
      </section>
    </RevealGroup>
  );
}
