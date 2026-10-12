// 'At a glance' Q&A blocks used near the top of major pages.
// Designed for AI-engine extraction — each answer is 1-2 short factual
// sentences with specific numbers / dates / named entities.
//
// These are DIFFERENT from the bottom-of-page FAQ entries in data/faqs.ts:
//   - Quick Answers = top-of-page, 3-6 fast facts, always visible
//   - FAQs         = bottom-of-page, 5-7 deeper questions, accordion

import type { QuickAnswer } from '@/components/marketing/quick-answers';

// --- Home page ---
export const homeQuickAnswers: QuickAnswer[] = [
  {
    q: 'What is Tadoba Pench Safari?',
    a: 'A boutique tiger safari operator running hosted trips to Tadoba (Maharashtra) and Pench (Madhya Pradesh) in central India. Based in Nagpur. Founded 2018.',
  },
  {
    q: 'What does a Tadoba safari cost in 2026?',
    a: 'Our 3-night Tadoba packages range from ₹74,000 (Budget tier, mid-tier resort + sedan) to ₹1,20,000 (Luxury tier, ultra-luxury lodge + luxury SUV). Quoted per couple, all-inclusive.',
  },
  {
    q: 'When is the best time for a tiger safari?',
    a: 'April to early June for highest sighting odds (80–95% across a four-safari trip). November–February for comfortable weather and good birding. Tadoba core zones close 1 July–30 September for monsoon.',
  },
  {
    q: 'How do I get to Tadoba?',
    a: 'Nagpur airport (NAG) is 140 km from Moharli gate — a 3-hour drive. Direct flights from Mumbai, Pune, Delhi, Hyderabad, Bangalore, and Chennai. We handle the transfer end-to-end as part of every package.',
  },
  {
    q: 'How are packages structured?',
    a: 'Three Tadoba tiers — Budget, Mid, Luxury — all 3-night / 4-day trips with 4 jeep safaris across Moharli and Kolara gates (the difference is the resort and transport vehicle), plus a Pench Classic 3-night package covering Turia and Karmajhiri gates.',
  },
  {
    q: 'How do I book?',
    a: 'WhatsApp +91 82080 90280 or use the contact form. We send a custom itinerary within 24 hours and hold permits once you confirm dates.',
  },
];

// --- Per-package ---
export const packageQuickAnswers: Record<string, QuickAnswer[]> = {
  'tadoba-budget-3n': [
    { q: 'Price', a: '₹74,000 per couple (all-inclusive). Roughly ₹37,000 per person.' },
    { q: 'Duration', a: '3 nights / 4 days with 4 jeep safaris.' },
    { q: 'Where you stay', a: 'Mid-tier jungle resort, double occupancy, all meals included.' },
    { q: 'How you travel', a: 'Private AC sedan transfers from Nagpur airport across 4 days.' },
    { q: 'Gates covered', a: 'Moharli (south core) and Kolara (north core) — Tadoba\'s two most reliable tiger gates.' },
    { q: 'Best for', a: 'Couples on their first Tadoba trip who want the full safari experience without the luxury-tier premium.' },
  ],
  'tadoba-mid-3n': [
    { q: 'Price', a: '₹94,000 per couple (all-inclusive). Roughly ₹47,000 per person.' },
    { q: 'Duration', a: '3 nights / 4 days with 4 jeep safaris.' },
    { q: 'Where you stay', a: 'Luxury jungle resort with private balconies, double occupancy, all meals incl. snacks.' },
    { q: 'How you travel', a: 'Private 7-seater (Innova Crysta or equivalent) — comfortable for families and small groups with gear.' },
    { q: 'Naturalist', a: 'Senior naturalist on every safari (5+ years guiding Tadoba).' },
    { q: 'Best for', a: 'Returning travellers, families with kids 8+, and photographers needing space for camera equipment.' },
  ],
  'tadoba-luxury-3n': [
    { q: 'Price', a: '₹1,20,000 per couple (all-inclusive). Roughly ₹60,000 per person.' },
    { q: 'Duration', a: '3 nights / 4 days with 4 jeep safaris.' },
    { q: 'Where you stay', a: 'Ultra-luxury jungle lodge with private plunge pools, butler service, curated multi-course meals.' },
    { q: 'How you travel', a: 'Luxury SUV transfers from Nagpur airport across 4 days.' },
    { q: 'Naturalist', a: 'Dedicated naturalist + tracker (two people scouting territories between your safaris).' },
    { q: 'Best for', a: 'Serious wildlife photographers, anniversary trips, and connoisseur travellers prioritising comfort and personalisation.' },
  ],
  'pench-classic-3n': [
    { q: 'Price', a: '₹69,000 per couple (all-inclusive). Roughly ₹34,500 per person.' },
    { q: 'Duration', a: '3 nights / 4 days with 4 jeep safaris.' },
    { q: 'Where you stay', a: 'Mid-tier jungle resort near Turia Gate, double occupancy, all meals included.' },
    { q: 'How you travel', a: 'Private AC sedan transfers from Nagpur airport — at 95 km, Pench is the closest tiger reserve to Nagpur.' },
    { q: 'Gates covered', a: 'Turia (main MP-side core gate) and Karmajhiri (scenic eastern gate along the Pench river, rich birdlife).' },
    { q: 'Best for', a: 'Jungle Book fans, birders, and travellers who want a quieter forest than Tadoba with steady tiger sightings.' },
  ],
  'tadoba-pench-combo-5n': [
    { q: 'Price', a: '₹1,09,000 per couple (all-inclusive). Roughly ₹54,500 per person.' },
    { q: 'Duration', a: '5 nights / 6 days — 3 nights Tadoba + 2 nights Pench, 6 jeep safaris.' },
    { q: 'Where you stay', a: 'Mid-tier jungle resorts in both parks, double occupancy, all meals included.' },
    { q: 'How you travel', a: 'Private AC sedan for the full circuit, including the direct 145 km Tadoba–Pench transfer (no Nagpur backtrack).' },
    { q: 'Gates covered', a: 'Moharli + Kolara in Tadoba, Turia in Pench — the strongest gate in each park.' },
    { q: 'Best for', a: 'First-time central India visitors who want maximum tiger odds and two genuinely different forests in one trip.' },
  ],
};

