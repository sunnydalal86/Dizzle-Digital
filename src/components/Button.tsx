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
  'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] transition-[transform,box-shadow,background-color,color,border-color] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:color-mix(in_srgb,var(--color-dd-accent)_55%,transparent)] disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[color:var(--color-dd-accent)] text-[color:var(--color-dd-off-white)] shadow-[0_12px_36px_-14px_color-mix(in_srgb,var(--color-dd-accent)_42%,transparent),0_0_0_1px_rgba(255,255,255,0.16)_inset] hover:bg-[color:var(--color-dd-accent-hover)] hover:-translate-y-px hover:shadow-[0_18px_44px_-16px_color-mix(in_srgb,var(--color-dd-accent)_38%,transparent),0_0_48px_-20px_color-mix(in_srgb,var(--color-dd-accent)_18%,transparent)] active:translate-y-0 active:shadow-[0_8px_24px_-12px_color-mix(in_srgb,var(--color-dd-accent)_34%,transparent)]',
  secondary:
    'border border-[color:color-mix(in_srgb,var(--color-dd-text)_10%,transparent)] bg-[color:color-mix(in_srgb,white_52%,transparent)] text-[color:var(--color-dd-text)] shadow-[0_10px_28px_-18px_rgba(42,40,37,0.12)] backdrop-blur-sm hover:border-[color:color-mix(in_srgb,var(--color-dd-accent)_22%,transparent)] hover:bg-[color:var(--color-dd-off-white)] hover:-translate-y-px hover:shadow-[0_18px_40px_-22px_rgba(42,40,37,0.11),0_0_32px_-18px_color-mix(in_srgb,var(--color-dd-accent)_12%,transparent)] active:translate-y-0',
  ghost:
    'border border-transparent bg-transparent text-[color:var(--color-dd-muted)] hover:text-[color:var(--color-dd-text)] hover:bg-[color:color-mix(in_srgb,var(--color-dd-cream)_72%,transparent)]',
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
