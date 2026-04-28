/**
 * Housing data for neighborhoods near UofT St. George + MAM (Mississauga).
 *
 * Rent ranges are in CAD/month for a 1-bedroom or bachelor unit, accurate
 * to roughly mid-2025 market data. Update before each cycle.
 *
 * Commute times are to the Medical Sciences Building (1 King's College Cir).
 */

export interface Building {
  name: string;
  address: string;
  type: "Student residence" | "Private rental" | "Co-op" | "Condo";
  rentRange: string;
  notes: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  tagline: string;
  commute: {
    walk?: string;
    transit?: string;
    bike?: string;
  };
  rentRange: {
    bachelor: string;
    oneBed: string;
    twoBed: string;
  };
  vibe: string[];
  pros: string[];
  cons: string[];
  buildings: Building[];
  bestFor: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    id: "harbord-village",
    name: "Harbord Village & The Annex",
    tagline:
      "The classic med student choice — walkable to MSB, leafy streets, real neighborhood feel.",
    commute: {
      walk: "5–15 min",
      transit: "N/A",
      bike: "5 min",
    },
    rentRange: {
      bachelor: "$1,650–1,950",
      oneBed: "$2,100–2,650",
      twoBed: "$2,900–3,800",
    },
    vibe: ["Quiet residential", "Tree-lined", "Mix of grad students & families"],
    pros: [
      "Closest you can live without paying a downtown premium",
      "No commute means you can roll out of bed for 8am CBL",
      "Easy walk to Robarts, MSB, and the hospital network",
    ],
    cons: [
      "Older housing stock — expect quirky layouts and dated kitchens",
      "Limited new builds, so move-in timelines can be tight",
      "Streetcar noise on Spadina/Bloor edges",
    ],
    buildings: [
      {
        name: "Campus One",
        address: "253 College St",
        type: "Private rental",
        rentRange: "$1,950–2,800",
        notes:
          "Purpose-built student housing, all-inclusive, fitness centre. Popular but pricey.",
      },
      {
        name: "CampusOne / Knightstone properties",
        address: "Various — Harbord, Spadina",
        type: "Private rental",
        rentRange: "$1,800–2,500",
        notes: "Furnished options. Lease cycles aligned with academic year.",
      },
      {
        name: "Graduate House (UofT)",
        address: "60 Harbord St",
        type: "Student residence",
        rentRange: "$1,400–2,200",
        notes:
          "Open to grad and professional students including MD. Apply early — limited supply.",
      },
    ],
    bestFor:
      "First-years who want zero commute and the social density of living among other students.",
  },
  {
    id: "kensington-chinatown",
    name: "Kensington Market & Chinatown",
    tagline:
      "Lower rent, incredible food, more character. A 15-min walk to MSB.",
    commute: {
      walk: "15–20 min",
      transit: "10 min via 506 streetcar",
      bike: "7 min",
    },
    rentRange: {
      bachelor: "$1,500–1,800",
      oneBed: "$1,900–2,400",
      twoBed: "$2,600–3,400",
    },
    vibe: ["Eclectic", "Loud", "Walkable", "Food-forward"],
    pros: [
      "Cheaper than the Annex with comparable proximity",
      "Best grocery and food access in the city",
      "Genuine neighborhood character, not a student bubble",
    ],
    cons: [
      "Older buildings, variable landlord quality",
      "Weekend crowds and noise on Augusta/Baldwin",
      "Fewer purpose-built options — mostly walk-ups",
    ],
    buildings: [
      {
        name: "Privately-owned walk-ups",
        address: "Augusta, Baldwin, Bellevue",
        type: "Private rental",
        rentRange: "$1,500–2,400",
        notes:
          "Tour in person — listings online don't reflect quality. Use Facebook groups for leads.",
      },
    ],
    bestFor:
      "Students who want to save $400+/month vs the Annex and don't mind a 15-min walk.",
  },
  {
    id: "yorkville-bay",
    name: "Yorkville & Bay Corridor",
    tagline:
      "High-rise condo living, gym in the building, 10-min walk down Bay to campus.",
    commute: {
      walk: "10–15 min",
      transit: "5 min via Line 1",
      bike: "5 min",
    },
    rentRange: {
      bachelor: "$2,000–2,400",
      oneBed: "$2,500–3,200",
      twoBed: "$3,400–4,500",
    },
    vibe: ["Polished", "High-rise", "Quiet at night", "Professional"],
    pros: [
      "New buildings, in-unit laundry, full amenities",
      "Subway access for hospital placements off the main campus",
      "Walking distance to MSB without student-housing wear and tear",
    ],
    cons: [
      "Most expensive option in this list",
      "Less student community — you'll be living among professionals",
      "Condo board rules can be restrictive (no nails in walls, etc.)",
    ],
    buildings: [
      {
        name: "1 Bedford / 1000 Bay",
        address: "Bedford Rd / Bay St",
        type: "Condo",
        rentRange: "$2,400–3,400",
        notes: "Newer condo stock. Negotiate parking out of the lease.",
      },
      {
        name: "U Condos",
        address: "55–65 Charles St W",
        type: "Condo",
        rentRange: "$2,300–3,100",
        notes: "Walking distance to campus and Yorkville. Popular with med + law.",
      },
    ],
    bestFor:
      "Students who value new construction, in-unit laundry, and full amenities over saving money.",
  },
  {
    id: "little-italy-trinity",
    name: "Little Italy & Trinity-Bellwoods",
    tagline:
      "Slightly further out for meaningful savings. Best for second-years who know the city.",
    commute: {
      walk: "25–30 min",
      transit: "15 min via 506 streetcar or Line 2",
      bike: "10 min",
    },
    rentRange: {
      bachelor: "$1,400–1,700",
      oneBed: "$1,800–2,300",
      twoBed: "$2,500–3,200",
    },
    vibe: ["Lively", "Bars and patios", "Younger crowd", "Less academic"],
    pros: [
      "Significant rent savings vs. Annex/Yorkville",
      "Best nightlife and restaurants in walking distance",
      "Bike-friendly with the College/Harbord cycle tracks",
    ],
    cons: [
      "Streetcar can be unreliable in winter — budget extra time",
      "Further from clinical placements at TGH/MSH",
      "Not a great walk home alone after a late call shift",
    ],
    buildings: [
      {
        name: "Walk-ups along College & Dundas",
        address: "Ossington, Grace, Manning",
        type: "Private rental",
        rentRange: "$1,400–2,300",
        notes: "Older Victorian conversions. Heat is often included; check.",
      },
    ],
    bestFor:
      "Upper-years comfortable with a commute, biking, and prioritizing nightlife.",
  },
  {
    id: "mam-mississauga",
    name: "Mississauga (MAM students)",
    tagline:
      "For the cohort placed at the Mississauga Academy of Medicine. Different city, different math.",
    commute: {
      walk: "10–25 min (depending on building)",
      transit: "MiWay bus to UTM",
      bike: "10 min",
    },
    rentRange: {
      bachelor: "$1,400–1,700",
      oneBed: "$1,700–2,200",
      twoBed: "$2,200–2,900",
    },
    vibe: ["Suburban", "Quieter", "Car-friendly", "Newer buildings"],
    pros: [
      "Materially cheaper than downtown Toronto",
      "Newer condo stock with parking included",
      "Direct access to UTM and Credit Valley Hospital",
    ],
    cons: [
      "Limited if you also want to attend downtown events",
      "Public transit to downtown is a 60–90 min trip",
      "Smaller MD cohort means thinner student housing market",
    ],
    buildings: [
      {
        name: "Erin Mills / Square One condos",
        address: "Burnhamthorpe, Confederation",
        type: "Condo",
        rentRange: "$1,700–2,500",
        notes:
          "Most MAM students live here. Look for buildings with the MiWay 110/109 nearby.",
      },
    ],
    bestFor:
      "MAM-placed students. Confirm your academy placement before signing anything downtown.",
  },
];
