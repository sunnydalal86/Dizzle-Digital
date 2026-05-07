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
      className="scroll-mt-32 bg-[linear-gradient(180deg,var(--color-dd-bg)_0%,var(--color-dd-off-white)_100%)] pb-28 pt-12 sm:scroll-mt-36 sm:pb-40 sm:pt-16 lg:pb-48"
    >
      <div className="mx-auto grid max-w-[88rem] gap-24 px-4 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-28 lg:px-12 xl:gap-32 xl:px-16">
        <div className="reveal-on-scroll lg:sticky lg:top-40 lg:max-w-lg">
          <p className="font-kicker text-[color:var(--color-dd-muted)]">Contact</p>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--color-dd-text)]">
            Start a{' '}
            <span className="font-normal italic text-[color:color-mix(in_srgb,var(--color-dd-accent)_88%,var(--color-dd-text))]">
              project.
            </span>
          </h2>
          <p className="mt-10 text-lg font-light leading-[1.75] text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            Share ambition, timeline, and what excellence looks like on your terms. Prefer to write direct?{' '}
            <a
              href="mailto:hello@dizzledigital.com"
              className="font-medium text-[color:var(--color-dd-accent)] underline decoration-[color:color-mix(in_srgb,var(--color-dd-accent)_45%,transparent)] underline-offset-[5px] transition-colors hover:decoration-[color:var(--color-dd-accent)]"
            >
              hello@dizzledigital.com
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal-on-scroll premium-card space-y-8 p-10 hover:!translate-y-0 sm:p-12"
          style={{ transitionDelay: '80ms' } as CSSProperties}
        >
          <div className="grid gap-8 sm:grid-cols-2">
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

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button type="submit" variant="primary">
              Send inquiry
            </Button>
            {submitted && (
              <span className="text-sm font-medium text-[color:var(--color-dd-accent)]" role="status">
                Opening your mail app…
              </span>
            )}
          </div>
          <p className="text-xs font-light text-[color:var(--color-dd-muted)]" style={{ fontWeight: 300 }}>
            Submits through your inbox — intentional, transparent, zero middleman drip.
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
    'mt-2 w-full rounded-2xl border border-[color:color-mix(in_srgb,var(--color-dd-border)_180%,transparent)] bg-[color:color-mix(in_srgb,var(--color-dd-off-white)_92%,white)] px-4 py-3.5 text-sm text-[color:var(--color-dd-text)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] outline-none ring-2 ring-transparent transition placeholder:text-[color:color-mix(in_srgb,var(--color-dd-muted)_55%,transparent)] focus:border-[color:color-mix(in_srgb,var(--color-dd-accent)_32%,transparent)] focus:ring-[color:color-mix(in_srgb,var(--color-dd-accent-soft)_100%,transparent)]';

  return (
    <label className="block text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-dd-muted)]">
      {label}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows ?? 5}
          className={`${cls} min-h-[150px] resize-y`}
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
