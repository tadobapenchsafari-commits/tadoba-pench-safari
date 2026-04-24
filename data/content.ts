// All dummy data lives here. Replace with real content as you gather it.
// Later this moves to a database (Prisma/PostgreSQL).

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  quickFacts: { label: string; value: string }[];
};

export type Gate = {
  slug: string;
  name: string;
  destination: string;
  zone: string;
  description: string;
};

export type Property = {
  slug: string;
  name: string;
  destination: string;
  nearestGate: string;
  tier: 'LUXURY' | 'PREMIUM' | 'MID' | 'BUDGET';
  ownership: 'OWNED' | 'TIE_UP';
  starRating: number;
  shortDescription: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  distanceFromGateMeters: number;
  priceFromINR: number;
};

export type Package = {
  slug: string;
  name: string;
  destination: string;
  durationNights: number;
  durationDays: number;
  priceFromINR: number;
  shortDescription: string;
  heroImage: string;
  inclusions: string[];
  safariCount: number;
};

export const destinations: Destination[] = [
  {
    slug: 'tadoba',
    name: 'Tadoba',
    tagline: 'India\'s most reliable tiger sighting destination',
    description:
      'Tadoba-Andhari Tiger Reserve, spread across 1,727 sq km in the Chandrapur district of Maharashtra, is famed for having one of the highest tiger densities in central India. Dense teak forests, meadows, and the Tadoba lake create the stage for daily encounters with Bengal tigers, leopards, sloth bears, and wild dogs. The reserve has six core gates and multiple buffer zones, offering a variety of terrains and wildlife experiences.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    quickFacts: [
      { label: 'Area', value: '1,727 sq km' },
      { label: 'Best Months', value: 'Oct – Jun' },
      { label: 'Tigers', value: '85+' },
      { label: 'Nearest Airport', value: 'Nagpur (140 km)' },
    ],
  },
  {
    slug: 'pench',
    name: 'Pench',
    tagline: 'The land that inspired The Jungle Book',
    description:
      'Straddling Madhya Pradesh and Maharashtra, Pench Tiger Reserve is the real-life setting that inspired Rudyard Kipling\'s Jungle Book. Open grasslands, teak forests, and the Pench river shape a landscape where tigers, leopards, wild dogs, and over 325 bird species thrive. Pench has earned the TX2 award for doubling its tiger count, and its buffer zones offer quieter, photographer-friendly safaris.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pench_National_Park_habitat_shot.jpg/1920px-Pench_National_Park_habitat_shot.jpg',
    quickFacts: [
      { label: 'Area', value: '1,179 sq km' },
      { label: 'Best Months', value: 'Oct – Jun' },
      { label: 'Tigers', value: '60+' },
      { label: 'Nearest Airport', value: 'Nagpur (95 km)' },
    ],
  },
];

export const gates: Gate[] = [
  {
    slug: 'moharli',
    name: 'Moharli Gate',
    destination: 'tadoba',
    zone: 'Core – South',
    description:
      'The most popular gate at Tadoba, with the highest resort density and consistently strong tiger sightings. Ideal for first-time visitors.',
  },
  {
    slug: 'kolara',
    name: 'Kolara Gate',
    destination: 'tadoba',
    zone: 'Core – North',
    description:
      'The quieter, more scenic gate on the northern edge of the reserve. Favored by photographers for its grasslands and open vistas.',
  },
  {
    slug: 'khutwanda',
    name: 'Khutwanda Gate',
    destination: 'tadoba',
    zone: 'Core – South-East',
    description:
      'A lesser-known gate with excellent sighting records in recent seasons, especially for leopards and sloth bears.',
  },
  {
    slug: 'turia',
    name: 'Turia Gate',
    destination: 'pench',
    zone: 'Core – Madhya Pradesh',
    description:
      'The main gate on the MP side of Pench, known for its dense teak forests and predictable tiger territories.',
  },
  {
    slug: 'jamtara',
    name: 'Jamtara Gate',
    destination: 'pench',
    zone: 'Buffer – North',
    description:
      'A newer buffer gate offering excellent value and quieter safaris. Tigers here are increasingly habituated to jeeps.',
  },
  {
    slug: 'karmajhiri',
    name: 'Karmajhiri Gate',
    destination: 'pench',
    zone: 'Core – East',
    description:
      'Scenic eastern entry into Pench, known for the Pench river landscape and rich birdlife.',
  },
];

