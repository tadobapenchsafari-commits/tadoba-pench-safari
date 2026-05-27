// Origin cities — landing-page content for `tadoba-safari-from-<city>` routes.
// Numbers reflect typical April–June 2026 conditions; verify before publishing.

export type OriginCity = {
  slug: string;
  name: string;
  state: string;

  // Hero copy
  intro: string; // 2 short paragraphs

  // Travel options to Tadoba (via Nagpur as the gateway airport)
  flight: { durationHrs: number; routeNote: string };
  drive: { distanceKm: number; durationHrs: number; routeNote: string };
  train: { durationHrs: number; routeNote: string };

  // Time-budget guidance
  bestTripLength: string; // e.g. "3 nights / 4 days"
  bestTripReason: string;

  // Recommended package slugs (must match data/content.ts packages)
  recommendedPackages: string[];

  // 3–4 city-specific tips
  cityTips: string[];

  // FAQ — city-specific answers
  faqs: { q: string; a: string }[];
};

export const originCities: OriginCity[] = [
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    intro:
      'Mumbai to Tadoba is the most-travelled corridor for India\'s tiger safaris. The route is well-served — direct flights to Nagpur take under 90 minutes, and the overnight Sevagram Express turns the journey into a single sleep. From Nagpur, a 3-hour transfer brings you to Moharli, the main entry gate.\n\nMost Mumbai travellers pair Tadoba with Pench on a single trip because the two reserves are only 4 hours apart by road. This is the itinerary we recommend for first-time visitors with 5–6 days in hand.',
    flight: {
      durationHrs: 1.5,
      routeNote:
        'IndiGo, Air India, and Akasa fly direct between BOM and NAG (Nagpur). Multiple departures across the morning and evening.',
    },
    drive: {
      distanceKm: 850,
      durationHrs: 12,
      routeNote:
        'Via the Samruddhi Mahamarg (Mumbai–Nagpur Expressway) — 701 km of six-lane toll road, Mumbai to Nagpur in 10–11 hours non-stop, then a 3-hour transfer from Nagpur to Tadoba. The older NH53 route via Aurangabad–Akola is ~870 km / 13+ hours, only worth taking if you want to stop at Aurangabad or Ajanta caves. Either way, non-stop is possible but exhausting before a 6 AM safari morning.',
    },
    train: {
      durationHrs: 13,
      routeNote:
        '12810 Howrah Mumbai Mail, 12101 Jnaneswari Express, or the overnight Sevagram Express. Disembark at Chandrapur for Tadoba (~45 km from Moharli gate) or Nagpur for both reserves.',
    },
    bestTripLength: '5 nights / 6 days',
    bestTripReason:
      'Long enough to do both Tadoba (3 nights) and Pench (2 nights) without rushing — the standard Mumbai itinerary because flying once and seeing two reserves justifies the leave.',
    recommendedPackages: ['tadoba-pench-combo-5n', 'tadoba-classic-3n'],
    cityTips: [
      'Book the 6 AM IndiGo BOM→NAG flight for the same-day Moharli safari that afternoon — saves a full day of leave.',
      'Travelling May–June? Choose flight over train — Mumbai\'s pre-monsoon humidity hits hard and the train can run hours late.',
      'For groups of 4+, a private AC SUV from Nagpur airport is more economical than four individual transfers.',
    ],
    faqs: [
      {
        q: 'Is there a direct train from Mumbai to Tadoba?',
        a: 'No direct station serves Tadoba itself. The closest railhead is Chandrapur (~45 km / 1 hr from Moharli gate). The Sevagram Express, Howrah Mumbai Mail, and Jnaneswari Express stop at Chandrapur — all overnight services from Mumbai CSMT or LTT.',
      },
      {
        q: 'How early should I leave Mumbai for a Tadoba safari?',
        a: 'For an afternoon safari on arrival day, fly out by 8 AM. For a morning safari the same day, you must arrive in Nagpur the night before — flights from Mumbai land too late for the 6 AM gate opening even on a same-day trip.',
      },
      {
        q: 'Is October a good month to travel from Mumbai?',
        a: 'Yes — the monsoon has cleared, the forest is green, and Mumbai itself is just past its rainy season so flights run on time. Tiger sightings are still moderate (60–70%) and pricing is shoulder-season.',
      },
    ],
  },

  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    intro:
      'Pune travellers have two strong options for Tadoba — fly via Mumbai or Nagpur, or drive the ~10 hour route through Aurangabad. Pune\'s direct flights to Nagpur are limited (most go via Mumbai), so the time advantage over driving is smaller than from other cities.\n\nFor weekend trips, we recommend the train: the overnight Garib Rath Express puts you in Nagpur by morning and back home by Sunday night. Pune\'s educated, wildlife-curious traveller base makes it our second-largest source after Mumbai.',
    flight: {
      durationHrs: 1.5,
      routeNote:
        'Direct PNQ→NAG service is sporadic. Most connect through BOM, total 3.5–4.5 hours including layover. Booking the BOM→NAG leg separately is often cheaper.',
    },
    drive: {
      distanceKm: 720,
      durationHrs: 10,
      routeNote:
        'Two routes: direct via NH160 through Aurangabad (~720 km / 11 hours surface highway), or Pune → Shirdi → Samruddhi Mahamarg → Nagpur (~700 km / 9–10 hours, faster thanks to the expressway portion). Pune exit traffic adds 60–90 minutes either way; plan to leave by 5 AM.',
    },
    train: {
      durationHrs: 13,
      routeNote:
        '12114 Pune–Nagpur Garib Rath Express runs overnight on alternate days. Pune Junction → Nagpur in around 13 hours.',
    },
    bestTripLength: '4 nights / 5 days',
    bestTripReason:
      'A long weekend extended by 2 leave days. Pune travellers often fit Tadoba into a Friday evening to Wednesday morning slot using the overnight train both ways.',
    recommendedPackages: ['tadoba-classic-3n', 'tadoba-pench-combo-5n'],
    cityTips: [
      'The 12114 Garib Rath has AC 3-tier coaches at far lower fares than peak-season flights — book 60 days ahead.',
      'If driving, the Pune-Aurangabad-Jalna stretch can be done in a day. Stage the second day from Jalna to Nagpur (5 hours) for a fresher safari start.',
      'Pune\'s peak season for Tadoba is December–February — combine with the Pune winter calendar of festivals.',
    ],
    faqs: [
      {
        q: 'Can I drive from Pune to Tadoba in one day?',
        a: 'Yes, but it is a 10–11 hour drive on highways with sections of two-lane road past Akola. Most groups split it into two days with a night at Aurangabad. Driving straight through and starting a 6 AM safari the next morning is not realistic.',
      },
      {
        q: 'Is the Pune-Nagpur Garib Rath safe for solo women travellers?',
        a: 'The 12114 service is well-rated and runs busy with families. AC 3-tier coaches have curtains and overhead luggage racks; the railway protection force patrols the train. Book a side lower berth in coach G2 or G3 for the safest, quietest sleep.',
      },
      {
        q: 'What is the cheapest way from Pune to Tadoba?',
        a: 'The overnight Garib Rath (₹800–1,200 in 3AC) plus a shared cab from Nagpur (₹2,500 for a 4-seater Innova) typically runs ₹4,000 round-trip per person — half the price of flying.',
      },
    ],
  },

  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    intro:
      'Hyderabad is geographically closer to Tadoba than most major Indian cities — the drive is only ~500 km and the flight under 90 minutes. The Hyderabad-Nagpur sector is one of the busiest non-metro routes in central India, with 4–5 daily flights.\n\nFor Hyderabad travellers, Tadoba is a real long weekend. Fly out Friday evening, safari Saturday and Sunday, fly home Sunday night. We see many Hyderabad-based corporate groups and wildlife photography clubs choose this option.',
    flight: {
      durationHrs: 1.3,
      routeNote:
        'IndiGo, Air India Express, and Akasa fly direct HYD→NAG. Approx 80–90 minutes block time. Multiple morning, afternoon, and evening departures.',
    },
    drive: {
      distanceKm: 500,
      durationHrs: 9,
      routeNote:
        'Via NH44 / NH63 through Adilabad. Mostly four-lane and well-paved. A single-day drive is feasible if you leave before 6 AM.',
    },
    train: {
      durationHrs: 10,
      routeNote:
        '12721 Dakshin Express and 17017 Rajkot Express both serve Nagpur from Secunderabad. Both run overnight.',
    },
    bestTripLength: '3 nights / 4 days',
    bestTripReason:
      'Hyderabad\'s proximity and frequent flights make the classic 3N/4D Tadoba trip an easy long weekend — Thursday evening to Sunday night.',
    recommendedPackages: ['tadoba-classic-3n', 'tadoba-pench-combo-5n'],
    cityTips: [
      'Hyderabad has the best price-to-time ratio of any major Indian metro for Tadoba — typically ₹6,000–8,000 round trip on IndiGo HYD↔NAG.',
      'Driving is genuinely realistic from Hyderabad — the highway is good and the route passes through Adilabad, where you can stop for a meal at the well-known Telangana dhabas.',
      'October–November is a sweet spot: post-monsoon Hyderabad weather is comfortable, and tigers are moving more actively before the winter cold sets in.',
    ],
    faqs: [
      {
        q: 'Can I drive from Hyderabad to Tadoba in one day?',
        a: 'Yes — the 500 km drive on NH44 / NH63 takes 8–9 hours on a clear day. Leave Hyderabad by 5 AM and you will be at Moharli gate by 3 PM, in time to settle in for the next morning\'s safari.',
      },
      {
        q: 'Are Hyderabad-Nagpur flights expensive?',
        a: 'Generally no — IndiGo and Akasa price the sector at ₹3,500–5,500 one-way booked 30+ days out. Weekend peak fares climb to ₹7,000–9,000 but still cheaper than equivalent metro routes.',
      },
      {
        q: 'Is Tadoba better for Hyderabad travellers than Bandhavgarh?',
        a: 'Yes for two reasons: distance (Bandhavgarh is 950 km vs Tadoba\'s 500) and gate availability (Tadoba\'s Moharli gate has more daily permits than Bandhavgarh\'s Tala zone). For first-timers, the trip ratio of "safari time to travel time" is significantly better for Tadoba.',
      },
    ],
  },

  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    intro:
      'Bangalore to Tadoba is a 2-hour direct flight and a longer journey by road. The city\'s tech-heavy traveller base tends to fly, and we see many "long weekend" Tadoba trips from Bangalore in November–February when the city itself is most pleasant to leave.\n\nFrom Nagpur, the same 3-hour transfer brings you to Moharli. Bangalore travellers often add Pench for a fuller central-India experience, making the 5-night combo our most-booked Bangalore itinerary.',
    flight: {
      durationHrs: 2,
      routeNote:
        'IndiGo and Air India fly direct BLR→NAG. About 2-hour block time. 3–4 daily departures, mostly mornings and evenings.',
    },
    drive: {
      distanceKm: 1050,
      durationHrs: 16,
      routeNote:
        'Via NH44 through Hyderabad and Adilabad. Realistic as a two-day drive only; we do not recommend driving from Bangalore for safari trips.',
    },
    train: {
      durationHrs: 21,
      routeNote:
        '12628 Karnataka Express (Bangalore Cantonment → Nagpur) runs daily, around 21 hours. Slow option; flights are more practical.',
    },
    bestTripLength: '5 nights / 6 days',
    bestTripReason:
      'Flying both ways consumes a day each side, so 5 nights on the ground (Tadoba + Pench) gives the best ratio of safari to travel time.',
    recommendedPackages: ['tadoba-pench-combo-5n', 'photography-week-tadoba'],
    cityTips: [
      'The BLR→NAG fare drops sharply if you book 45+ days in advance — common round-trip is ₹7,500–9,500.',
      'For Bangalore-based photography clubs, the Photography Week Tadoba package is well-matched: enough safaris (12) to justify carrying camera gear on a long flight.',
      'November is the sweet spot: Bangalore is in its mildest period and Tadoba is just emerging from the monsoon green.',
    ],
    faqs: [
      {
        q: 'Is the Karnataka Express train a realistic option from Bangalore?',
        a: 'Only for travellers who genuinely enjoy long train journeys. At 21 hours, the train consumes one full leave day each direction — flying saves you 2 full days for almost the same overall cost when booked early.',
      },
      {
        q: 'Can I combine Bangalore work travel with a Tadoba trip?',
        a: 'Yes — many Bangalore engineers fly to Nagpur for a Friday meeting, then add a 3-night Tadoba extension over the weekend. The Friday-to-Tuesday model works well; we customise package start dates around this regularly.',
      },
      {
        q: 'Is the Bangalore monsoon a good time to skip the city for Tadoba?',
        a: 'Tadoba core zones close 1 July to 30 September, so peak Bangalore monsoon does not align with Tadoba safari season. Buffer zones stay open and are worth visiting — particularly Agarzari and Junona — but a Tadoba safari is genuinely off-season July–September.',
      },
    ],
  },

  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'NCR',
    intro:
      'Delhi travellers have flown to Tadoba in growing numbers since 2023 — the direct IndiGo and Air India morning flights make it a real long weekend from the capital. Two hours in the air, three hours of transfer, and you are walking into your Moharli resort by dinner.\n\nDelhi-NCR groups tend to be families and corporate retreats. The Tadoba-Pench combo (5 nights) is our most-booked Delhi itinerary because the equivalent Ranthambore trip is now overbooked and Bandhavgarh is harder to fly into.',
    flight: {
      durationHrs: 2,
      routeNote:
        'IndiGo, Air India, and SpiceJet fly direct DEL→NAG. Around 2-hour block time. Frequent morning and evening departures.',
    },
    drive: {
      distanceKm: 1100,
      durationHrs: 17,
      routeNote:
        'Via NH44 through Agra, Gwalior, Jhansi. Best driven as two days with an overnight at Jhansi or Sagar. Not recommended for short trips.',
    },
    train: {
      durationHrs: 16,
      routeNote:
        '12626 Kerala Express, 22692 Rajdhani Express (Bangalore-Hazrat Nizamuddin), or the overnight 12618 Mangala Lakshadweep stop at Nagpur from H. Nizamuddin / New Delhi.',
    },
    bestTripLength: '5 nights / 6 days',
    bestTripReason:
      'Same logic as Bangalore — flying consumes ~half a day each way, so a 5N/6D Tadoba+Pench combo balances the airfare against on-ground experience.',
    recommendedPackages: ['tadoba-pench-combo-5n', 'tadoba-classic-3n'],
    cityTips: [
      'IndiGo\'s 6 AM DEL→NAG flight is the sweet spot — lands in Nagpur by 8 AM, you can do an afternoon Moharli safari the same day.',
      'For Delhi families with kids — the Tadoba Family package shapes around shorter safaris and a Mowgli-themed evening, which travels better than long jeep days.',
      'Avoid travelling May–June if heat-sensitive; central India hits 45°C and safari afternoons are punishing.',
    ],
    faqs: [
      {
        q: 'Why pick Tadoba over Ranthambore from Delhi?',
        a: 'Ranthambore is closer (≈ 6 hours by road or train) but its core-zone permits are now booked 120 days in advance. Tadoba\'s permit window is more open and tiger sighting rates are statistically higher — particularly in core gates Moharli and Kolara.',
      },
      {
        q: 'Is there a direct flight from Delhi to Tadoba?',
        a: 'No, but Delhi has 4–5 daily direct flights to Nagpur, the closest airport. From Nagpur, a 3-hour road transfer brings you to Moharli gate. Total door-to-resort time from Delhi: about 7–8 hours.',
      },
      {
        q: 'When does Delhi NCR usually travel to Tadoba?',
        a: 'November to March is the peak Delhi window — escaping the cold, taking advantage of school winter break, and avoiding Delhi pollution season. April and June are also popular for the higher tiger-sighting odds despite the heat.',
      },
    ],
  },
];
