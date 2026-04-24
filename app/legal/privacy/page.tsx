export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Tadoba Pench Safari Co. collects, uses, and protects your personal information when you plan a safari with us.',
  alternates: { canonical: '/legal/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p className="divider-tribal max-w-xs mb-4">Legal</p>
      <h1 className="font-display text-5xl md:text-6xl text-bark leading-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-bark/60 mb-12">Last updated: 24 April 2026</p>

      <div className="prose prose-lg max-w-none space-y-8 text-bark/80 leading-relaxed">
        <p>
          Tadoba Pench Safari Co. ("we", "us") respects your privacy. This page
          explains what we collect when you interact with tadobapenchsafari.com
          and how we use it. If anything here is unclear, email{' '}
          <a href="mailto:info@tadobapenchsafari.com" className="text-canopy underline">
            info@tadobapenchsafari.com
          </a>
          .
        </p>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact details</strong> you give us — name, email, phone
              — when you submit an inquiry, book a package, or message us on
              WhatsApp.
            </li>
            <li>
              <strong>Booking details</strong> — travel dates, number of
              guests, dietary notes, ID copies required for forest permits.
            </li>
            <li>
              <strong>Analytics data</strong> — anonymous usage stats via
              Google Analytics 4 (pages visited, device type, approximate
              location).
            </li>
            <li>
              <strong>Cookies</strong> — small files stored on your device to
              remember preferences and measure site performance. You can
              disable cookies in your browser settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">How we use it</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To confirm your bookings and issue forest-department permits.</li>
            <li>
              To share your name and ID with partner resorts, safari-jeep
              operators, and the Maharashtra / MP Forest Department — the
              minimum needed to deliver your trip.
            </li>
            <li>To send trip updates, itineraries, and post-trip thank-you notes.</li>
            <li>
              To improve the website and measure which content is helpful (via
              aggregated analytics).
            </li>
            <li>
              For occasional newsletters — only if you opt in. Unsubscribe link
              in every email.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Who we share with</h2>
          <p>
            We share only with third parties directly needed to deliver your
            safari: forest-department officials (for permits), the resort you
            stay at, and jeep operators. We do not sell your data to
            advertisers or data brokers — ever.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">How long we keep it</h2>
          <p>
            Booking records are kept for seven years to comply with Indian tax
            regulations. Inquiry-only data (where you never booked) is purged
            after 18 months.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Your rights</h2>
          <p>
            You can ask us to show, correct, or delete your personal data by
            emailing{' '}
            <a href="mailto:info@tadobapenchsafari.com" className="text-canopy underline">
              info@tadobapenchsafari.com
            </a>{' '}
            from the address we have on file. We'll respond within 15 business
            days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Security</h2>
          <p>
            The website runs on HTTPS. We do not collect or store any
            payment information — all settlements are handled directly
            between you and our team via bank transfer or UPI.
            Backups of your contact and booking data are encrypted at rest.
            No system is perfectly secure — if a breach ever affects your
            data, we'll notify you within 72 hours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Children</h2>
          <p>
            The website is intended for adults (18+) booking travel. We do not
            knowingly collect data from children. If a minor's data has ended
            up with us (e.g. as a dependent on a family booking), we store it
            only for the duration of the trip.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Changes to this policy</h2>
          <p>
            Material changes are announced at the top of this page and emailed
            to anyone who has an active booking. Minor clarifications can happen
            without notice — check back if in doubt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Contact</h2>
          <p>
            Data questions, requests, or complaints:{' '}
            <a href="mailto:info@tadobapenchsafari.com" className="text-canopy underline">
              info@tadobapenchsafari.com
            </a>{' '}
            or +91 82080 90280.
          </p>
        </section>
      </div>
    </main>
  );
}
