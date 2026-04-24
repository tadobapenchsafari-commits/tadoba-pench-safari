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
    dailyPermits: 'Approximately 55 jeeps per slot (morning + evening), the highest of any Tadoba gate',
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
    dailyPermits: 'Approximately 25 jeeps per slot — less than half of Moharli. Books out faster per day.',
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
    dailyPermits: 'Approximately 20 jeeps per slot — smallest quota of Tadoba\'s main core gates.',
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
    dailyPermits: 'Approximately 40 jeeps per slot — the main capacity gate for Pench-MP.',
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
    dailyPermits: 'Approximately 30 jeeps per slot — growing capacity as buffer zones get upgraded.',
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
    dailyPermits: 'Approximately 20 jeeps per slot — smallest of the Pench core gates.',
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
