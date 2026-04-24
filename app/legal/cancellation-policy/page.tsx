export const metadata = {
  title: 'Cancellation & Refund Policy',
  description:
    'Tadoba Pench Safari Co. cancellation timelines, refund percentages, and special rules for non-refundable forest permits.',
  alternates: { canonical: '/legal/cancellation-policy' },
};

export default function CancellationPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p className="divider-tribal max-w-xs mb-4">Legal</p>
      <h1 className="font-display text-5xl md:text-6xl text-bark leading-tight mb-4">
        Cancellation &amp; Refund Policy
      </h1>
      <p className="text-sm text-bark/60 mb-12">Last updated: 24 April 2026</p>

      <div className="space-y-8 text-bark/80 leading-relaxed text-lg">
        <p>
          Cancellations happen. We keep our policy simple, transparent, and
          tiered by how much notice we get — the more time we have to re-sell
          permits and resort rooms, the more we can refund.
        </p>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Refund timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b-2 border-bark/20">
                  <th className="text-left py-3 pr-4 font-display text-bark">Notice before arrival</th>
                  <th className="text-left py-3 pr-4 font-display text-bark">Refund on package cost</th>
                  <th className="text-left py-3 font-display text-bark">Permits &amp; resort deposits</th>
                </tr>
              </thead>
              <tbody className="text-bark/80">
                <tr className="border-b border-bark/10">
                  <td className="py-3 pr-4">45+ days</td>
                  <td className="py-3 pr-4">90% refund</td>
                  <td className="py-3">Permit cost non-refundable</td>
                </tr>
                <tr className="border-b border-bark/10">
                  <td className="py-3 pr-4">30–44 days</td>
                  <td className="py-3 pr-4">75% refund</td>
                  <td className="py-3">Permit cost non-refundable</td>
                </tr>
                <tr className="border-b border-bark/10">
                  <td className="py-3 pr-4">15–29 days</td>
                  <td className="py-3 pr-4">50% refund</td>
                  <td className="py-3">Permit + 1 resort night non-refundable</td>
                </tr>
                <tr className="border-b border-bark/10">
                  <td className="py-3 pr-4">7–14 days</td>
                  <td className="py-3 pr-4">25% refund</td>
                  <td className="py-3">Permit + resort deposits non-refundable</td>
                </tr>
                <tr className="border-b border-bark/10">
                  <td className="py-3 pr-4">Less than 7 days</td>
                  <td className="py-3 pr-4">No refund</td>
                  <td className="py-3">Full package retained</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">No-show</td>
                  <td className="py-3 pr-4">No refund</td>
                  <td className="py-3">Full package retained</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Forest-department permits</h2>
          <p>
            Safari permits are issued by the Maharashtra or Madhya Pradesh
            Forest Department and are <strong>non-refundable once issued</strong>
            , regardless of when you cancel. This is a government rule — not
            one we can negotiate.
          </p>
          <p className="mt-3">
            Permits are booked 120 days in advance. If you cancel after your
            permits have been issued (usually within 48 hours of booking), the
            permit portion is lost. The rest of your package is refunded per
            the timeline above.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Weather, closures, force majeure</h2>
          <p>
            If the forest department closes zones or gates due to unseasonal
            weather, court orders, natural disasters, or similar circumstances
            beyond our control, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>First:</strong> offer to re-book your safari to an
              alternate date in the same year at no extra cost.
            </li>
            <li>
              <strong>If re-booking isn't feasible:</strong> refund the
              cancelled safari portion minus the non-refundable permit fee.
            </li>
            <li>
              <strong>We don't refund</strong> consequential losses like
              onward flights, hotels in other cities, or missed connections.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Date changes</h2>
          <p>
            You can reschedule your trip once, free of charge, if the new
            dates are within 12 months and notified to us 30+ days before the
            original arrival. Additional reschedules carry a ₹2,000
            administration fee. Rate differences between seasons (summer vs
            off-season) apply.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Partial cancellations</h2>
          <p>
            Reducing guest count after a booking is confirmed is treated as a
            cancellation of the dropped guests' portion per the timeline
            above. Adding guests is accommodated if availability exists —
            contact us as early as possible.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">Refund processing</h2>
          <p>
            Approved refunds are returned to the original payment method
            within 10–15 business days. International card refunds can take up
            to 30 days depending on your bank. We will share a refund
            reference number by email.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-bark mt-10 mb-3">How to cancel</h2>
          <p>
            Email{' '}
            <a href="mailto:info@tadobapenchsafari.com" className="text-canopy underline">
              info@tadobapenchsafari.com
            </a>{' '}
            from the address on your booking, or message +91 82080 90280 on
            WhatsApp. Your cancellation is effective from the timestamp we
            receive the request — please don't rely on phone calls alone.
          </p>
        </section>
      </div>
    </main>
  );
}
