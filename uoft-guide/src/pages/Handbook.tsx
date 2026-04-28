import { BookOpen, Stethoscope, Users, GraduationCap } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

interface GlossaryEntry {
  term: string;
  expansion: string;
  definition: string;
  details: string;
}

const glossary: GlossaryEntry[] = [
  {
    term: "CBL",
    expansion: "Case-Based Learning",
    definition:
      "Small-group sessions structured around clinical cases. Two-three sessions per week throughout pre-clerkship.",
    details:
      "You'll be assigned to a CBL group of 6–8 students plus a tutor. Cases unfold across 2–3 sessions; you research questions between meetings. CBL is where most of your foundational learning happens — attendance and preparation matter more than lecture attendance.",
  },
  {
    term: "CPC",
    expansion: "Clinical Pre-Clerkship",
    definition:
      "The first two years of the MD program — the classroom-and-CBL phase before full-time hospital rotations.",
    details:
      "CPC covers the foundational sciences integrated with clinical reasoning. You'll have lectures, CBLs, anatomy, simulation labs, and one half-day per week of clinical exposure (Portfolio).",
  },
  {
    term: "CEE",
    expansion: "Component Evaluation Exercise",
    definition:
      "End-of-block written exams during pre-clerkship. Pass/fail with a remediation pathway.",
    details:
      "CEEs assess each curriculum block (e.g., Cardiovascular, Renal). They're MCQ-heavy and graded against a passing threshold rather than a curve. Failing one isn't catastrophic — there's a remediation process — but back-to-back fails draw academic attention.",
  },
  {
    term: "Academy",
    expansion: "Academy assignment",
    definition:
      "Your home base for clinical learning. UofT MD has four: FitzGerald, Peters-Boyd, Wightman-Berris, and Mississauga (MAM).",
    details:
      "Your academy determines which hospital network hosts most of your clinical work. FitzGerald is centered around UHN/Mount Sinai; Peters-Boyd at Sunnybrook; Wightman-Berris at St. Michael's. Academy is assigned, not chosen, and is one of the strongest predictors of where you'll spend your time.",
  },
  {
    term: "Portfolio",
    expansion: "Portfolio (clinical exposure)",
    definition:
      "Half-day per week in pre-clerkship spent shadowing or doing clinical activities at your academy hospital.",
    details:
      "Portfolio is your structured early clinical exposure. Activities range from shadowing your academy mentor in clinic, to standardized patient encounters, to small clinical skills sessions. It's a low-pressure way to start translating CBL learning into real practice.",
  },
  {
    term: "OSCE",
    expansion: "Objective Structured Clinical Examination",
    definition:
      "Practical exam where you rotate through stations performing clinical tasks with standardized patients.",
    details:
      "You'll have OSCEs at the end of major blocks and at the end of pre-clerkship. Each station is timed (typically 8–10 min) and assessed by a physician examiner. They're stressful but predictable — preparation with classmates is the standard approach.",
  },
  {
    term: "Clerkship",
    expansion: "Clerkship (years 3 and 4)",
    definition:
      "Full-time clinical rotations at academy and partner hospitals. The transition from student to functioning clinical team member.",
    details:
      "Core rotations include Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Psychiatry, Family Medicine, Anesthesia, and Emergency. Hours are long, schedules are unpredictable, and your academy assignment defines most of where you go.",
  },
  {
    term: "Electives",
    expansion: "Electives",
    definition:
      "Self-selected rotations in years 3 and 4, often at outside institutions, used to explore specialties and build CaRMS applications.",
    details:
      "Strategic electives matter enormously for residency matching (CaRMS). You'll plan electives around your specialty interests, but also need breadth. The MD Program's CaRMS counsellors help — book early.",
  },
  {
    term: "Shadowing",
    expansion: "Shadowing",
    definition:
      "Informal observation of a physician at work, separate from formal Portfolio activities.",
    details:
      "Shadowing is how most students explore specialties beyond their academy's exposures. You arrange it directly with attendings — usually by email introduction or through upper-year contacts. Quality varies wildly; ask classmates for recommendations.",
  },
  {
    term: "CaRMS",
    expansion: "Canadian Resident Matching Service",
    definition:
      "The national algorithm that matches graduating students to residency programs.",
    details:
      "Far away in year 1, but quietly shapes decisions throughout. Your electives, research, reference letters, and personal statements all feed into your CaRMS file. The MD Program runs CaRMS prep sessions starting in year 3.",
  },
];

