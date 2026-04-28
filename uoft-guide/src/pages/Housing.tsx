import { useState } from "react";
import {
  MapPin,
  Clock,
  Home,
  Train,
  Bike,
  TrendingUp,
  TrendingDown,
  Building2,
  AlertTriangle,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { neighborhoods } from "@/data/neighborhoods";

const Housing = () => {
  const [activeId, setActiveId] = useState(neighborhoods[0].id);
  const active = neighborhoods.find((n) => n.id === activeId)!;

  return (
    <PageLayout>
      {/* HEADER */}
      <section className="container pt-16 md:pt-20 pb-12 max-w-4xl">
        <p className="eyebrow mb-4 animate-fade-up">Section 02 · Housing</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink animate-fade-up">
          Where to live, decided properly.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl animate-fade-up">
          Most students sign their first Toronto lease in June or July under
          pressure. This guide is structured to help you make that decision
          deliberately — by neighborhood, with real commute times to the
          Medical Sciences Building, current rent ranges, and named buildings.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm animate-fade-up">
          <span className="trust-badge">
            <MapPin className="w-3.5 h-3.5" />
            5 neighborhoods
          </span>
          <span className="trust-badge">
            <Building2 className="w-3.5 h-3.5" />
            12+ named buildings
          </span>
          <span className="trust-badge">
            <Clock className="w-3.5 h-3.5" />
            Commute times to MSB
          </span>
        </div>
      </section>

      <div className="hairline" />

      {/* CAMPUS IMAGE STRIP */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1569447448240-87aaf8b1c0aa?auto=format&fit=crop&w=1200&q=80"
            alt="UofT campus near King's College Circle"
            className="w-full aspect-[4/3] object-cover rounded-md md:col-span-2"
          />
          <MediaPlaceholder
            kind="photo"
            label="Walk from your apartment to MSB — 2T9 cohort"
            aspect="square"
          />
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="Before you tour anything"
          title="Three questions to answer first."
          description="The right neighborhood depends almost entirely on these three things. Decide them before you start scrolling listings."
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {[
            {
              num: "01",
              q: "Which academy?",
              a: "St. George academies (FitzGerald, Peters-Boyd, Wightman-Berris) → live downtown. Mississauga Academy (MAM) → live in Mississauga. Don't skip this — it overrides everything else.",
            },
            {
              num: "02",
              q: "Walk or commute?",
              a: "8am sessions are common. Commuting 30+ min by streetcar in February gets old fast. If you can afford to walk, walk.",
            },
            {
              num: "03",
              q: "Solo or roommates?",
              a: "A 2-bedroom split two ways is often $400–600/month cheaper per person than a comparable 1-bed. Worth considering even if you'd prefer to live alone.",
            },
          ].map((item) => (
            <div key={item.num} className="bg-white p-7">
              <p
                className="font-display text-3xl font-semibold text-uoft mb-3"
                style={{ fontFeatureSettings: "'tnum'" }}
              >
                {item.num}
              </p>
              <h4 className="font-display text-lg font-semibold text-ink mb-3">
                {item.q}
              </h4>
              <p className="text-sm text-ink-soft leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* NEIGHBORHOOD BROWSER — the core tool */}
      <section className="container py-16">
        <SectionHeader
          eyebrow="The neighborhoods"
          title="Compare side by side."
          description="Select a neighborhood to see commute, rent, vibe, trade-offs, and specific buildings. All data refreshed before each cohort cycle."
          className="mb-10"
        />

        {/* Tab nav */}
        <div className="flex gap-1 overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {neighborhoods.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveId(n.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                activeId === n.id
                  ? "text-white"
                  : "text-ink-soft hover:text-ink hover:bg-paper-deep"
              }`}
              style={
                activeId === n.id
                  ? { backgroundColor: "var(--uoft-blue)" }
                  : {}
              }
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Active neighborhood detail */}
        <div className="bg-white border border-hairline rounded-lg overflow-hidden">
          {/* Header */}
          <div
            className="p-8 md:p-10 text-white"
            style={{ backgroundColor: "var(--uoft-blue)" }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
              {active.name}
            </h3>
            <p className="text-base md:text-lg opacity-90 max-w-2xl leading-relaxed">
              {active.tagline}
            </p>

            {/* Vibe tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {active.vibe.map((v) => (
                <span
                  key={v}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: "rgba(255, 184, 28, 0.15)",
                    color: "var(--gold)",
                    border: "1px solid rgba(255, 184, 28, 0.3)",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Commute + Rent stat strip */}
          <div className="grid md:grid-cols-2 border-b border-hairline">
            {/* Commute */}
            <div className="p-7 md:p-8 border-b md:border-b-0 md:border-r border-hairline">
              <p className="eyebrow mb-4">Commute to MSB</p>
              <div className="space-y-3">
                {active.commute.walk && (
                  <CommuteRow
                    icon={<Home className="w-4 h-4" strokeWidth={1.75} />}
                    label="Walk"
                    value={active.commute.walk}
                  />
                )}
                {active.commute.bike && (
                  <CommuteRow
                    icon={<Bike className="w-4 h-4" strokeWidth={1.75} />}
                    label="Bike"
                    value={active.commute.bike}
                  />
                )}
                {active.commute.transit && active.commute.transit !== "N/A" && (
                  <CommuteRow
                    icon={<Train className="w-4 h-4" strokeWidth={1.75} />}
                    label="Transit"
                    value={active.commute.transit}
                  />
                )}
              </div>
            </div>

            {/* Rent */}
            <div className="p-7 md:p-8">
              <p className="eyebrow mb-4">Rent range (CAD/month)</p>
              <div className="space-y-3">
                <RentRow label="Bachelor" value={active.rentRange.bachelor} />
                <RentRow label="1-bedroom" value={active.rentRange.oneBed} />
                <RentRow label="2-bedroom" value={active.rentRange.twoBed} />
              </div>
            </div>
          </div>

          {/* Pros / Cons */}
          <div className="grid md:grid-cols-2 border-b border-hairline">
            <div className="p-7 md:p-8 border-b md:border-b-0 md:border-r border-hairline">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp
                  className="w-4 h-4"
                  strokeWidth={2}
                  style={{ color: "var(--uoft-blue)" }}
                />
                <p className="eyebrow">What works</p>
              </div>
              <ul className="space-y-3">
                {active.pros.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="text-uoft mt-1 flex-shrink-0">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown
                  className="w-4 h-4"
                  strokeWidth={2}
                  style={{ color: "var(--ink-muted)" }}
                />
                <p className="eyebrow" style={{ color: "var(--ink-muted)" }}>
                  Trade-offs
                </p>
              </div>
              <ul className="space-y-3">
                {active.cons.map((c, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="text-ink-muted mt-1 flex-shrink-0">−</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buildings */}
          <div className="p-7 md:p-10">
            <p className="eyebrow mb-5">Buildings & options to consider</p>
            <div className="space-y-3">
              {active.buildings.map((b) => (
                <div
                  key={b.name}
                  className="border border-hairline rounded-md p-5 hover:bg-paper-deep transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <div>
                      <h5 className="font-display text-lg font-semibold text-ink">
                        {b.name}
                      </h5>
                      <p className="text-xs text-ink-muted mt-0.5">
                        {b.address} · {b.type}
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold text-uoft whitespace-nowrap"
                      style={{ fontFeatureSettings: "'tnum'" }}
                    >
                      {b.rentRange}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed mt-2">
                    {b.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Best for footer */}
          <div
            className="p-7 md:p-8 border-t border-hairline"
            style={{ backgroundColor: "var(--paper-deep)" }}
          >
            <div className="flex items-start gap-3">
              <span
                className="text-xs uppercase tracking-[0.18em] font-bold flex-shrink-0 mt-0.5"
                style={{ color: "var(--gold-warm)" }}
              >
                Best for
              </span>
              <p className="text-[15px] text-ink leading-relaxed">
                {active.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WARNINGS */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--paper-deep)" }}
      >
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Before you sign"
            title="Things students wish they knew."
            className="mb-10"
          />

          <div className="space-y-4">
            {[
              {
                title: "Toronto's lease cycle is brutal in summer.",
                body: "Most quality units list in May–June for a Sept 1 start and are gone within a week. If you wait until July, you'll choose from leftovers. Set up daily PadMapper and Facebook group alerts the day you accept your offer.",
              },
              {
                title: "Don't pay rent in cash to a stranger you met online.",
                body: "Toronto rental scams target students. Always tour in person, verify the landlord owns the unit (check MPAC), and never pay anything before signing a lease. If a deal feels rushed, it's a scam.",
              },
              {
                title: "All-inclusive rent is rarely a deal.",
                body: "'Utilities included' usually means the landlord has built a margin into the price. For a single occupant, hydro and internet typically run $80–120/month combined — much less than the markup on inclusive listings.",
              },
              {
                title: "Tenant insurance is worth it.",
                body: "Around $20/month covers your contents, liability, and temporary housing if your unit becomes uninhabitable. Many landlords now require it. Don't skip.",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-white border border-hairline rounded-md p-6"
                style={{ borderLeftWidth: "3px", borderLeftColor: "var(--gold)" }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    strokeWidth={1.75}
                    style={{ color: "var(--gold-warm)" }}
                  />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ink mb-2">
                      {w.title}
                    </h4>
                    <p className="text-[15px] text-ink-soft leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const CommuteRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2.5 text-ink-soft">
      <span className="text-uoft">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    <span
      className="text-sm font-semibold text-ink"
      style={{ fontFeatureSettings: "'tnum'" }}
    >
      {value}
    </span>
  </div>
);

const RentRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-sm text-ink-soft">{label}</span>
    <span
      className="text-sm font-semibold text-ink"
      style={{ fontFeatureSettings: "'tnum'" }}
    >
      {value}
    </span>
  </div>
);

export default Housing;