export const properties: Property[] = [
  {
    slug: 'forest-villa-moharli',
    name: 'Forest Villa Moharli',
    destination: 'tadoba',
    nearestGate: 'moharli',
    tier: 'LUXURY',
    ownership: 'OWNED',
    starRating: 5,
    shortDescription:
      'Twelve private villas set among flame-of-the-forest trees, 300m from Moharli gate. Each villa has a plunge pool and forest-facing deck.',
    heroImage:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80',
    ],
    amenities: ['Plunge pool', 'Restaurant', 'Spa', 'WiFi', 'AC', 'Naturalist'],
    distanceFromGateMeters: 300,
    priceFromINR: 18500,
  },
  {
    slug: 'teak-grove-lodge',
    name: 'Teak Grove Lodge',
    destination: 'tadoba',
    nearestGate: 'kolara',
    tier: 'PREMIUM',
    ownership: 'TIE_UP',
    starRating: 4,
    shortDescription:
      'A boutique ten-room lodge near Kolara gate, with an open-air dining pavilion and guided birding walks along the Andhari river.',
    heroImage:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1600&q=80',
    ],
    amenities: ['Pool', 'Restaurant', 'WiFi', 'AC', 'Bar'],
    distanceFromGateMeters: 800,
    priceFromINR: 11500,
  },
  {
    slug: 'jungle-edge-camp-khutwanda',
    name: 'Jungle Edge Camp',
    destination: 'tadoba',
    nearestGate: 'khutwanda',
    tier: 'MID',
    ownership: 'TIE_UP',
    starRating: 3,
    shortDescription:
      'Comfortable tented camp ideal for families and first-time safari-goers. Bonfire dinners and traditional Vidarbha cuisine.',
    heroImage:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=80',
    ],
    amenities: ['Restaurant', 'Bonfire', 'Parking', 'AC tents'],
    distanceFromGateMeters: 1500,
    priceFromINR: 6500,
  },
  {
    slug: 'pench-river-retreat',
    name: 'Pench River Retreat',
    destination: 'pench',
    nearestGate: 'turia',
    tier: 'LUXURY',
    ownership: 'OWNED',
    starRating: 5,
    shortDescription:
      'Fifteen river-facing suites inspired by Kipling\'s Seoni. Infinity pool overlooking the Pench river, and an on-site wildlife library.',
    heroImage:
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80',
    ],
    amenities: ['Infinity pool', 'Restaurant', 'Library', 'Spa', 'WiFi', 'AC'],
    distanceFromGateMeters: 500,
    priceFromINR: 22000,
  },
  {
    slug: 'seoni-forest-lodge',
    name: 'Seoni Forest Lodge',
    destination: 'pench',
    nearestGate: 'jamtara',
    tier: 'PREMIUM',
    ownership: 'TIE_UP',
    starRating: 4,
    shortDescription:
      'Eight cottages spread across a four-acre mahua grove. Private naturalists, photography hides, and a star-gazing deck.',
    heroImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    ],
    amenities: ['Pool', 'Restaurant', 'Star deck', 'Naturalist', 'WiFi'],
    distanceFromGateMeters: 700,
    priceFromINR: 13500,
  },
  {
    slug: 'karmajhiri-tented-camp',
    name: 'Karmajhiri Tented Camp',
    destination: 'pench',
    nearestGate: 'karmajhiri',
    tier: 'MID',
    ownership: 'TIE_UP',
    starRating: 3,
    shortDescription:
      'A no-frills but warm tented camp on the quieter eastern edge of Pench. Great value for serious wildlife enthusiasts.',
    heroImage:
      'https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1533873984035-25970ab07461?w=1600&q=80',
    ],
    amenities: ['Restaurant', 'Bonfire', 'Parking'],
    distanceFromGateMeters: 1200,
    priceFromINR: 5500,
  },
];

