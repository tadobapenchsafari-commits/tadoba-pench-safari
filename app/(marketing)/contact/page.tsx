'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire up API route /api/inquiry
    setTimeout(() => setStatus('sent'), 1200);
  }

  return (
    <>
      <section className="bg-canopy text-bone py-20 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="divider-tribal max-w-xs mb-4 text-bone/70">Get in touch</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">
            Tell us about your <span className="italic text-sunrise">dream trip.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-paper p-8 md:p-10 rounded-2xl">
            {status === 'sent' ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto bg-canopy rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-bone" />
                </div>
                <h2 className="font-display text-3xl text-bark mb-3">
                  We've got your message.
                </h2>
                <p className="text-bark/70">
                  One of our safari specialists will get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone / WhatsApp" name="phone" required />
                  <Field label="Preferred travel date" name="date" type="date" />
                  <Field label="Adults" name="adults" type="number" defaultValue="2" />
                  <Field label="Children" name="children" type="number" defaultValue="0" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-bark/60 mb-2">
                    Tell us more
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tadoba or Pench? Preferred tier? Any must-haves?"
                    className="w-full px-4 py-3 bg-bone border border-bark/15 rounded-lg focus:outline-none focus:border-sunrise"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-10 py-4 bg-sunrise text-bark rounded-full font-medium hover:bg-rust hover:text-bone transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <ContactCard icon={<Phone className="w-5 h-5" />} label="Call us" value="+91 82080 90280" href="tel:+918208090280" />
            <ContactCard icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" value="+91 82080 90280" href="https://wa.me/918208090280" />
            <ContactCard icon={<Mail className="w-5 h-5" />} label="Email" value="info@tadobapenchsafari.com" href="mailto:info@tadobapenchsafari.com" />
            <div className="bg-bark text-bone p-6 rounded-2xl">
              <p className="text-xs uppercase tracking-wider text-bone/60 mb-2">Response time</p>
              <p className="font-display text-2xl text-sunrise mb-1">Within 2 hours</p>
              <p className="text-sm text-bone/70">Monday to Sunday, 8 AM – 9 PM IST</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-bark/60 mb-2">
        {label} {required && <span className="text-rust">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-4 py-3 bg-bone border border-bark/15 rounded-lg focus:outline-none focus:border-sunrise"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex items-start gap-4 bg-paper p-5 rounded-2xl hover:bg-paper/70 transition-colors">
      <div className="w-10 h-10 rounded-full bg-canopy text-bone flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-bark/60">{label}</div>
        <div className="text-bark font-medium break-all">{value}</div>
      </div>
    </a>
  );
}
