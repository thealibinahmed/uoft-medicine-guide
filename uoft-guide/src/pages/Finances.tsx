import {
  Wallet,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const Finances = () => {
  return (
    <PageLayout>
      {/* HEADER */}
      <section className="container pt-16 md:pt-20 pb-12 max-w-4xl">
        <p className="eyebrow mb-4 animate-fade-up">Section 03 · Finances</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink animate-fade-up">
          Funding four years of medical school.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl animate-fade-up">
          A practical breakdown of the Professional Student Line of Credit
          landscape, what tuition and living expenses actually cost in Toronto,
          and the bursaries and government aid most students underuse.
        </p>

        <div className="mt-6 p-4 rounded-md border border-hairline bg-white text-sm text-ink-soft max-w-2xl">
          <strong className="text-ink">A note before you read.</strong> This
          guide is written by upper-year students summarizing what's worked for
          recent cohorts. It's not financial advice. For decisions involving
          credit products, OSAP appeals, or your specific situation, talk to a
          financial advisor or the Faculty's Financial Counsellor.
        </div>
      </section>

      <div className="hairline" />

      {/* THE NUMBERS */}
      <section className="container py-16 max-w-5xl">
        <SectionHeader
          eyebrow="The numbers"
          title="What four years actually costs."
          description="Tuition is the headline number. Living expenses, equipment, exam fees, and electives travel add up to nearly as much. Plan for the whole picture."
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {[
            {
              label: "MD tuition (annual)",
              value: "~$28,200",
              note: "Domestic, 2025–26 rate. Adjust ~3% upward each year.",
            },
            {
              label: "Living costs (annual)",
              value: "$22,000–32,000",
              note: "Toronto. Depends heavily on rent and lifestyle.",
            },
            {
              label: "Four-year total",
              value: "$200,000–250,000",
              note: "Tuition + living + equipment + electives + exam fees.",
            },
          ].map((n) => (
            <div key={n.label} className="bg-white p-7">
              <p className="text-xs uppercase tracking-[0.15em] font-semibold text-ink-muted mb-3">
                {n.label}
              </p>
              <p
                className="font-display text-3xl md:text-4xl font-semibold text-uoft mb-3"
                style={{ fontFeatureSettings: "'tnum'" }}
              >
                {n.value}
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* LINE OF CREDIT */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="The Line of Credit"
          title="The Professional Student LOC, decoded."
          description="Most MD students fund their education primarily through a Professional Student LOC. Three big banks offer it. The terms are similar but not identical."
          className="mb-10"
        />

        <div className="prose-content mb-8">
          <p>
            Each major Canadian bank offers an LOC capped around <strong>$350,000
            </strong> over four years (typically tiered: $100K Y1, $80K Y2,
            etc.) at <strong>prime rate</strong> while you're in school. You only pay
            interest while studying — principal payments don't begin until
            after a grace period post-graduation.
          </p>
          <p>
            The differences between banks are mostly at the margins: cash sign-up
            bonuses, prime adjustments, grace period length, and whether they
            push you to bundle other products.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white border border-hairline rounded-md overflow-hidden">
          <div
            className="grid grid-cols-4 gap-px text-xs uppercase tracking-[0.15em] font-semibold"
            style={{ backgroundColor: "var(--uoft-blue)", color: "white" }}
          >
            <div className="p-4">Bank</div>
            <div className="p-4">Limit</div>
            <div className="p-4">Rate</div>
            <div className="p-4">Notable</div>
          </div>

          {[
            {
              bank: "RBC",
              limit: "Up to $350K",
              rate: "Prime",
              notable: "Largest cohort uses RBC. Strong med-specific advisor network.",
            },
            {
              bank: "Scotiabank",
              limit: "Up to $350K",
              rate: "Prime",
              notable:
                "Often the most competitive cash bonus; aggressive in spring.",
            },
            {
              bank: "TD",
              limit: "Up to $350K",
              rate: "Prime",
              notable:
                "Solid digital banking. Slightly less flexibility on grace period.",
            },
            {
              bank: "BMO / CIBC / National",
              limit: "Varies",
              rate: "Prime to Prime + 0.25",
              notable:
                "Smaller programs. Worth comparing if you already bank with them.",
            },
          ].map((row, i) => (
            <div
              key={row.bank}
              className={`grid grid-cols-4 gap-px text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-paper-deep"
              }`}
            >
              <div className="p-4 font-semibold text-ink">{row.bank}</div>
              <div className="p-4 text-ink-soft">{row.limit}</div>
              <div className="p-4 text-ink-soft">{row.rate}</div>
              <div className="p-4 text-ink-soft text-[13px] leading-relaxed">
                {row.notable}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-ink-muted mt-4">
          Rates and bonuses change frequently. Always confirm current offers
          directly with each bank before signing.
        </p>

        {/* Negotiation tips */}
        <div className="mt-10 p-7 rounded-md bg-white border border-hairline">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp
              className="w-4 h-4"
              strokeWidth={2}
              style={{ color: "var(--uoft-blue)" }}
            />
            <p className="eyebrow">How to negotiate</p>
          </div>
          <ul className="space-y-3">
            {[
              "Get written offers from at least two banks before deciding. Banks match each other readily.",
              "Ask explicitly about cash sign-up bonus, grace period length, and prime adjustment in writing.",
              "Don't bundle products you don't need (credit cards, insurance) just to get a better LOC rate.",
              "If a bank pushes you to commit on the spot, that's a signal to walk away and shop the offer.",
            ].map((tip, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] text-ink-soft leading-relaxed"
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-1 text-uoft"
                  strokeWidth={2}
                />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="hairline" />

      {/* BUDGETING */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="Toronto budget"
          title="A realistic monthly breakdown."
          description="A sample budget for a single student living in a 1-bedroom near campus. Adjust upward if you live in Yorkville, downward if you have roommates."
          className="mb-10"
        />

        <div className="bg-white border border-hairline rounded-md overflow-hidden">
          {[
            { line: "Rent (1-bed near campus)", amount: "$2,400" },
            { line: "Utilities (hydro, internet)", amount: "$120" },
            { line: "Groceries", amount: "$500" },
            { line: "Transit (Presto monthly)", amount: "$156" },
            { line: "Phone", amount: "$55" },
            { line: "Eating out / social", amount: "$300" },
            { line: "Misc (clothing, medical, gym)", amount: "$200" },
            { line: "Buffer", amount: "$200" },
          ].map((row, i, arr) => (
            <div
              key={row.line}
              className={`flex items-center justify-between p-4 px-6 ${
                i < arr.length - 1 ? "border-b border-hairline" : ""
              }`}
            >
              <span className="text-[15px] text-ink-soft">{row.line}</span>
              <span
                className="text-[15px] font-semibold text-ink"
                style={{ fontFeatureSettings: "'tnum'" }}
              >
                {row.amount}
              </span>
            </div>
          ))}
          <div
            className="flex items-center justify-between p-5 px-6"
            style={{ backgroundColor: "var(--uoft-blue)", color: "white" }}
          >
            <span className="font-display text-lg font-semibold">
              Monthly total
            </span>
            <span
              className="font-display text-2xl font-semibold"
              style={{ fontFeatureSettings: "'tnum'" }}
            >
              ~$3,930
            </span>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* OSAP + BURSARIES */}
      <section className="container py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <SectionHeader
              eyebrow="Government aid"
              title="OSAP and equivalents."
              className="mb-6"
            />
            <div className="prose-content">
              <p>
                Even if you have an LOC, apply for OSAP (or your province's
                equivalent). OSAP grants are <strong>non-repayable</strong> — leaving
                them on the table because "I don't really need it" is a
                $5,000–15,000 mistake.
              </p>
              <p>
                The application opens each spring. Your eligibility depends on
                your family's income for first-year applicants and your own
                income afterward. The MD Program counts you as full-time even
                during research electives.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Bursaries"
              title="The ones nobody mentions."
              className="mb-6"
            />
            <div className="prose-content">
              <p>
                Beyond OSAP, the Faculty and individual academies administer
                <strong> in-course bursaries</strong> based on demonstrated need.
                These are funded by donor gifts and are awarded yearly — but
                only to students who apply.
              </p>
              <p>
                Application windows open in fall. Watch for emails from your
                academy's financial aid contact. Many bursaries go unclaimed
                each year because students don't think they qualify or don't
                bother.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 p-6 rounded-md border border-hairline flex items-start gap-3"
          style={{
            backgroundColor: "rgba(0, 42, 92, 0.04)",
            borderLeftWidth: "3px",
            borderLeftColor: "var(--uoft-blue)",
          }}
        >
          <AlertCircle
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            strokeWidth={2}
            style={{ color: "var(--uoft-blue)" }}
          />
          <div>
            <p className="font-semibold text-ink mb-1">Talk to the Financial Counsellor.</p>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              The MD Program has a dedicated Financial Counsellor whose entire
              job is helping medical students navigate funding. The appointment
              is free and confidential. Book one in your first semester even if
              you think your finances are sorted — they often catch things you
              missed.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="container py-12">
        <MediaPlaceholder
          kind="photo"
          label="2T9 cohort during a study break or social event"
          aspect="wide"
        />
      </section>
    </PageLayout>
  );
};

export default Finances;