// --- Per-destination ---
export const destinationQuickAnswers: Record<string, QuickAnswer[]> = {
  tadoba: [
    { q: 'Where', a: 'Chandrapur district, Maharashtra. 140 km from Nagpur airport (NAG), a 3-hour drive.' },
    { q: 'Size', a: '1,727 sq km. 6 core gates, 4 buffer gates.' },
    { q: 'Tigers', a: '85+ tigers as of the last census. Among the highest tiger densities in central India.' },
    { q: 'Best months', a: 'April–June for peak sighting odds (80–95%). November–February for comfortable weather.' },
    { q: 'Sighting rate', a: 'Around 82% on a 4-safari trip during April–June at Moharli or Kolara gates.' },
    { q: 'Closure', a: 'Core zones closed every Tuesday and from 1 July – 30 September (monsoon). Four buffer gates — Agarzari, Junona, Devada-Adegaon, Alizanza — stay open through the monsoon and close on Wednesdays instead, when resort rates drop 30–50%.' },
  ],
  pench: [
    { q: 'Where', a: 'Seoni district, Madhya Pradesh. 95 km from Nagpur airport (NAG), a 2-hour drive.' },
    { q: 'Size', a: '1,179 sq km. 3 working gates (Turia, Jamtara, Karmajhiri).' },
    { q: 'Tigers + other wildlife', a: '60+ tigers, plus leopards, dholes (wild dogs), sloth bears, and 285+ bird species.' },
    { q: 'Best months', a: 'March–June for tigers and dholes. November–February for migratory birds.' },
    { q: 'Cultural significance', a: 'The real-life forest tract that inspired Rudyard Kipling\'s Jungle Book.' },
    { q: 'Closure', a: 'Core zones close 1 July – 30 September. Buffer gates open year-round.' },
  ],
};

// --- Per-gate (top 5 most-trafficked / most-booked) ---
export const gateQuickAnswers: Record<string, QuickAnswer[]> = {
  moharli: [
    { q: 'Reserve', a: 'Tadoba Andhari Tiger Reserve, south core zone. The most popular gate in Tadoba.' },
    { q: 'Sighting rate', a: 'Around 82% across a 4-safari trip — the highest in Tadoba.' },
    { q: 'Famous tigers', a: 'Maya, Choti Tara, Matkasur, and Junabai are the resident territory-holders.' },
    { q: 'Daily permits', a: 'Roughly 20-25 jeeps per safari slot (morning and afternoon). Books out 60-90 days ahead in peak season.' },
    { q: 'Nearest resorts', a: 'Moharli village has the highest resort density of any gate — over 30 properties within 5 km.' },
  ],
  kolara: [
    { q: 'Reserve', a: 'Tadoba Andhari Tiger Reserve, north core zone. Photographer favourite.' },
    { q: 'Sighting rate', a: 'Around 75% — slightly below Moharli but consistently strong.' },
    { q: 'Why photographers prefer it', a: 'Grassland terrain, fewer jeeps per safari slot, and famous open-vista territories of tigers like Choti Tara and Chhota Matka.' },
    { q: 'Nearest village', a: 'Kolara village. Smaller resort cluster than Moharli but premium properties dominate.' },
    { q: 'Daily permits', a: 'Roughly 18-22 jeeps per safari slot. Books out 90-120 days ahead in peak season.' },
  ],
  turia: [
    { q: 'Reserve', a: 'Pench Tiger Reserve, core zone on the Madhya Pradesh side. The main Pench entry.' },
    { q: 'What it\'s known for', a: 'Dense teak forests and predictable tiger territories. The Kipling connection (Mowgli was set near here).' },
    { q: 'Sighting rate', a: 'Around 65–80% in March–June. Lower in winter but bird life is excellent.' },
    { q: 'Daily permits', a: 'Roughly 18-22 jeeps per safari slot. Easier to book than Tadoba core gates.' },
    { q: 'Nearest airport', a: 'Nagpur (NAG), 95 km / 2-hour drive.' },
  ],
  agarzari: [
    { q: 'Reserve', a: 'Tadoba Andhari Tiger Reserve, south buffer zone. The most popular Tadoba buffer gate.' },
    { q: 'Why pick a buffer gate', a: 'Lower permit cost than core, monsoon access (open July-September when core zones close), and rising tiger activity.' },
    { q: 'Sighting rate', a: 'Around 55–65% in peak season. Lower than core but improving year-on-year.' },
    { q: 'Closest to', a: 'Right next to Moharli gate. Same resort cluster.' },
  ],
  jamtara: [
    { q: 'Reserve', a: 'Pench Tiger Reserve, north buffer zone.' },
    { q: 'Why pick it', a: 'Newer gate, quieter safaris, and tigers increasingly habituated to jeeps. Better value than Turia for similar wildlife.' },
    { q: 'Sighting rate', a: 'Around 50-65% in peak months. Strong for leopards and dholes year-round.' },
    { q: 'Famous for', a: 'Excellent for wildlife photography of non-tiger species — sloth bears, leopards, gaur.' },
  ],
};