const Handbook = () => {
  return (
    <PageLayout>
      {/* HEADER */}
      <section className="container pt-16 md:pt-20 pb-12 max-w-4xl">
        <p className="eyebrow mb-4 animate-fade-up">Section 04 · The Handbook</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink animate-fade-up">
          The vocabulary, decoded.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl animate-fade-up">
          By the end of orientation week you'll hear CBL, CPC, CEEs, Portfolio,
          and academy at least a hundred times. Here's what each one actually
          means and why it matters.
        </p>
      </section>

      <div className="hairline" />

      {/* PROGRAM STRUCTURE OVERVIEW */}
      <section className="container py-16 max-w-5xl">
        <SectionHeader
          eyebrow="The shape of the program"
          title="Four years, two phases."
          description="UofT's MD program splits cleanly into Pre-Clerkship (years 1–2) and Clerkship (years 3–4). Knowing which one you're in shapes how you should be spending your time."
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {[
            {
              phase: "Pre-Clerkship (CPC)",
              years: "Years 1–2",
              icon: BookOpen,
              focus:
                "Foundational sciences integrated with clinical reasoning. CBL, lectures, anatomy, simulation, and Portfolio.",
              schedule:
                "Mostly 9–5 with study time on top. CBLs, lectures, and one Portfolio half-day per week.",
              evaluation: "CEEs at the end of each block. OSCE at year-end.",
            },
            {
              phase: "Clerkship",
              years: "Years 3–4",
              icon: Stethoscope,
              focus:
                "Full-time clinical rotations across core specialties, plus electives that shape your CaRMS application.",
              schedule:
                "Hospital hours — variable, sometimes long. Call shifts. Less classroom, more team-based learning.",
              evaluation:
                "End-of-rotation evaluations and exams. National Medical Council of Canada Qualifying Exam (MCCQE) prep starts here.",
            },
          ].map((p) => (
            <div key={p.phase} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-3">
                <p.icon
                  className="w-5 h-5 text-uoft"
                  strokeWidth={1.75}
                />
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-ink-muted">
                  {p.years}
                </p>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">
                {p.phase}
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ink mb-1">Focus</dt>
                  <dd className="text-ink-soft leading-relaxed">{p.focus}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink mb-1">Typical week</dt>
                  <dd className="text-ink-soft leading-relaxed">{p.schedule}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink mb-1">Evaluation</dt>
                  <dd className="text-ink-soft leading-relaxed">
                    {p.evaluation}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* GLOSSARY */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="Glossary"
          title="Terms you'll hear in week one."
          description="Each entry has a short definition for skim-reading and a longer note for when you actually need to understand it."
          className="mb-10"
        />

        <div className="space-y-4">
          {glossary.map((entry) => (
            <details
              key={entry.term}
              className="group bg-white border border-hairline rounded-md overflow-hidden hover:border-uoft/30 transition-colors"
            >
              <summary className="cursor-pointer p-6 list-none flex items-start gap-5">
                <div className="flex-shrink-0 w-20">
                  <p
                    className="font-display text-2xl font-semibold text-uoft"
                    style={{ fontFeatureSettings: "'tnum'" }}
                  >
                    {entry.term}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] font-semibold text-ink-muted mb-1.5">
                    {entry.expansion}
                  </p>
                  <p className="text-[15px] text-ink leading-relaxed">
                    {entry.definition}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 text-uoft text-2xl leading-none mt-1 group-open:rotate-45 transition-transform"
                  style={{ fontFamily: "ui-monospace, monospace" }}
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pl-[6.25rem]">
                <div className="pt-4 border-t border-hairline">
                  <p className="text-[15px] text-ink-soft leading-relaxed">
                    {entry.details}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* CULTURE NOTES */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="Culture, briefly"
          title="Things you can't read in a syllabus."
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Users,
              title: "Your academy is your community.",
              body: "You'll see your academy classmates more than your roommates. Most close friendships in med school form there — invest in academy events even if you're tired.",
            },
            {
              icon: GraduationCap,
              title: "Pass/fail is real.",
              body: "Pre-clerkship is graded pass/fail. Trying to maximize beyond passing is usually wasted effort that's better spent on Portfolio, research, or sleep.",
            },
            {
              icon: BookOpen,
              title: "The hidden curriculum is the curriculum.",
              body: "You'll learn how to be a clinician less from lectures and more from the residents and attendings you watch in clinical settings. Pay attention to how they communicate, not just what they know.",
            },
            {
              icon: Stethoscope,
              title: "Specialty interest will change.",
              body: "Most students arrive certain about their specialty and leave doing something different. Stay open. The first two years are designed to broaden, not narrow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-hairline rounded-md p-7"
            >
              <item.icon
                className="w-5 h-5 text-uoft mb-4"
                strokeWidth={1.75}
              />
              <h4 className="font-display text-lg font-semibold text-ink mb-3">
                {item.title}
              </h4>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COHORT IMAGE */}
      <section className="container pb-20">
        <MediaPlaceholder
          kind="video"
          label="Optional: short video — 2T9 cohort describing what they wish they knew in week one"
          aspect="video"
        />
      </section>
    </PageLayout>
  );
};

export default Handbook;
