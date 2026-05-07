import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonNativeProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
}

interface AnchorBtnProps extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> {
  href: string;
}

export type ButtonProps = ButtonNativeProps | AnchorBtnProps;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-dd-accent)] disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[color:var(--color-dd-accent)] text-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:bg-[color:var(--color-dd-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(201,136,85,0.42)] active:translate-y-0',
  secondary:
    'border border-stone-600/80 bg-transparent text-stone-100 hover:border-stone-500 hover:bg-white/[0.04] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'border border-transparent bg-transparent text-stone-400 hover:text-stone-100 hover:bg-white/[0.04]',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '' } = props;
  const merged = `${base} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, variant: _, children: __, className: ___, ...rest } = props;
    return (
      <a href={href} className={merged} {...rest}>
        {children}
      </a>
    );
  }

  const btnProps = props as ButtonNativeProps;
  const { type = 'button', variant: _, children: __, className: ___, ...rest } = btnProps;
  return (
    <button type={type} className={merged} {...rest}>
      {children}
    </button>
  );
}
