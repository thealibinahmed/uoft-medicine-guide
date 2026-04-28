/**
 * Post-acceptance checklist for incoming UofT MD students.
 * Organized by phase to give a clear timeline rather than a long flat list.
 */

export interface ChecklistItem {
  title: string;
  description: string;
  link?: { label: string; href: string };
  important?: boolean;
}

export interface ChecklistPhase {
  phase: string;
  timeframe: string;
  items: ChecklistItem[];
}

export const checklist: ChecklistPhase[] = [
  {
    phase: "Within 2 weeks of acceptance",
    timeframe: "May",
    items: [
      {
        title: "Accept your offer",
        description:
          "Submit your formal acceptance through the Admissions portal. Pay the non-refundable acceptance deposit. The Faculty's official acceptance walkthrough covers each field of the form.",
        link: {
          label: "Official: Accepting Your Offer",
          href: "https://applymd.utoronto.ca/accepting-your-offer",
        },
        important: true,
      },
      {
        title: "Confirm your academy placement",
        description:
          "You'll be assigned to one of four academies (FitzGerald, Peters-Boyd, Wightman-Berris, Mississauga). This determines where most of your clinical learning happens and should anchor your housing decision.",
        important: true,
      },
      {
        title: "Set up your UTORid",
        description:
          "Activate your UTORid as soon as you receive instructions. You'll need it for course registration, library access, and email.",
      },
      {
        title: "Join the incoming cohort group chat",
        description:
          "Class reps from the year above will reach out via email or social. This is where roommate matching, used-textbook trading, and event invites happen.",
      },
    ],
  },
  {
    phase: "May – June",
    timeframe: "Pre-registration",
    items: [
      {
        title: "Open a Professional Student Line of Credit (LOC)",
        description:
          "RBC, Scotiabank, and TD all offer LOCs up to $350K for MD students at prime rate. Compare cash bonuses, prime adjustment, and grace period before signing. See the Finances section for a current comparison.",
        important: true,
      },
      {
        title: "Apply for OSAP (or your provincial equivalent)",
        description:
          "Even if you have an LOC, OSAP grants are non-repayable and shouldn't be left on the table. Application opens in spring.",
      },
      {
        title: "Start your housing search",
        description:
          "Toronto's market moves fast. Most students sign by mid-July for September. Use Facebook groups, PadMapper, and the Faculty housing listings — see the Housing section for neighborhood-by-neighborhood guidance.",
        important: true,
      },
    ],
  },
  {
    phase: "Mid-June onward",
    timeframe: "Registration requirements",
    items: [
      {
        title: "Review the Registration Requirements page",
        description:
          "The Faculty publishes the year's full requirements (immunizations, Mask Fit, CPR-BLS, police check, immunization screening forms, AODA training, etc.) in mid-June. This page is updated annually — do not rely on prior years' lists.",
        link: {
          label: "Official: Registration Requirements & Requests",
          href: "https://md.utoronto.ca/registration-requirements-requests",
        },
        important: true,
      },
      {
        title: "Book required immunizations early",
        description:
          "Some titre tests and vaccine series take 6–8 weeks to complete. Book with your family doctor or a travel clinic as soon as the requirements are published.",
        important: true,
      },
      {
        title: "Schedule Mask Fit and CPR-BLS",
        description:
          "Both are mandatory before clinical placements. UofT runs sessions in August but slots fill quickly — many students book privately to lock in a date.",
      },
      {
        title: "Submit your Vulnerable Sector police check",
        description:
          "Processing times vary by jurisdiction (some take 8+ weeks). Start this immediately after the requirements drop in June.",
      },
    ],
  },
  {
    phase: "August",
    timeframe: "Pre-orientation",
    items: [
      {
        title: "Move into Toronto",
        description:
          "Most students aim to move 1–2 weeks before orientation to settle in. Avoid Sept 1 if possible — it's the busiest moving day of the year in Toronto.",
      },
      {
        title: "Buy your stethoscope and core equipment",
        description:
          "Wait for the orientation week group order if there is one — it's usually 30%+ off retail. Don't buy a Littmann Cardiology IV in May; you'll regret it.",
      },
      {
        title: "Confirm OHIP / health insurance",
        description:
          "If you're moving to Ontario from another province or country, apply for OHIP immediately on arrival. There's a 3-month waiting period.",
      },
      {
        title: "Attend orientation week",
        description:
          "Mandatory. You'll meet your academy, get your white coat, and start to understand what CPC, CBL, and CEEs actually mean. See the Handbook.",
      },
    ],
  },
];
