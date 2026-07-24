'use client';

import { useState } from 'react';
import { track } from '@/lib/analytics';

// Inline "Plan My Safari" lead capture. No backend: submit composes a
// structured message and opens WhatsApp with it prefilled — matches how
// the business already handles every inquiry. Nothing is sent anywhere
// until the visitor hits send inside WhatsApp itself.

const COUNTRIES = [
  'India',
  'United States',
  'United Kingdom',
  'UAE',
  'Germany',
  'France',
  'Australia',
  'Singapore',
  'Canada',
  'Other',
];

const DURATIONS = ['2 nights', '3 nights', '4–5 nights', '5+ nights', 'Not sure yet'];

const inputCls =
  'w-full bg-bone border border-bark/15 rounded-xl px-4 py-3 text-bark placeholder:text-bark/40 focus:outline-none focus:border-sunrise';
const labelCls = 'block text-sm text-bark/70 mb-1';

export function PlanMySafariForm({ context }: { context: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Hi! I'd like a custom itinerary.",
      `Interested in: ${context}`,
      `Name: ${f.get('name')}`,
      `Travel date: ${f.get('date') || 'flexible'}`,
      `Duration: ${f.get('duration')}`,
      `Travellers: ${f.get('travellers')}`,
      `Country: ${f.get('country')}`,
      f.get('email') ? `Email: ${f.get('email')}` : '',
      f.get('phone') ? `Phone: ${f.get('phone')}` : '',
      f.get('message') ? `Notes: ${f.get('message')}` : '',
    ].filter(Boolean);
    track('plan_form_whatsapp', { context });
    window.open(
      `https://wa.me/918208090280?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );
    setSent(true);
  }

  return (
    <section className="bg-paper py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="divider-tribal max-w-xs mb-4">
            <span>Plan my safari</span>
          </p>
          <h2 className="font-display text-4xl text-bark leading-tight">
            Tell us the basics — we do the rest.
          </h2>
          <p className="text-bark/70 mt-3">
            A custom itinerary for {context} lands on your WhatsApp within 24
            hours.
          </p>
        </div>

        {sent ? (
          <div className="bg-bone rounded-2xl p-8 text-bark">
            <p className="font-display text-2xl mb-2">
              WhatsApp is opening with your details.
            </p>
            <p className="text-bark/75">
              Hit send there and your custom itinerary arrives within 24 hours.
              If WhatsApp did not open, message us directly at +91 82080 90280.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="psf-name" className={labelCls}>Name *</label>
              <input id="psf-name" name="name" required placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label htmlFor="psf-phone" className={labelCls}>Phone</label>
              <input id="psf-phone" name="phone" type="tel" placeholder="+91…" className={inputCls} />
            </div>
            <div>
              <label htmlFor="psf-email" className={labelCls}>Email</label>
              <input id="psf-email" name="email" type="email" placeholder="you@example.com" className={inputCls} />
            </div>
            <div>
              <label htmlFor="psf-date" className={labelCls}>Tentative travel date</label>
              <input id="psf-date" name="date" type="date" className={inputCls} />
            </div>
            <div>
              <label htmlFor="psf-country" className={labelCls}>Country</label>
              <select id="psf-country" name="country" defaultValue="India" className={inputCls}>
                {COUNTRIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="psf-duration" className={labelCls}>Duration</label>
              <select id="psf-duration" name="duration" defaultValue="3 nights" className={inputCls}>
                {DURATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="psf-travellers" className={labelCls}>Number of travellers</label>
              <input id="psf-travellers" name="travellers" type="number" min={1} defaultValue={2} className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="psf-message" className={labelCls}>Anything else?</label>
              <textarea id="psf-message" name="message" rows={3} placeholder="Photography focus, kids' ages, resort preferences…" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-sunrise text-bark py-4 rounded-full font-medium hover:bg-rust hover:text-bone transition-colors"
              >
                Get my itinerary on WhatsApp
              </button>
              <p className="text-xs text-bark/50 mt-2 text-center">
                Opens WhatsApp with your details prefilled — nothing is sent
                until you hit send there.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
