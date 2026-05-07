import { useState, type ChangeEvent, type FormEvent } from 'react';
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
    <Section id="contact" className="scroll-mt-32 pb-28 pt-8 sm:scroll-mt-36 sm:pb-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-8">
        <div className="reveal-on-scroll lg:sticky lg:top-36">
          <p className="font-kicker">Contact</p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl">
            Start a project.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-stone-400">
            Share your business, timeline, and what a successful launch looks like. Prefer email direct?{' '}
            <a
              href="mailto:hello@dizzledigital.com"
              className="font-medium text-[color:var(--color-dd-accent)] underline-offset-4 hover:underline"
            >
              hello@dizzledigital.com
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal-on-scroll premium-card space-y-6 p-8 hover:!translate-y-0 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
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

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button type="submit" variant="primary">
              Send inquiry
            </Button>
            {submitted && (
              <span className="text-sm font-medium text-[color:var(--color-dd-accent)]" role="status">
                Opening your mail app…
              </span>
            )}
          </div>
          <p className="text-xs text-stone-500">
            Submits via your email client—no middleware, no spam funnel.
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
    'mt-2 w-full rounded-xl border border-stone-700/50 bg-[color:var(--color-dd-surface)] px-4 py-3.5 text-sm text-stone-50 placeholder:text-stone-600 outline-none ring-1 ring-transparent transition focus:border-[color:var(--color-dd-accent)]/40 focus:ring-[color:var(--color-dd-accent)]/15';

  return (
    <label className="block text-sm font-medium text-stone-300">
      {label}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows ?? 5}
          className={`${cls} min-h-[140px] resize-y`}
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
