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
    heroImage: '/images/dest-tadoba.jpg',
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
    heroImage: '/images/dest-pench.jpg',
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
    slug: 'navegaon',
    name: 'Navegaon Gate',
    destination: 'tadoba',
    zone: 'Core – North',
    description:
      'The northernmost core gate of Tadoba — undeveloped, wild, and increasingly productive for tiger sightings after the zone expansion.',
  },
  {
    slug: 'agarzari',
    name: 'Agarzari Gate',
    destination: 'tadoba',
    zone: 'Buffer – South',
    description:
      'The most popular Tadoba buffer gate, right next to Moharli. Lower permit cost, monsoon access, and rising tiger activity.',
  },
  {
    slug: 'junona',
    name: 'Junona Gate',
    destination: 'tadoba',
    zone: 'Buffer – South',
    description:
      'A quieter southern buffer gate near Chandrapur. Ideal for weekend visitors from Nagpur who want low-crowd safaris.',
  },
  {
    slug: 'devada-adegaon',
    name: 'Devada-Adegaon Gate',
    destination: 'tadoba',
    zone: 'Buffer – East',
    description:
      'Eastern buffer zone with mixed teak and bamboo forest. Strong for leopard, sloth bear, and dhole encounters.',
  },
  {
    slug: 'alizanza',
    name: 'Alizanza Gate',
    destination: 'tadoba',
    zone: 'Buffer – North',
    description:
      'Buffer gate bordering Kolara core. Grassland terrain with open vistas — favoured by photographers and birders.',
  },
  {
    slug: 'pangdi',
    name: 'Pangdi Gate',
    destination: 'tadoba',
    zone: 'Core – West',
    description:
      'Western core gate with the smallest permit allotment at Tadoba. Remote and quiet, favoured by patient wildlife observers.',
  },
  {
    slug: 'zari',
    name: 'Zari Gate',
    destination: 'tadoba',
    zone: 'Core – East',
    description:
      'Eastern core gate with teak and bamboo forest. Good tiger density and fewer jeeps than Moharli or Kolara.',
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
    slug: 'tadoba-aranya-villa',
    name: 'Tadoba Aranya Villa Resort',
    destination: 'tadoba',
    nearestGate: 'kolara',
    tier: 'PREMIUM',
    ownership: 'TIE_UP',
    starRating: 5,
    shortDescription:
      'An intimate four-room luxury villa tucked into the wilderness near Kolara Gate. Swimming pool, kids play area, and forest-facing lawns make it equally good for couples and families. Rated 4.8 across 95+ reviews.',
    heroImage:
      '/images/dest-tadoba.jpg',
    images: [
      '/images/dest-tadoba.jpg',
      '/images/dest-tadoba.jpg',
    ],
    amenities: ['Swimming pool', 'WiFi', 'Restaurant', 'Kids play area', 'Parking', 'Naturalist'],
    distanceFromGateMeters: 2500,
    priceFromINR: 12500,
  },
  {
    slug: 'a1-tiger-resort-chimur',
    name: 'A1 Tiger Resort',
    destination: 'tadoba',
    nearestGate: 'kolara',
    tier: 'MID',
    ownership: 'TIE_UP',
    starRating: 4,
    shortDescription:
      'Well-appointed cottages with a sparkling pool, on-site restaurant, and bonfire pit — set in Masal Khurd, Chimur, 1.5 miles from Shri Hari Balaji temple and 5.7 miles from Kolara Gate. 24/7 power backup.',
    heroImage:
      '/images/wildlife-tiger-grass-1.jpg',
    images: [
      '/images/wildlife-tiger-grass-1.jpg',
    ],
    amenities: ['Swimming pool', 'Restaurant', 'Bonfire', '24/7 power backup', 'Events area'],
    distanceFromGateMeters: 9000,
    priceFromINR: 6500,
  },
  {
    slug: 'jungle-home-tadoba-kolara',
    name: 'Jungle Home Tadoba — Wilderness Lodge',
    destination: 'tadoba',
    nearestGate: 'kolara',
    tier: 'LUXURY',
    ownership: 'TIE_UP',
    starRating: 5,
    shortDescription:
      'A five-minute walk from Kolara Gate — premium cottages, luxury suites, and three-bedroom villas with private pools. On-site spa, multi-cuisine restaurant with locally sourced ingredients, and guided nature walks.',
    heroImage:
      '/images/wildlife-tiger-lying.jpg',
    images: [
      '/images/wildlife-tiger-lying.jpg',
      '/images/wildlife-tiger-lying.jpg',
    ],
    amenities: ['Private pool villas', 'Spa', 'Multi-cuisine restaurant', 'Nature walks', 'Naturalist', 'WiFi'],
    distanceFromGateMeters: 400,
    priceFromINR: 22000,
  },
  {
    slug: '7-tigers-resort-tadoba',
    name: '7 Tigers Resort Tadoba',
    destination: 'tadoba',
    nearestGate: 'kolara',
    tier: 'PREMIUM',
    ownership: 'TIE_UP',
    starRating: 4,
    shortDescription:
      'Owner-driven resort just 4km from Kolara Safari Gate, promoted by Ritesh Kumar Anand. Multi-cuisine restaurant, swimming pool, spa therapy, indoor and outdoor games, and jungle safaris with expert naturalists. Ranked #1 on TripAdvisor for Masal Bk.',
    heroImage:
      '/images/dest-tadoba.jpg',
    images: [
      '/images/dest-tadoba.jpg',
    ],
    amenities: ['Swimming pool', 'Spa', 'Multi-cuisine restaurant', 'Indoor games', 'Naturalist', 'Safaris'],
    distanceFromGateMeters: 4000,
    priceFromINR: 8500,
  },
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
    slug: 'tadoba-budget-3n',
    name: 'Tadoba Budget — 3 Nights',
    destination: 'tadoba',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 74000,
    shortDescription:
      'Complete Tadoba safari at our entry tier — mid-tier jungle resort with all meals, four jeep safaris across two gates, and AC sedan transfers from Nagpur. Best for first-time visitors who want the full experience without the premium spend. Quoted for two guests sharing.',
    heroImage: '/images/pkg-tadoba-classic.jpg',
    inclusions: [
      '3 nights mid-tier jungle resort, double occupancy',
      'All meals (breakfast, lunch, dinner)',
      '4 jeep safaris across 2 gates (Moharli & Kolara)',
      'Private AC sedan transfers from Nagpur airport (4 days)',
      'Experienced naturalist on every safari',
      'All permits, gypsy charges, guide and park fees',
    ],
    safariCount: 4,
  },
  {
    slug: 'tadoba-mid-3n',
    name: 'Tadoba Mid — 3 Nights',
    destination: 'tadoba',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 94000,
    shortDescription:
      'Step up to a luxury jungle resort with private balconies, plus a 7-seater vehicle so families or small groups travel comfortably. Same four-safari, two-gate coverage as our Budget tier — the upgrade is in where you stay and how you travel. Quoted for two guests sharing.',
    heroImage: '/images/pkg-tadoba-pench-combo.jpg',
    inclusions: [
      '3 nights luxury jungle resort, double occupancy',
      'All meals (breakfast, lunch, dinner, snacks)',
      '4 jeep safaris across 2 gates (Moharli & Kolara)',
      'Private AC 7-seater transfers from Nagpur airport (4 days)',
      'Senior naturalist on every safari',
      'All permits, gypsy charges, guide and park fees',
    ],
    safariCount: 4,
  },
  {
    slug: 'tadoba-luxury-3n',
    name: 'Tadoba Luxury — 3 Nights',
    destination: 'tadoba',
    durationNights: 3,
    durationDays: 4,
    priceFromINR: 120000,
    shortDescription:
      'Our flagship tier. Ultra-luxury jungle lodge with private plunge pools, luxury SUV transfers, and a dedicated naturalist who plans every safari around your tiger-territory preferences. For couples and connoisseur travellers. Quoted for two guests sharing.',
    heroImage: '/images/wildlife-tiger-lying.jpg',
    inclusions: [
      '3 nights ultra-luxury jungle lodge, double occupancy',
      'All meals incl. private dining options',
      '4 jeep safaris across 2 gates (Moharli & Kolara)',
      'Luxury SUV transfers from Nagpur airport (4 days)',
      'Dedicated naturalist + tracker',
      'All permits, gypsy charges, guide and park fees',
      'Welcome amenities and evening campfire',
    ],
    safariCount: 4,
  },
];
