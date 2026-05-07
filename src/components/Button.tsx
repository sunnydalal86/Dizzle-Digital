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
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-neutral-950 shadow-[0_0_24px_-4px_rgba(56,189,248,0.55)] hover:shadow-[0_0_36px_-2px_rgba(56,189,248,0.65)] hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-white/15 bg-white/5 text-neutral-50 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5',
  ghost:
    'border border-transparent bg-transparent text-neutral-300 hover:text-white hover:bg-white/5',
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
