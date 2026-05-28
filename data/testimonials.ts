// Customer testimonials.
//
// IMPORTANT — Google rich-result policy:
//   * Only mark up reviews that are real, first-party, and visible on the same
//     page as the schema. Aspirational / fake / re-published third-party reviews
//     are a manual-action risk.
//   * Each entry has a `sample` flag. When `sample: true`, the entry renders on
//     the page with a visible "Sample" pill so visitors can see the design
//     during preview, but it is EXCLUDED from JSON-LD AggregateRating / Review
//     schema. As soon as you swap in real testimonials, drop `sample` (or set
//     it to false) and the schema activates automatically.
//   * If fewer than 3 real testimonials are present, no AggregateRating is
//     emitted (Google's threshold for displaying star ratings).
//
// How to add a real testimonial:
//   1. Get the customer's permission to publish their words.
//   2. Add a new entry below with sample omitted (defaults to false).
//   3. Set packageSlug if it ties to a specific package — that lets the
//      package detail page show this testimonial and roll into its
//      AggregateRating.
//   4. Date format: 'YYYY-MM' for travel month.

export type Testimonial = {
  id: string;
  name: string;        // First name + initial: "Priya S."
  city: string;        // "Mumbai"
  travelMonth: string; // "2026-04"
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;       // The actual words they wrote, 1–4 sentences
  packageSlug?: string;  // Links to a specific /packages/<slug>
  gateSlug?: string;     // Optional: links to a specific gate
  sample?: boolean;    // true = placeholder, excluded from schema
};

export const testimonials: Testimonial[] = [
  {
    id: 'sample-1',
    name: 'Sample R.',
    city: 'Sample City',
    travelMonth: '2026-04',
    rating: 5,
    quote:
      'This is a sample testimonial. Replace with a real customer message — what they came hoping for, what they actually saw, and how the trip felt. Two short sentences read best.',
    packageSlug: 'tadoba-classic-3n',
    sample: true,
  },
  {
    id: 'sample-2',
    name: 'Sample N.',
    city: 'Sample City',
    travelMonth: '2026-03',
    rating: 5,
    quote:
      'Another sample. Honest, specific testimonials work much better than generic praise — mention the gate, the naturalist, the sighting, anything concrete.',
    packageSlug: 'tadoba-pench-combo-5n',
    sample: true,
  },
  {
    id: 'sample-3',
    name: 'Sample K.',
    city: 'Sample City',
    travelMonth: '2026-02',
    rating: 5,
    quote:
      'Sample three. If a customer specifically liked something we did differently (permit hassle handled, late checkout, resort upgrade), call that out — that detail builds trust.',
    packageSlug: 'pench-classic-3n',
    sample: true,
  },
];

// --- Helpers that pages / components import ---

export function realTestimonials(): Testimonial[] {
  return testimonials.filter((t) => !t.sample);
}

export function aggregateRating(filtered: Testimonial[] = realTestimonials()):
  | { ratingValue: number; reviewCount: number; bestRating: number }
  | null {
  if (filtered.length < 3) return null;
  const sum = filtered.reduce((s, t) => s + t.rating, 0);
  return {
    ratingValue: Number((sum / filtered.length).toFixed(2)),
    reviewCount: filtered.length,
    bestRating: 5,
  };
}

export function testimonialsForPackage(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.packageSlug === slug);
}