export const packages: Package[] = [
  {
    slug: 'tadoba-classic-3n',
    name: 'Tadoba Classic — 3 Nights',
    destination: 'tadoba',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 32000,
    shortDescription:
      'Four safaris across Moharli and Kolara gates, premium accommodation, and airport transfers. Our most popular first-time safari package.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Matkasur_the_male_tiger_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-Matkasur_the_male_tiger_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    inclusions: [
      '3 nights premium accommodation',
      '4 jeep safaris (2 gates)',
      'All meals',
      'Airport transfers from Nagpur',
      'Experienced naturalist',
      'All permits & taxes',
    ],
    safariCount: 4,
  },
  {
    slug: 'tadoba-pench-combo-5n',
    name: 'Tadoba + Pench Combo — 5 Nights',
    destination: 'tadoba',
    durationNights: 5,
    durationDays: 6,
    priceFromINR: 58000,
    shortDescription:
      'The best of central India in one trip. Three nights in Tadoba, two in Pench, six safaris total, with a private driver between reserves.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Pench_Tiger_Reserve%2C_MP%2C_India._05.jpg',
    inclusions: [
      '3 nights Tadoba + 2 nights Pench',
      '6 jeep safaris across both reserves',
      'All meals and transfers',
      'Private AC vehicle between reserves',
      'Senior naturalist',
    ],
    safariCount: 6,
  },
  {
    slug: 'photography-week-tadoba',
    name: 'Tadoba Photography Week',
    destination: 'tadoba',
    durationNights: 6,
    durationDays: 7,
    priceFromINR: 110000,
    shortDescription:
      'Twelve safaris with dedicated photography naturalists, early-morning buffer zone access, and post-processing sessions in the evening.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sambar_deer_in_habitat.jpg',
    inclusions: [
      '6 nights luxury accommodation',
      '12 safaris (dedicated photography jeep)',
      'Photography naturalist',
      'Evening review sessions',
      'All meals and transfers',
      'Permits for prime zones',
    ],
    safariCount: 12,
  },
  {
    slug: 'pench-weekend-2n',
    name: 'Pench Weekend Escape — 2 Nights',
    destination: 'pench',
    durationNights: 2,
    durationDays: 3,
    priceFromINR: 19500,
    shortDescription:
      'A quick weekend getaway for Mumbai, Pune, and Nagpur travelers. Three safaris at Turia and Jamtara gates.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Karmazari_Pench_National_Park_13.jpg',
    inclusions: [
      '2 nights premium accommodation',
      '3 jeep safaris',
      'All meals',
      'Transfers from Nagpur',
    ],
    safariCount: 3,
  },
  {
    slug: 'pench-classic-3n',
    name: 'Pench Classic — 3 Nights',
    destination: 'pench',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 36000,
    shortDescription:
      'Five safaris across Turia, Jamtara, and Karmajhiri gates — the full Pench experience with Kipling-country storytelling, leopards, and dhole packs alongside the tigers.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dhole_Stroll_at_Pench_National_Park%2C_India.jpg/1920px-Dhole_Stroll_at_Pench_National_Park%2C_India.jpg',
    inclusions: [
      '3 nights premium accommodation',
      '5 jeep safaris (3 gates)',
      'All meals',
      'Airport transfers from Nagpur or Jabalpur',
      'Experienced naturalist',
      'All permits & taxes',
    ],
    safariCount: 5,
  },
  {
    slug: 'pench-birding-wildlife-4n',
    name: 'Pench Birding & Wildlife — 4 Nights',
    destination: 'pench',
    durationNights: 4,
    durationDays: 5,
    priceFromINR: 52000,
    shortDescription:
      'Pench hosts 285+ bird species including migratory raptors from November. This package pairs six safaris with dedicated early-morning birding walks led by an ornithologist-naturalist.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Indian_Peacock_courtship_display_at_Pench_national_park_%28April%2C_2024%29_08.jpg/1920px-Indian_Peacock_courtship_display_at_Pench_national_park_%28April%2C_2024%29_08.jpg',
    inclusions: [
      '4 nights eco-lodge accommodation',
      '6 jeep safaris across all major zones',
      'Guided birding walks each morning',
      'Ornithologist naturalist',
      'All meals',
      'Checklist of 285+ species',
      'Nagpur / Jabalpur transfers',
    ],
    safariCount: 6,
  },
  {
    slug: 'pench-family-adventure-3n',
    name: 'Pench Family Adventure — 3 Nights',
    destination: 'pench',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 42000,
    shortDescription:
      'Designed for families with kids 6+ — shorter canter safaris, a Mowgli storytelling evening, nature walks, and a village visit. Resorts selected for pool, family rooms, and kid-friendly meals.',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Spotted_Deer_in_Pench_National_Park_India.jpg/1920px-Spotted_Deer_in_Pench_National_Park_India.jpg',
    inclusions: [
      '3 nights family-friendly resort with pool',
      '4 jeep / canter safaris',
      'Mowgli-themed storytelling evening',
      'Guided nature walk',
      'Village visit',
      'All meals (kid menu available)',
      'Transfers',
    ],
    safariCount: 4,
  },
];
