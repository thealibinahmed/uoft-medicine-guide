import { CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ResourceCallout } from "@/components/ResourceCallout";
import { SectionHeader } from "@/components/SectionHeader";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { checklist } from "@/data/checklist";

const PostAcceptance = () => {
  return (
    <PageLayout>
      {/* HEADER */}
      <section className="container pt-16 md:pt-20 pb-12 max-w-4xl">
        <p className="eyebrow mb-4 animate-fade-up">Section 01 · Post-Acceptance</p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink animate-fade-up">
          From offer letter to first day of class.
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl animate-fade-up">
          A phased timeline of what to do, when to do it, and which decisions
          can wait. Each phase links directly to the Faculty's official sources
          where applicable.
        </p>
      </section>

      <div className="hairline" />

      {/* OFFICIAL RESOURCES — surfaced first */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="Start here"
          title="Official Faculty resources"
          description="These are the authoritative sources for your acceptance and registration. Bookmark both. Everything else on this page is supplementary guidance from upper-year students."
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <ResourceCallout
            source="applymd.utoronto.ca"
            title="Accepting Your Offer"
            description="Step-by-step walkthrough of the formal acceptance process, deposit deadlines, and offer-related forms."
            href="https://applymd.utoronto.ca/accepting-your-offer"
          />
          <ResourceCallout
            source="md.utoronto.ca"
            title="Registration Requirements & Requests"
            description="Annual list of immunizations, certifications, police checks, and forms required before you can register and start clinical work."
            href="https://md.utoronto.ca/registration-requirements-requests"
            note="This page is refreshed by the Faculty each year around mid-June. Wait for the updated version before booking immunizations or training — requirements change between cohorts."
          />
        </div>
      </section>

      <div className="hairline" />

      {/* PHASED CHECKLIST */}
      <section className="container py-16 max-w-4xl">
        <SectionHeader
          eyebrow="The timeline"
          title="What to do, by phase"
          description="Most students try to handle everything at once and burn out by July. Here's the order that actually works."
          className="mb-12"
        />

        <div className="space-y-16">
          {checklist.map((phase, phaseIdx) => (
            <div key={phase.phase} className="relative">
              {/* Phase header */}
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-hairline">
                <span
                  className="font-display text-4xl md:text-5xl font-semibold text-uoft"
                  style={{ fontFeatureSettings: "'tnum'" }}
                >
                  {String(phaseIdx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink leading-tight">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-ink-muted mt-1">
                    {phase.timeframe}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4 md:pl-16">
                {phase.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-hairline rounded-md p-6 hover:border-uoft/30 transition-colors"
                    style={
                      item.important
                        ? { borderLeftWidth: "3px", borderLeftColor: "var(--gold)" }
                        : {}
                    }
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        className="w-5 h-5 text-uoft flex-shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h4 className="font-display text-lg font-semibold text-ink">
                            {item.title}
                          </h4>
                          {item.important && (
                            <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded">
                              Time-sensitive
                            </span>
                          )}
                        </div>
                        <p className="text-ink-soft text-[15px] leading-relaxed">
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 text-sm text-uoft hover:text-gold-warm transition-colors font-medium"
                          >
                            {item.link.label}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* WHITE COAT MOMENT */}
      <section className="container py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">The end of this phase</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-ink mb-4">
              Orientation week and the white coat ceremony.
            </h2>
            <p className="text-ink-soft leading-relaxed mb-4">
              If you've worked through this checklist, by late August you'll be
              moved in, registered, immunized, and ready. Orientation week is
              your formal welcome — meet your academy, get your white coat, and
              start to put faces to the cohort you'll be with for four years.
            </p>
            <p className="text-ink-soft leading-relaxed">
              Then the curriculum begins — and the{" "}
              <a
                href="/handbook"
                className="text-uoft underline underline-offset-2 hover:text-gold-warm transition-colors"
              >
                Handbook
              </a>{" "}
              section takes over.
            </p>
          </div>
          <MediaPlaceholder
            kind="photo"
            label="2T9 white coat ceremony — group shot or candid moment"
            aspect="square"
          />
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--paper-deep)" }}
      >
        <div className="container max-w-4xl">
          <SectionHeader
            eyebrow="Things students ask in May"
            title="Quick answers"
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Should I move to Toronto before knowing my academy?",
                a: "Yes, if your academy is on St. George. No, if there's any chance you're at Mississauga (MAM). Confirm placement before signing a downtown lease.",
              },
              {
                q: "Do I need to attend the in-person admitted student events?",
                a: "Not required, but they're how most students meet roommates and form early friend groups. Worth attending one if you can.",
              },
              {
                q: "When does my LOC actually need to be open?",
                a: "Before tuition is due in early September. Most students open theirs in May or June to lock in promo cash bonuses while they're available.",
              },
              {
                q: "What if I miss the immunization deadline?",
                a: "You won't be able to start clinical work, which delays your year. Treat the mid-June requirements page as the most urgent thing you'll read all summer.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white border border-hairline rounded-md p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle
                    className="w-4 h-4 text-uoft flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <h4 className="font-display text-lg font-semibold text-ink leading-snug">
                    {item.q}
                  </h4>
                </div>
                <p className="text-ink-soft text-[15px] leading-relaxed pl-7">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PostAcceptance;
