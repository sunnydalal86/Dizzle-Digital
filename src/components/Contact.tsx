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
    const subject = encodeURIComponent(`New project inquiry — ${form.business || 'Unknown business'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nWebsite: ${form.website || '(none)'}\n\nNeeds:\n${form.message}`
    );
    window.location.href = `mailto:hello@dizzledigital.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  }

  return (
    <Section id="contact" className="scroll-mt-28 pb-28 pt-10 sm:pb-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <div className="reveal-on-scroll lg:sticky lg:top-28">
          <p className="text-sm font-medium tracking-wide text-sky-400/90">Contact</p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Tell us what you&apos;re working on
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            No homework overload—just the basics. Your niche, timing, and what would make this a win. Prefer email?
            Still good:{' '}
            <a href="mailto:hello@dizzledigital.com" className="text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline">
              hello@dizzledigital.com
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reveal-on-scroll space-y-5 rounded-2xl border border-white/[0.08] bg-neutral-950/55 p-6 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.9)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
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
            label="Website URL if you have one"
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="url"
            placeholder="https://"
          />
          <Field
            label="What do you need help with?"
            name="message"
            value={form.message}
            required
            onChange={handleChange}
            textarea
            rows={4}
          />

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button type="submit" variant="primary">
              Send it
            </Button>
            {submitted && (
              <span className="text-sm font-medium text-sky-400" role="status">
                Opening your email app…
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-500">
            This opens your mail app with everything prefilled—low-tech, zero spam bots. Want a fancy form later? We can
            wire that up.
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
    'mt-2 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-neutral-50 placeholder:text-neutral-600 outline-none ring-1 ring-transparent transition focus:border-sky-400/50 focus:bg-white/[0.05] focus:ring-sky-400/30';

  return (
    <label className="block text-sm font-medium text-neutral-300">
      {label}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows ?? 5}
          className={`${cls} min-h-[120px] resize-y`}
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
