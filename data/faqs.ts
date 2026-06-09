// Page-specific FAQs.
// Each entry becomes both a visible accordion on the page and a FAQPage
// JSON-LD block in <head>, which makes the page eligible for FAQ rich
// results in Google search (Q&A snippets directly under the listing).
// Aim for 5-7 questions per page, each targeting a different long-tail
// query.

export type FAQ = { q: string; a: string };

export const packageFaqs: Record<string, FAQ[]> = {
  'tadoba-budget-3n': [
    {
      q: 'What is included in the Tadoba Budget package price of ₹74,000?',
      a: '3 nights at a mid-tier jungle resort (double occupancy), all meals (breakfast, lunch and dinner), 4 jeep safaris across two gates (Moharli and Kolara), AC sedan transfers from Nagpur airport for the four travel days, an experienced naturalist on every safari, and all permits, gypsy charges, guide and park fees. Quoted for two guests sharing — what each couple actually pays for the whole trip.',
    },
    {
      q: 'How is the Tadoba Budget tier different from the Mid tier?',
      a: 'The safari coverage is identical — same four jeeps, same two gates, same naturalist seniority. The difference is in the stay (mid-tier vs luxury jungle resort) and the transport (AC sedan vs 7-seater). Budget is for couples comfortable with a clean, simple resort; Mid is for guests who want more space, better food, and a larger transfer vehicle.',
    },
    {
      q: 'Is the Tadoba Budget package private or are safaris shared with strangers?',
      a: 'All four safaris are on a private jeep (gypsy) for your group only. You will not share the vehicle with strangers. Park rules cap each jeep at six guests plus the driver and naturalist, so booking as a couple gives you four open seats — useful for camera bags and gear.',
    },
    {
      q: 'Can a solo traveller book the Tadoba Budget package?',
      a: 'Yes, but the price is quoted for two guests sharing. A solo traveller pays a single-occupancy supplement at the resort (typically ₹6,000–₹9,000 across three nights) and the same per-jeep safari cost. Total comes to about ₹65,000 — only marginally cheaper than the couple rate, because the jeep and transport costs do not halve.',
    },
    {
      q: 'Which Tadoba gates does the Budget package visit?',
      a: 'Two safaris at Moharli Gate (south core, the most reliable tiger-sighting gate in Tadoba) and two at Kolara Gate (north core, quieter and favoured by photographers). The naturalist picks morning vs afternoon slots based on recent tiger movement reports and which territories are active.',
    },
    {
      q: 'Can I extend the Tadoba Budget package with extra nights or a Pench add-on?',
      a: 'Yes. Common extensions: one extra night in Tadoba (₹15,000 incl. an extra safari), or a 2-night Pench add-on with transfer (₹35,000 — roughly equivalent to our older Tadoba+Pench combo). Tell us your dates on the contact page and we will quote a custom split.',
    },
  ],

  'tadoba-mid-3n': [
    {
      q: 'What makes the Tadoba Mid tier worth ₹20,000 more than Budget?',
      a: 'Better resort and better transfer vehicle. Mid puts you in a luxury jungle resort with private balconies, more spacious rooms, and a fuller menu including snacks between safaris. The transfer is a 7-seater (Innova Crysta or equivalent) instead of a sedan — useful for families with luggage, photo gear, or groups of three to four.',
    },
    {
      q: 'Is the Tadoba Mid package suitable for a family with kids?',
      a: 'Yes — Mid is our most-booked tier for families. The 7-seater handles four adults plus two children comfortably with luggage. The luxury resort tier includes pool, family rooms, and kid-friendly meal options. We seat children with parents on the jeep and the naturalist adjusts pacing on family safaris (shorter circuits, regular breaks).',
    },
    {
      q: 'How many people fit in the 7-seater transport in the Mid package?',
      a: 'A standard Innova Crysta or similar accommodates 6 guests plus the driver, with room for luggage on the rear shelf. For larger groups (7 plus), we upgrade to a Tempo Traveller at an additional ₹4,000 across the trip. Tell us your group size on inquiry.',
    },
    {
      q: 'Can I choose which luxury resort I stay at within the Mid tier?',
      a: 'Yes — once you confirm dates and group size, we send a shortlist of 2 to 3 luxury resorts near the gates we have allotted permits at. You pick from the shortlist. Each is properties we have personally vetted, with consistent feedback over multiple seasons.',
    },
    {
      q: 'Who is the typical Mid-tier traveller?',
      a: 'Returning wildlife travellers, couples on their first Tadoba trip who want a more refined base, photography enthusiasts who need space for gear, and families with kids 8 and older. Mid is the sweet spot — significantly more comfortable than Budget without the luxury-tier premium.',
    },
  ],

  'tadoba-luxury-3n': [
    {
      q: 'What does "ultra-luxury jungle lodge" mean in practice?',
      a: 'Standalone villas with private plunge pools, dedicated butler service, multi-course curated meals, a wine list, in-room spa, and panoramic forest views. Examples in our luxury tier roster: properties at the level of Svasara, Bamboo Forest Safari Lodge, or Tigers Den — all under 30 minutes from Kolara or Moharli gate.',
    },
    {
      q: 'Is the Luxury package the best choice for serious wildlife photographers?',
      a: 'Yes — Luxury gives you a dedicated naturalist plus tracker (two people scouting territories instead of one), a luxury SUV with space for camera gear, and resort routines that work around early-morning gate openings. Photographers staying in our Luxury tier consistently report sharper sighting odds because the naturalist has time to chase recent movement reports between safaris.',
    },
    {
      q: 'Can the Luxury package accommodate special dietary requirements?',
      a: 'Yes — every Luxury-tier lodge handles Jain, vegan, gluten-free, and allergen-specific menus when notified at least 7 days in advance. We pass requirements to the lodge directly and confirm with you before arrival. Resort kitchens in our roster are accustomed to international guests with strict dietary needs.',
    },
    {
      q: 'What is the cancellation policy on the Luxury package?',
      a: 'Full refund minus permit cost (around ₹15,000) if cancelled 45+ days out. 50% refund 21 to 44 days out. No refund inside 21 days because core-zone permits, gypsy bookings, and luxury-tier resort rooms are all non-refundable to us at that window. Trip-protection insurance is recommended for travel from outside India.',
    },
    {
      q: 'Why are there only 4 safaris in the Luxury package — same as Budget and Mid?',
      a: 'Tadoba core gates run two safari slots per day (early morning and afternoon). Four safaris over a 3-night / 4-day trip is the maximum without compromising rest, meals, or naturalist briefings. If you want more safaris, the answer is more nights — ask us for a 5-night or 7-night Luxury extension when you inquire.',
    },
  ],
};

