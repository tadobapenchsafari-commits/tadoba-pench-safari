export type GateDetail = {
  slug: string;
  targetKeyword: string;
  heroImage: string;
  metaDescription: string;
  intro: string;
  location: {
    distanceFromNagpur?: string;
    distanceFromChandrapur?: string;
    distanceFromJabalpur?: string;
    nearestVillage: string;
    mapQuery: string;
  };
  dailyPermits: string;
  entrySchedule: {
    morningSlot: string;
    eveningSlot: string;
    note: string;
  };
  famousTigers: string[];
  bestFor: string[];
  tradeOffs: string[];
  seasonalNotes: { season: string; notes: string }[];
  faqs: { q: string; a: string }[];
  nearbyPropertySlugs: string[];
};

export const gateDetails: Record<string, GateDetail> = {
  moharli: {
    slug: 'moharli',
    targetKeyword: 'Moharli Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    metaDescription:
      'Complete Moharli Gate Tadoba guide — permit timings, sighting odds, famous tigers, resort options, and how to book core zone safaris at Tadoba\'s most popular gate.',
    intro:
      'Moharli is the oldest and most developed core-zone gate at Tadoba Andhari Tiger Reserve. If you\'ve heard "book a Tadoba safari", Moharli is almost certainly where you pictured yourself. It issues the largest daily permit quota (~55 jeeps per slot), has the most resort density nearby, and has consistently produced strong tiger-sighting numbers for two decades. First-timers should default to Moharli unless there\'s a specific reason to go elsewhere.',
    location: {
      distanceFromNagpur: '140 km (3.5 hrs)',
      distanceFromChandrapur: '45 km (1 hr)',
      nearestVillage: 'Moharli village, Chimur tehsil, Chandrapur district',
      mapQuery: 'Moharli+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Moharli has the largest permit allotment among Tadoba gates — exact numbers are set per season by the Forest Department. Online quota is smaller than total quota, so going via an authorised operator often helps.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Gate is closed every Tuesday year-round. Core zones shut completely 1 July to 30 September for monsoon.',
    },
    famousTigers: [
      'Maya — legendary tigress of the Telia lake area',
      'Chhota Matka — dominant male, wide territory',
      'Bajrang — large male frequently sighted here',
    ],
    bestFor: [
      'First-time safari visitors (infrastructure, clean facilities)',
      'Families with young children (gate has toilets, shade, parking)',
      'Last-minute bookings (more permits = better availability)',
      'Photographers targeting Telia lake sightings',
    ],
    tradeOffs: [
      'Heavy traffic at sightings — often 10–15 jeeps clustered around one tiger',
      'Resort density means busier evenings in nearby villages',
      'Zones rotate: you might get Moharli, Khutwanda, or Khari on any given safari',
    ],
    seasonalNotes: [
      {
        season: 'Summer (March–June)',
        notes: 'Peak tiger-sighting window. Water sources dry up; tigers concentrate at Telia, Tadoba, and Pandharpauni lakes. Morning safaris strongly recommended — afternoons hit 44°C.',
      },
      {
        season: 'Monsoon shoulder (Oct–Nov)',
        notes: 'Lush green forest, migratory birds arrive, sighting rates around 60–70%. Comfortable weather for long safaris.',
      },
      {
        season: 'Winter (Dec–Feb)',
        notes: 'Cool mornings (6–10°C), excellent for bird photography. Tigers less concentrated. Book sunrise safaris for golden-hour light.',
      },
    ],
    faqs: [
      {
        q: 'Is Moharli Gate better than Kolara?',
        a: 'Moharli is better for first-timers and families due to infrastructure and higher permit availability. Kolara is better for photographers and experienced visitors wanting fewer jeeps at sightings.',
      },
      {
        q: 'How many jeeps are allowed at Moharli Gate per safari?',
        a: 'Approximately 55 jeeps per slot (morning or evening). This is the highest of any Tadoba core gate, making last-minute bookings slightly easier here.',
      },
      {
        q: 'What is the permit cost at Moharli Gate?',
        a: 'Permit costs ₹2,500–3,500 per jeep (6 seats) for Indian nationals. Foreign nationals pay an additional surcharge. Weekend rates can be higher.',
      },
      {
        q: 'Which resorts are closest to Moharli Gate?',
        a: 'Tiger Villa, Svasara Jungle Lodge, Tadoba Tiger Resort, and many mid-tier lodges are within 500m–5km of Moharli gate.',
      },
      {
        q: 'Can I book Moharli permits online?',
        a: 'Yes, via the Maharashtra Forest Department official portal mytadoba.mahaforest.gov.in. Permits open 120 days before the safari date at 6 AM IST and peak-season slots sell out within 30–60 minutes.',
      },
    ],
    nearbyPropertySlugs: ['forest-villa-moharli', 'jungle-edge-camp-khutwanda'],
  },
  kolara: {
    slug: 'kolara',
    targetKeyword: 'Kolara Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/A_road_in_between_bamboo_forest_at_Tadoba_Andhari_Tiger_Reserve_%28India%2C_2016%29.jpg',
    metaDescription:
      'Everything about Kolara Gate Tadoba — permit availability, famous tigers like Choti Tara and Chhota Matka, resort options, and why photographers choose Kolara over Moharli.',
    intro:
      'Kolara is the northern core-zone gate of Tadoba and the quietest of the main gates. It issues only ~25 jeeps per slot versus Moharli\'s 55, which translates directly to fewer jeeps clustered around a tiger sighting. Serious wildlife photographers and repeat visitors overwhelmingly prefer Kolara — the experience is more intimate, the driving is less frenetic, and the chances of an unhurried sighting are genuinely higher.',
    location: {
      distanceFromNagpur: '110 km (3 hrs via Warora)',
      distanceFromChandrapur: '95 km (2 hrs)',
      nearestVillage: 'Kolara village, Chimur tehsil, Chandrapur district',
      mapQuery: 'Kolara+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Kolara has a smaller allotment than Moharli — exact numbers vary by season and are set by the Forest Department. Fewer jeeps per slot is exactly why experienced photographers pick this gate.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Tuesdays. Core zones shut 1 July to 30 September.',
    },
    famousTigers: [
      'Choti Tara — tigress who has ruled the Kolara-Alizanza belt for years, raised multiple cub litters here',
      'Chhota Matka — male who ranges across Bhanuskhindi and Alizanza zones',
      'Bajrang — large male occasionally sighted in the North Bhanuskhindi route',
    ],
    bestFor: [
      'Wildlife photographers wanting fewer vehicles at sightings',
      'Repeat Tadoba visitors who\'ve already done Moharli',
      'Travellers coming from Nagpur via Warora (shorter drive)',
      'Birding enthusiasts — Alizanza grasslands have excellent raptor activity',
    ],
    tradeOffs: [
      'Fewer permits = books out faster; plan 120 days ahead for peak season',
      'Fewer resorts within 5km — you may need to stay at Moharli and drive',
      'Infrastructure at gate is simpler (no restaurant, fewer toilets)',
    ],
    seasonalNotes: [
      {
        season: 'Summer (March–June)',
        notes: 'Choti Tara and her cubs often frequent the North Bhanuskhindi route as waterholes dry up. Morning safaris have highest sighting odds.',
      },
      {
        season: 'Monsoon shoulder (Oct–Nov)',
        notes: 'Alizanza grasslands in peak form — golden light, migrant birds. Dhole (wild dog) sightings rise as cubs emerge.',
      },
      {
        season: 'Winter (Dec–Feb)',
        notes: 'Quieter even by Kolara standards. Excellent for long telephoto photography — fewer vehicle reflections, cleaner air.',
      },
    ],
    faqs: [
      {
        q: 'Why do photographers prefer Kolara Gate over Moharli?',
        a: 'Kolara issues ~25 jeeps per slot vs Moharli\'s ~55. When a tiger is spotted, you typically have 4–6 jeeps around rather than 10–15. Less glare on camera glass, less dust, less engine noise — better sightings.',
      },
      {
        q: 'Which tigers are commonly seen at Kolara Gate?',
        a: 'The tigress Choti Tara and her cubs dominate the Kolara-Alizanza belt. Male tigers Chhota Matka and Bajrang also range here across Bhanuskhindi and Kolara zones.',
      },
      {
        q: 'How far is Kolara Gate from Nagpur?',
        a: 'About 110 km via Warora — roughly 3 hours by road. Counter-intuitively, this is slightly shorter time-wise than Nagpur to Moharli in most seasons.',
      },
      {
        q: 'Is it easier to book Kolara or Moharli permits?',
        a: 'Moharli is easier for last-minute bookings because it issues more permits. Kolara is worth planning 120 days ahead — it sells out faster, especially for weekends and summer.',
      },
      {
        q: 'Are there good resorts near Kolara Gate?',
        a: 'Yes, growing options including Tadoba Aranya Villa, Jungle Home Tadoba Wilderness Lodge, 7 Tigers Resort, and A1 Tiger Resort — all within 5 km of the gate.',
      },
    ],
    nearbyPropertySlugs: ['tadoba-aranya-villa', 'jungle-home-tadoba-kolara', '7-tigers-resort-tadoba', 'a1-tiger-resort-chimur'],
  },
  khutwanda: {
    slug: 'khutwanda',
    targetKeyword: 'Khutwanda Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    metaDescription:
      'Khutwanda Gate Tadoba guide — a lesser-known core-zone gate with strong leopard and sloth bear records. Permits, timings, and when to choose Khutwanda over Moharli.',
    intro:
      'Khutwanda is the quieter neighbour to Moharli on Tadoba\'s south-eastern edge. It shares routes into the same core zones — but fewer visitors have heard of it, which means lower competition for permits and less jeep traffic inside. For leopard and sloth bear enthusiasts especially, recent seasons at Khutwanda have been remarkable.',
    location: {
      distanceFromNagpur: '150 km (3.5 hrs)',
      distanceFromChandrapur: '55 km (1 hr 15 min)',
      nearestVillage: 'Khutwanda village, Chimur tehsil',
      mapQuery: 'Khutwanda+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Khutwanda runs a smaller quota than Moharli and Kolara — exact counts are set by the Forest Department per season. Permits are typically easier to secure here.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Tuesdays. Core zones shut in monsoon (July–Sept).',
    },
    famousTigers: [
      'Tigers from the Khari and Khutwanda zones rotate through this gate',
      'Leopard sightings particularly strong in Khari zone',
      'Sloth bear family regularly reported near Panchdhara waterhole',
    ],
    bestFor: [
      'Leopard and sloth bear enthusiasts',
      'Photographers who\'ve already done Moharli and Kolara',
      'Travellers seeking permits during peak season (less competition)',
      'Repeat visitors looking to explore a less-common gate',
    ],
    tradeOffs: [
      'Lower tiger-sighting frequency than Moharli or Kolara',
      'Very few dedicated resorts nearby — most guests stay at Moharli',
      'Gate infrastructure is basic',
    ],
    seasonalNotes: [
      {
        season: 'Summer (March–June)',
        notes: 'Best tiger-sighting probability via Khari zone. Leopards become more visible as understorey thins.',
      },
      {
        season: 'Winter (Dec–Feb)',
        notes: 'Excellent for sloth bear and ungulate photography. Quieter than Moharli on weekends.',
      },
    ],
    faqs: [
      {
        q: 'Is Khutwanda Gate good for tiger sightings?',
        a: 'Khutwanda\'s tiger sighting rates are lower than Moharli and Kolara, but it compensates with stronger leopard and sloth bear records. Best picked as a supplementary gate, not a primary one.',
      },
      {
        q: 'How many jeeps are allowed at Khutwanda?',
        a: 'Around 20 jeeps per slot — the smallest quota among Tadoba\'s main core gates. Permits are usually easier to secure here, even during peak months.',
      },
      {
        q: 'Where do most visitors stay for Khutwanda safaris?',
        a: 'Most stay at Moharli-area resorts (a 15–20 minute drive) since dedicated Khutwanda accommodation is limited.',
      },
    ],
    nearbyPropertySlugs: ['jungle-edge-camp-khutwanda'],
  },
  turia: {
    slug: 'turia',
    targetKeyword: 'Turia Gate Pench',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Pench_National_Park_habitat_shot.jpg/1920px-Pench_National_Park_habitat_shot.jpg',
    metaDescription:
      'Turia Gate Pench is the main entry on the Madhya Pradesh side — dense teak forest, predictable tiger territories, and the Kipling connection. Permits, timings, resorts.',
    intro:
      'Turia is the flagship gate on the Madhya Pradesh side of Pench Tiger Reserve and the main entry point for most first-time Pench visitors. It leads into dense teak and sal forests where Rudyard Kipling set The Jungle Book. Tiger territories here are relatively predictable — the Collarwali lineage, particularly, has kept the Turia beats productive for 15+ years.',
    location: {
      distanceFromNagpur: '95 km (2 hrs)',
      distanceFromJabalpur: '210 km (4.5 hrs)',
      nearestVillage: 'Turia village, Seoni district, Madhya Pradesh',
      mapQuery: 'Turia+Gate+Pench+Tiger+Reserve+Madhya+Pradesh',
    },
    dailyPermits: 'Turia is the highest-capacity gate on the MP side of Pench. Exact numbers are set seasonally by the MP Forest Department; online quota is smaller than the total quota.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed every Wednesday. Core zones shut 1 July to 30 September.',
    },
    famousTigers: [
      'Descendants of Collarwali (the "Supermom" who raised 26 cubs) — her territory still produces regular sightings',
      'BMW (Big Male from West) — large male ranging Turia-Karmajhiri',
      'Langdi tigress and her cubs — recent favourites for Turia visitors',
    ],
    bestFor: [
      'First-time Pench visitors',
      'Jungle Book storytelling trips (families)',
      'Travellers based in Nagpur — closest major gate to the city',
      'Those wanting tiger + leopard + dhole diversity',
    ],
    tradeOffs: [
      'Can be busy on weekends and school holidays',
      'Sightings sometimes draw 8–10 jeep clusters on popular tigers',
      'Wednesday closure often catches travellers off guard',
    ],
    seasonalNotes: [
      {
        season: 'Summer (March–June)',
        notes: 'Peak tiger-sighting period. Water bodies shrink and tigers gather at Piparia and Alikatta waterholes.',
      },
      {
        season: 'Monsoon shoulder (Nov)',
        notes: 'Migratory raptors arrive — excellent for birding alongside the usual wildlife. Weather comfortable (25°C days).',
      },
      {
        season: 'Winter (Dec–Feb)',
        notes: 'Great light for photography. Leopard and dhole sightings increase. Cold mornings — pack layers.',
      },
    ],
    faqs: [
      {
        q: 'Is Turia the best gate at Pench?',
        a: 'Turia is the most popular and well-run gate, ideal for first-time visitors. For a quieter experience, Karmajhiri or the buffer zone Jamtara are better alternatives.',
      },
      {
        q: 'How far is Turia Gate from Nagpur?',
        a: 'About 95 km — roughly 2 hours by road. This makes Pench an easier weekend trip from Nagpur than Tadoba.',
      },
      {
        q: 'When is Turia Gate closed?',
        a: 'Closed every Wednesday year-round. Core zone at Turia also shuts completely during monsoon (1 July to 30 September).',
      },
      {
        q: 'Which tigers are famous at Turia?',
        a: 'Descendants of Collarwali (the legendary Pench tigress), along with dominant males like BMW and up-and-coming tigresses like Langdi.',
      },
    ],
    nearbyPropertySlugs: ['pench-river-retreat'],
  },
  jamtara: {
    slug: 'jamtara',
    targetKeyword: 'Jamtara Gate Pench',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dhole_Stroll_at_Pench_National_Park%2C_India.jpg/1920px-Dhole_Stroll_at_Pench_National_Park%2C_India.jpg',
    metaDescription:
      'Jamtara is Pench\'s top buffer-zone gate — better value permits, quieter safaris, and tigers increasingly habituated to jeeps. Complete 2026 guide.',
    intro:
      'Jamtara is the best-positioned buffer gate at Pench and a favourite among travellers who\'ve outgrown the Turia traffic. Buffer zones were historically overlooked in favour of the core, but Jamtara has changed that — tigers here are increasingly comfortable with jeeps, sightings are genuinely good, and permits are half the cost of Turia\'s.',
    location: {
      distanceFromNagpur: '100 km (2 hrs 15 min)',
      distanceFromJabalpur: '195 km (4 hrs)',
      nearestVillage: 'Jamtara village, Seoni district, MP',
      mapQuery: 'Jamtara+Gate+Pench+Tiger+Reserve',
    },
    dailyPermits: 'Jamtara is Pench\'s main buffer gate with a growing allotment. Exact counts are set per season by the Forest Department. Permits are cheaper than Turia core.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Buffer zones sometimes remain open during monsoon (check with operator). Wednesday closure applies.',
    },
    famousTigers: [
      'Habituated tigresses with cubs in the Jamtara beat',
      'Male tigers from Turia occasionally range into Jamtara',
      'Sloth bears, dhole packs, and leopards regularly sighted',
    ],
    bestFor: [
      'Repeat Pench visitors wanting to avoid core-zone crowds',
      'Budget-conscious travellers (permits ₹1,200–1,800 vs Turia\'s ₹2,500+)',
      'Monsoon travel — buffer often stays open',
      'Photographers — less jeep competition for clean shots',
    ],
    tradeOffs: [
      'Tiger density slightly lower than Turia\'s core',
      'Fewer dedicated luxury resorts in the immediate area',
      'Some guests expect "premium" gate infrastructure and find it modest',
    ],
    seasonalNotes: [
      {
        season: 'Monsoon (July–Sept)',
        notes: 'Jamtara\'s biggest edge — the gate often stays open while Turia core is shut. Lush green forest, dramatic storm skies.',
      },
      {
        season: 'Summer (March–June)',
        notes: 'Good sighting rates, especially as core-zone tigers spill into buffer looking for prey.',
      },
    ],
    faqs: [
      {
        q: 'Is Jamtara Gate worth it vs Turia?',
        a: 'For repeat visitors and value-conscious travellers, Jamtara is better. For first-timers wanting maximum tiger odds, stick with Turia or combine both.',
      },
      {
        q: 'Does Jamtara stay open during the monsoon?',
        a: 'Yes — as a buffer zone, Jamtara often remains operational 1 July to 30 September when the core gates (like Turia) are closed. Verify with your operator before booking.',
      },
      {
        q: 'What is the permit cost at Jamtara?',
        a: 'Around ₹1,200–1,800 per jeep — roughly half the cost of Turia\'s core-zone permits.',
      },
    ],
    nearbyPropertySlugs: ['seoni-forest-lodge'],
  },
  navegaon: {
    slug: 'navegaon',
    targetKeyword: 'Navegaon Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sambar_deer_in_habitat.jpg',
    metaDescription:
      'Navegaon Gate Tadoba — the northernmost core gate of Tadoba Andhari Tiger Reserve. Permits, timings, tigers, nearest villages, and how to plan a Navegaon safari.',
    intro:
      'Navegaon is the northernmost core gate at Tadoba Andhari Tiger Reserve and still the least developed. For serious wildlife enthusiasts who want wild, undisturbed tracts with almost no jeep traffic, this is where you head. Sighting rates are rising each year as the resident tigers habituate to the handful of jeeps that come through.',
    location: {
      distanceFromNagpur: '125 km (3 hrs)',
      distanceFromChandrapur: '105 km (2 hrs 30 min)',
      nearestVillage: 'Navegaon village, Chimur tehsil, Chandrapur district',
      mapQuery: 'Navegaon+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Navegaon has one of the smallest allotments of any Tadoba core gate. Exact numbers are set per season by the Forest Department. The upside of the small quota: tiny crowds at sightings.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Tuesdays. Core zone shut 1 July to 30 September for monsoon.',
    },
    famousTigers: [
      'Resident male rotating through the Navegaon-Pangdi belt',
      'Tigress with 3 sub-adult cubs reported in 2025',
      'Occasional spillover sightings of Kolara males',
    ],
    bestFor: [
      'Repeat Tadoba visitors who have already done Moharli and Kolara',
      'Photographers seeking uncrowded sightings',
      'Birders — the zone has rich grassland edges',
      'Off-beat wildlife enthusiasts',
    ],
    tradeOffs: [
      'Very limited resort options nearby — most guests stay at Kolara and drive',
      'Lower tiger-sighting probability than Moharli or Kolara',
      'Gate infrastructure extremely basic',
    ],
    seasonalNotes: [
      { season: 'Summer (March–June)', notes: 'Water sources concentrate tigers. Early morning is your best window.' },
      { season: 'Winter (Dec–Feb)', notes: 'Dramatic light, low jeep density. Excellent for serious photography.' },
    ],
    faqs: [
      { q: 'Is Navegaon Gate worth visiting?', a: 'For repeat visitors and photographers, absolutely — it offers almost private safari experiences. For first-timers chasing guaranteed tiger sightings, Moharli or Kolara is a safer choice.' },
      { q: 'How many jeeps at Navegaon Gate?', a: 'Around 15 jeeps per slot, the smallest quota of Tadoba\'s core gates. Crowds at sightings are tiny — often just your own jeep.' },
      { q: 'Where to stay for Navegaon safaris?', a: 'Most guests stay at Kolara-area resorts and drive 20–30 minutes to Navegaon gate for entry.' },
    ],
    nearbyPropertySlugs: [],
  },
  agarzari: {
    slug: 'agarzari',
    targetKeyword: 'Agarzari Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-A_vista_of_the_jungle_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    metaDescription:
      'Agarzari Gate Tadoba — the most popular buffer gate. Lower permit cost than core, monsoon access, rising tiger activity. 2026 guide.',
    intro:
      'Agarzari is the Tadoba buffer gate everyone should know about. Located right next to Moharli, it shares the same road-in and the same dense forest — but permits cost half of Moharli\'s and the buffer zone remains open during the monsoon when core gates shut. Sighting rates have climbed sharply as tigers from Moharli core extend their territories into Agarzari buffer.',
    location: {
      distanceFromNagpur: '140 km (3 hrs 15 min)',
      distanceFromChandrapur: '45 km (1 hr)',
      nearestVillage: 'Agarzari village, adjacent to Moharli',
      mapQuery: 'Agarzari+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Agarzari is the highest-quota Tadoba buffer gate. Exact numbers are decided per season by the Forest Department, but it\'s consistently easier to book here than Moharli core.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Buffer zones often stay open July–September. Closed Tuesdays.',
    },
    famousTigers: [
      'Male tigers from Moharli core range into Agarzari buffer',
      'Resident tigress with cubs seen in the Agarzari zone through 2025',
      'Leopards and sloth bears frequently sighted',
    ],
    bestFor: [
      'Monsoon-season travellers (core shut, buffer open)',
      'Budget-conscious guests — permits ₹1,200–1,800 vs core ₹2,500+',
      'Guests staying in Moharli-area resorts',
      'Last-minute bookers — Agarzari has better availability than Moharli core',
    ],
    tradeOffs: [
      'Core-zone tigers are more predictable in their routes',
      'Some routes in Agarzari buffer are short compared to core',
    ],
    seasonalNotes: [
      { season: 'Monsoon (July–September)', notes: 'Agarzari\'s biggest advantage — open when Moharli core is closed. Green forest, dramatic light, fewer tourists.' },
      { season: 'Summer (March–June)', notes: 'Tigers spill from Moharli core looking for prey. Sighting rates peak.' },
    ],
    faqs: [
      { q: 'Is Agarzari Gate open during monsoon?', a: 'Yes — Agarzari is a buffer zone and typically remains operational 1 July to 30 September when Tadoba core zones are shut. Confirm with your operator before booking.' },
      { q: 'What is the permit cost at Agarzari?', a: 'Around ₹1,200–1,800 per jeep (6 seats), roughly half of Moharli core. Foreign national surcharges apply.' },
      { q: 'Are tiger sightings good at Agarzari?', a: 'Yes — especially recently. Male tigers from Moharli core regularly extend into Agarzari buffer. Rates are lower than core but far from disappointing.' },
    ],
    nearbyPropertySlugs: [],
  },
  junona: {
    slug: 'junona',
    targetKeyword: 'Junona Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sunset_of_tadoba.jpg/1920px-Sunset_of_tadoba.jpg',
    metaDescription:
      'Junona Gate Tadoba — a quiet southern buffer gate near Chandrapur. Low crowds, cheaper permits, good weekend option from Nagpur. 2026 complete guide.',
    intro:
      'Junona is Tadoba\'s quietest buffer gate, on the southern edge of the reserve near Chandrapur town. If you live in Nagpur and want a low-stress weekend safari without fighting the Moharli crowd, Junona is the pragmatic pick. Permits are easier to secure, infrastructure is basic-but-functional, and wildlife sightings have improved dramatically in the last two years.',
    location: {
      distanceFromNagpur: '155 km (3 hrs 30 min)',
      distanceFromChandrapur: '30 km (45 min)',
      nearestVillage: 'Junona village, Chandrapur district',
      mapQuery: 'Junona+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'Junona runs a small buffer quota that rarely sells out. Exact numbers are set by the Forest Department and can vary with season.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Buffer gate — stays open during monsoon. Closed Tuesdays.',
    },
    famousTigers: [
      'Resident tigress in the Junona-Mamla belt',
      'Male spillover from Moharli core',
      'Regular leopard and sloth bear sightings',
    ],
    bestFor: [
      'Weekend trippers from Nagpur / Chandrapur',
      'Budget safaris',
      'Last-minute bookings',
      'Monsoon travel',
    ],
    tradeOffs: [
      'Lower tiger frequency than core zones',
      'Fewer dedicated resorts — most stay at Chandrapur or Moharli',
      'Gate facilities are basic',
    ],
    seasonalNotes: [
      { season: 'All year', notes: 'Junona\'s sighting rate is steady rather than seasonal. Best treated as a supplementary safari when core permits aren\'t available.' },
    ],
    faqs: [
      { q: 'Is Junona worth visiting?', a: 'For weekend trips or as a supplementary gate in a longer itinerary — yes. As your only Tadoba safari, pair it with a core gate.' },
      { q: 'How far is Junona from Chandrapur?', a: 'About 30 km — a 45-minute drive. Makes it the most accessible gate for Chandrapur-based travellers.' },
    ],
    nearbyPropertySlugs: [],
  },
  'devada-adegaon': {
    slug: 'devada-adegaon',
    targetKeyword: 'Devada Adegaon Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    metaDescription:
      'Devada-Adegaon Gate Tadoba — eastern buffer with rich teak-bamboo forest. Strong for leopards, sloth bears, and dholes. Permits, timings, trip-planning guide.',
    intro:
      'Devada-Adegaon is Tadoba\'s eastern buffer gate — a name longer than the line of jeeps you\'ll find here. Mixed teak and bamboo forest, a dhole pack that regularly traverses this zone, and excellent sloth-bear records make this a favourite among serious wildlife observers looking for more than the classic tiger-only shot.',
    location: {
      distanceFromNagpur: '170 km (3 hrs 45 min)',
      distanceFromChandrapur: '55 km (1 hr 15 min)',
      nearestVillage: 'Devada and Adegaon villages, Chimur tehsil',
      mapQuery: 'Devada+Adegaon+Gate+Tadoba',
    },
    dailyPermits: 'A small buffer allotment that rarely fills. Exact counts are set by the Forest Department seasonally.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM | 2:00 PM – 5:30 PM (winter)',
      note: 'Buffer — stays open during monsoon. Closed Tuesdays.',
    },
    famousTigers: [
      'Dhole (wild dog) pack regularly sighted',
      'Sloth bear family in the Adegaon sector',
      'Leopards active in rocky outcrops',
      'Occasional tiger cubs',
    ],
    bestFor: [
      'Wildlife photographers diversifying beyond tiger-only',
      'Repeat Tadoba visitors',
      'Dhole and sloth bear enthusiasts',
      'Monsoon-season safaris',
    ],
    tradeOffs: [
      'Tiger sighting rates lower than core gates',
      'Limited resort infrastructure nearby',
      'Long drive from Nagpur',
    ],
    seasonalNotes: [
      { season: 'Monsoon (July–September)', notes: 'Dhole pups emerge. Green forest is stunning. One of the best gates to visit in monsoon.' },
      { season: 'Winter', notes: 'Dramatic golden-hour light. Sloth bears more active.' },
    ],
    faqs: [
      { q: 'Can I see dholes at Devada-Adegaon?', a: 'Yes — this gate has one of the highest dhole sighting rates in Tadoba. A resident pack has used this zone for years.' },
      { q: 'Is Devada-Adegaon good for first-timers?', a: 'Not as a primary choice. First-timers chasing tiger guarantees should start with Moharli or Kolara. Devada-Adegaon rewards patient, repeat visitors.' },
    ],
    nearbyPropertySlugs: [],
  },
  alizanza: {
    slug: 'alizanza',
    targetKeyword: 'Alizanza Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/A_road_in_between_bamboo_forest_at_Tadoba_Andhari_Tiger_Reserve_%28India%2C_2016%29.jpg',
    metaDescription:
      'Alizanza Gate Tadoba — the northern buffer adjacent to Kolara core. Open grasslands, raptor activity, and spillover tiger sightings from Choti Tara\'s territory.',
    intro:
      'Alizanza is the buffer zone that abuts Kolara core on the northern edge of Tadoba. Its defining feature is its terrain — grasslands that open up between teak patches, unusual for this otherwise dense forest. Photographers chase the golden-hour light here; birders come for the raptor density. And because it borders Kolara, the tigress Choti Tara and her cubs routinely spill into Alizanza routes.',
    location: {
      distanceFromNagpur: '115 km (2 hrs 45 min)',
      distanceFromChandrapur: '100 km (2 hrs 15 min)',
      nearestVillage: 'Alizanza village, Chimur tehsil',
      mapQuery: 'Alizanza+Gate+Tadoba',
    },
    dailyPermits: 'A small buffer quota — exact numbers set by the Forest Department seasonally. Good last-minute availability most of the year.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM | 2:00 PM – 5:30 PM (winter)',
      note: 'Buffer — often stays open during monsoon. Closed Tuesdays.',
    },
    famousTigers: [
      'Choti Tara (from Kolara core) spills into Alizanza routes',
      'Chhota Matka male',
      'Emerging young cubs seen in recent seasons',
    ],
    bestFor: [
      'Photographers seeking grassland compositions',
      'Birders (raptor activity high)',
      'Guests staying in Kolara-area resorts',
      'Budget-conscious safaris',
    ],
    tradeOffs: [
      'Lower permit count means advance booking helps',
      'Some routes are shorter than core gate safaris',
    ],
    seasonalNotes: [
      { season: 'Winter (Dec–Feb)', notes: 'Grasslands at their golden-brown peak. Raptors on migration.' },
      { season: 'Monsoon shoulder (Oct–Nov)', notes: 'Green grasslands, migratory birds arriving.' },
    ],
    faqs: [
      { q: 'Is Alizanza the same as Kolara?', a: 'No — Alizanza is the buffer zone adjacent to Kolara core gate. Separate permits, different entry point, but the terrain overlaps and tigers cross between them.' },
      { q: 'Why do photographers prefer Alizanza?', a: 'The grassland terrain is rare in Tadoba and produces dramatic open-space compositions. Fewer jeeps also help.' },
    ],
    nearbyPropertySlugs: ['tadoba-aranya-villa', 'jungle-home-tadoba-kolara', '7-tigers-resort-tadoba', 'a1-tiger-resort-chimur'],
  },
  pangdi: {
    slug: 'pangdi',
    targetKeyword: 'Pangdi Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sunset_of_tadoba.jpg/1920px-Sunset_of_tadoba.jpg',
    metaDescription:
      'Pangdi Gate Tadoba — the western core gate with the smallest permit allotment in the reserve. Permits, timings, tigers, trip-planning notes.',
    intro:
      'Pangdi is Tadoba\'s western core gate and runs the smallest permit allotment of any gate in the reserve. Only a handful of jeeps enter per slot. For photographers or experienced travellers who value solitude over guarantees, Pangdi is as private as a Tadoba safari gets.',
    location: {
      distanceFromNagpur: '155 km (3 hrs 30 min)',
      distanceFromChandrapur: '90 km (2 hrs)',
      nearestVillage: 'Pangdi village, Chimur tehsil',
      mapQuery: 'Pangdi+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'The smallest core-gate allotment at Tadoba — typically a handful of jeeps per slot. Exact numbers set by the Forest Department seasonally.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Tuesdays. Core zone shut 1 July to 30 September.',
    },
    famousTigers: [
      'Resident tigers rotating through the Pangdi-Kolsa belt',
      'Occasional spillover males from Navegaon',
    ],
    bestFor: [
      'Photographers seeking near-private sightings',
      'Repeat visitors who want the wildest Tadoba experience',
      'Those who prefer solitude over sighting guarantees',
    ],
    tradeOffs: [
      'Lower tiger sighting probability than Moharli or Kolara',
      'Very limited infrastructure at the gate',
      'Few resorts within easy reach',
    ],
    seasonalNotes: [
      { season: 'Summer (March–June)', notes: 'Tigers move toward water sources in the Pangdi range.' },
      { season: 'Winter', notes: 'Dramatic low-light photography. Very few jeeps.' },
    ],
    faqs: [
      { q: 'Is Pangdi worth it?', a: 'For repeat visitors and photographers, yes. For a first Tadoba trip, pair with Moharli or Kolara for better sighting odds.' },
      { q: 'How many jeeps at Pangdi?', a: 'The smallest allotment of any Tadoba core gate. Expect a near-private safari but plan advance bookings.' },
    ],
    nearbyPropertySlugs: [],
  },
  zari: {
    slug: 'zari',
    targetKeyword: 'Zari Gate Tadoba',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg/1920px-Ghost_Tree_at_Tadoba_Andhari_Tiger_Reserve.jpg',
    metaDescription:
      'Zari Gate Tadoba — eastern core gate with good tiger density, teak-bamboo forest, and fewer jeeps than Moharli. Permit timings, nearby stays, planning guide.',
    intro:
      'Zari is a core gate on Tadoba\'s eastern edge. It runs a mid-sized permit allotment — fewer jeeps than Moharli, more than Pangdi — and the terrain is classic Tadoba: teak, bamboo, mixed deciduous forest. Tiger density is genuinely good and crowd density is genuinely lower than the central gates.',
    location: {
      distanceFromNagpur: '160 km (3 hrs 30 min)',
      distanceFromChandrapur: '55 km (1 hr 15 min)',
      nearestVillage: 'Zari village, Chimur tehsil',
      mapQuery: 'Zari+Gate+Tadoba+Andhari+Tiger+Reserve',
    },
    dailyPermits: 'A mid-sized core allotment — fewer than Moharli and Kolara, but more than Navegaon and Pangdi. Exact numbers set by the Forest Department per season.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Tuesdays. Core zone shut July–September.',
    },
    famousTigers: [
      'Resident tigers in the Zari-Peth belt',
      'Leopards active in rocky outcrops',
    ],
    bestFor: [
      'Travellers wanting core-zone density with fewer jeeps',
      'Repeat visitors seeking variety beyond Moharli and Kolara',
      'Photographers',
    ],
    tradeOffs: [
      'Fewer luxury resorts than Moharli area',
      'Road to the gate is longer than to Moharli',
    ],
    seasonalNotes: [
      { season: 'Summer (March–June)', notes: 'Good tiger movement as waterholes shrink.' },
      { season: 'Winter', notes: 'Less crowded than Moharli core. Comfortable weather for long safaris.' },
    ],
    faqs: [
      { q: 'Is Zari core or buffer?', a: 'Zari is a core zone gate on the eastern edge of Tadoba.' },
      { q: 'How does Zari compare to Moharli?', a: 'Zari has a smaller permit allotment, meaning fewer jeeps per sighting. Moharli has higher permit count and more infrastructure.' },
    ],
    nearbyPropertySlugs: [],
  },
  karmajhiri: {
    slug: 'karmajhiri',
    targetKeyword: 'Karmajhiri Gate Pench',
    heroImage:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Karmazari_Pench_National_Park_13.jpg',
    metaDescription:
      'Karmajhiri Gate Pench — the eastern core gate with open grasslands, predictable tiger territories, and some of the best grassland photography in central India.',
    intro:
      'Karmajhiri is the eastern core-zone gate at Pench and one of the most scenic entry points in all of central India. The terrain opens into grasslands unusual for a teak-dominated park, which makes for dramatic golden-hour photography and frequent herbivore sightings. Tigers here are fewer than Turia but the quality of sightings — when they happen — tends to be exceptional.',
    location: {
      distanceFromNagpur: '115 km (2.5 hrs)',
      distanceFromJabalpur: '180 km (3.5 hrs)',
      nearestVillage: 'Karmajhiri village, Seoni district, MP',
      mapQuery: 'Karmajhiri+Gate+Pench+Tiger+Reserve',
    },
    dailyPermits: 'Karmajhiri has a smaller quota than Turia. Exact numbers are set per season by the Forest Department. Less booked than Turia — easier for last-minute plans.',
    entrySchedule: {
      morningSlot: '6:00 AM – 10:00 AM (summer) | 6:30 AM – 10:30 AM (winter)',
      eveningSlot: '3:00 PM – 6:30 PM (summer) | 2:00 PM – 5:30 PM (winter)',
      note: 'Closed Wednesdays. Core zones shut during monsoon.',
    },
    famousTigers: [
      'Resident male rotating through grassland-forest edges',
      'Occasional sightings of Langdi and her cubs when they range east',
    ],
    bestFor: [
      'Grassland photography enthusiasts',
      'Photographers wanting uncrowded sightings',
      'Travellers who value landscape over tiger-only focus',
      'Birders — raptor activity in grasslands is exceptional',
    ],
    tradeOffs: [
      'Lower tiger-sighting frequency than Turia',
      'Limited resort options within 10 km',
      'Driver-guides less common, ensure your operator books a known one',
    ],
    seasonalNotes: [
      {
        season: 'Winter (Dec–Feb)',
        notes: 'Grasslands at their golden-brown best. Raptor photography peaks.',
      },
      {
        season: 'Summer (April–June)',
        notes: 'Water sources scarce — herbivores concentrate near Pench river edges, drawing tigers.',
      },
    ],
    faqs: [
      {
        q: 'Is Karmajhiri Gate good for first-time visitors?',
        a: 'Karmajhiri is better for second or third visits — its lower tiger density means first-timers sometimes leave disappointed. Pair it with a Turia safari for balanced odds.',
      },
      {
        q: 'Why is Karmajhiri recommended for photographers?',
        a: 'The grassland terrain is rare for central India and produces dramatic golden-hour images. Fewer jeeps mean cleaner compositions.',
      },
    ],
    nearbyPropertySlugs: ['karmajhiri-tented-camp'],
  },
};
