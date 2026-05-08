import { useState, type ChangeEvent, type FormEvent, type CSSProperties } from 'react';
import Section from './Section';
import Button from './Button';

const initialForm = {
  name: '',
  business: '',
  email: '',
  website: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry — ${form.business || 'Unknown business'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nWebsite: ${form.website || '(none)'}\n\nProject details:\n${form.message}`
    );
    window.location.href = `mailto:hello@dizzledigital.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  }

  return (
    <Section
      id="contact"
      className="dd-surface-grain scroll-mt-36 bg-[linear-gradient(180deg,var(--color-dd-bg)_0%,var(--color-dd-off-white)_100%)] sm:scroll-mt-40 pb-40 pt-20 sm:pb-48 sm:pt-24 lg:pb-[min(14rem,20vw)]"
    >
      <div className="relative z-[1] mx-auto grid max-w-[88rem] gap-28 px-4 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-x-36 lg:px-12 xl:gap-x-40 xl:px-16">
        <div className="reveal-on-scroll lg:sticky lg:top-[11rem] lg:max-w-lg xl:top-[12rem]">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Contact</p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.875rem,5.15vw,4.125rem)] font-semibold leading-[1.03] tracking-[-0.022em] text-[color:var(--color-dd-text)]">
            Start a{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              project.
            </span>
          </h2>
          <p className="mt-12 text-[1.0625rem] font-light leading-[1.74] text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Share your goals, timeline, and what a win looks like for you. Prefer email?{' '}
            <a
              href="mailto:hello@dizzledigital.com"
              className="font-medium text-[color:var(--color-dd-accent)] underline decoration-[color:color-mix(in_srgb,var(--color-dd-accent)_42%,transparent)] underline-offset-[5px] transition-colors duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] hover:decoration-[color:var(--color-dd-accent)]"
            >
              hello@dizzledigital.com
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal-on-scroll premium-card space-y-10 rounded-[length:var(--dd-radius-xl)] p-11 hover:!translate-y-0 sm:p-14"
          style={{ '--reveal-delay': '70ms' } as CSSProperties}
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} required onChange={handleChange} autoComplete="name" />
            <Field
              label="Business name"
              name="business"
              value={form.business}
              required
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
          <Field
            label="Email"
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            autoComplete="email"
          />
          <Field
            label="Current website (optional)"
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="url"
            placeholder="https://"
          />
          <Field
            label="What are we building?"
            name="message"
            value={form.message}
            required
            onChange={handleChange}
            textarea
            rows={5}
          />

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <Button type="submit" variant="primary">
              Send inquiry
            </Button>
            {submitted && (
              <span className="text-sm font-medium text-[color:var(--color-dd-accent)]" role="status">
                Opening your mail app…
              </span>
            )}
          </div>
          <p className="text-xs font-light text-[color:color-mix(in_srgb,var(--color-dd-muted)_94%,var(--color-dd-text))]" style={{ fontWeight: 300 }}>
            Opens in your email app — simple, direct, no middleman.
          </p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  textarea,
  rows,
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  textarea?: boolean;
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  const cls =
    'mt-2.5 w-full rounded-[length:var(--dd-radius-md)] border border-[color:color-mix(in_srgb,var(--color-dd-border)_170%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_94%,white)] px-4 py-3.5 text-sm text-[color:var(--color-dd-text)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.62)] outline-none ring-2 ring-transparent transition-[border-color,box-shadow] duration-[420ms] [transition-timing-function:var(--dd-motion-soft)] placeholder:text-[color:color-mix(in_srgb,var(--color-dd-muted)_52%,transparent)] focus:border-[color:color-mix(in_srgb,var(--color-dd-accent)_28%,transparent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-dd-accent-soft)_100%,transparent)]';

  return (
    <label className="block text-[12px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-dd-muted)]">
      {label}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows ?? 5}
          className={`${cls} min-h-[156px] resize-y`}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={cls}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