export const destinationFaqs: Record<string, FAQ[]> = {
  tadoba: [
    {
      q: 'When is the best time to visit Tadoba for tiger sightings?',
      a: 'April, May, and early June have the highest sighting rates (80–95% across a four-safari trip) because shrinking waterholes concentrate tigers. November to February is more comfortable weather-wise with sighting rates around 55–70%. Core zones close 1 July to 30 September for the monsoon; buffer zones stay open.',
    },
    {
      q: 'How do I get to Tadoba from Nagpur?',
      a: 'Nagpur airport (NAG) is 140 km from Moharli gate — a 3-hour drive on NH353B. Direct flights into Nagpur are available from Mumbai, Pune, Delhi, Hyderabad, Bangalore, and a few international cities. Chandrapur railway station is closer at 45 km from Moharli (about 1 hour) and is served by long-distance trains from Mumbai, Pune, and Hyderabad.',
    },
    {
      q: 'Which Tadoba gate has the highest tiger sighting probability?',
      a: 'Moharli gate consistently has the highest sighting rate (around 82%) because it has the densest resort cluster, the most jeeps moving through the zone, and famous territory-holding tigers like Maya and Choti Tara. Kolara is a close second at around 75% and is preferred by photographers for its grasslands and lower jeep traffic.',
    },
    {
      q: 'How many days are enough for a Tadoba safari?',
      a: 'Three nights and four safaris is the standard — long enough to give yourself multiple chances if a sighting does not happen on the first morning, short enough to feel like a manageable trip. Two-night trips work if you are constrained on leave; four to five nights are ideal for photographers who want repeat visits to a specific territory.',
    },
    {
      q: 'Is Tadoba safe for solo female travellers?',
      a: 'Yes — Tadoba sees solo female guests regularly, both Indian and international. Resorts are well-staffed and gated, safaris are accompanied by a naturalist and driver at all times, and the local towns (Chandrapur, Chimur) are low-crime. We frequently match solo guests with mixed groups on safari if asked, so you are not alone on the jeep.',
    },
    {
      q: 'Are Tadoba safaris suitable for children?',
      a: 'Yes, with caveats. Kids 6 and above generally handle the early starts and 3-hour jeep rides fine. Below 6, the heat in summer and pre-dawn wake-up times can be challenging. Our family-friendly packages adjust pacing (shorter circuits, more rest), use child-suitable resorts with pools, and brief naturalists to keep the commentary engaging for younger guests.',
    },
  ],

  pench: [
    {
      q: 'What makes Pench different from Tadoba?',
      a: 'Pench has a more varied wildlife mix — leopards, dholes (wild dogs), sloth bears, and 285+ bird species, in addition to tigers. The forest is open sal and teak with the Pench river running through it, which makes it more "Jungle Book" and less "tiger arena" than Tadoba. Sighting rates are lower (around 65–80% in summer) but the wider experience appeals to repeat wildlife travellers.',
    },
    {
      q: 'When is the best time to visit Pench?',
      a: 'March to June for highest tiger and dhole activity (the dry season concentrates predators around waterholes). November to February is excellent for birds — migratory raptors arrive in November and stay through February. Pench core zones close 1 July to 30 September for the monsoon; buffer zones stay accessible.',
    },
    {
      q: 'Is Pench really the inspiration for Rudyard Kipling\'s Jungle Book?',
      a: 'Yes — Kipling never visited India but read accounts of the forest tract around the Pench river (then in Seoni district) and set Mowgli\'s story there. The book mentions specific landmarks like the Wainganga river that exist in and around current-day Pench Tiger Reserve. The forest department actively promotes this connection on signage and naturalist-led talks.',
    },
    {
      q: 'Which Pench gate should I choose for my first safari?',
      a: 'Turia is the main gate on the Madhya Pradesh side — dense teak forest, predictable tiger territories, and the most resort options nearby. Karmajhiri (eastern entry) is more scenic with the Pench river running through, ideal for photographers who want landscape variety. Jamtara (buffer-north) is the quiet alternative if you want fewer jeeps on safari.',
    },
    {
      q: 'Can I combine Pench with Tadoba on one trip?',
      a: 'Yes — most of our 5-night Mid and Luxury trips do both. The drive between the two reserves is about 4 hours via Nagpur, so a single trip with 3 nights at one reserve and 2 nights at the other works well. Tadoba first then Pench is the standard sequence because it lines up with flight schedules — you fly into Nagpur, transfer south to Tadoba, then back north to Pench, then fly out from Nagpur.',
    },
    {
      q: 'What wildlife besides tigers can I see in Pench?',
      a: 'Leopards (frequent on buffer-zone safaris), dholes (Indian wild dogs, often seen in packs of 10–20), sloth bears (particularly at Karmajhiri), gaur (Indian bison), barking deer, sambar, nilgai, and 285+ bird species including paradise flycatchers, racket-tailed drongos, and migratory raptors November through February. Pench is one of the better central-India reserves for non-tiger wildlife photography.',
    },
  ],
};
