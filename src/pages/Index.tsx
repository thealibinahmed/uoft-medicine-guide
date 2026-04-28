import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  GraduationCap,
  Wallet,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const sections = [
  {
    to: "/post-acceptance",
    title: "Post-Acceptance",
    summary:
      "A phased checklist from offer acceptance through orientation week — including the Faculty's official requirements published each June.",
    icon: GraduationCap,
    meta: "May → August",
  },
  {
    to: "/housing",
    title: "Housing",
    summary:
      "A neighborhood-by-neighborhood decision tool: commute times to MSB, rent ranges, named buildings, and honest trade-offs.",
    icon: MapPin,
    meta: "5 neighborhoods · 12+ buildings",
  },
  {
    to: "/finances",
    title: "Finances",
    summary:
      "Line of Credit comparison, realistic Toronto budgets, OSAP guidance, and the bursaries most students miss.",
    icon: Wallet,
    meta: "LOCs · OSAP · Bursaries",
  },
  {
    to: "/handbook",
    title: "The Handbook",
    summary:
      "CPC, CBL, CEEs, shadowing, and academies — the curriculum vocabulary, decoded by the people who just learned it.",
    icon: BookOpen,
    meta: "Curriculum glossary",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden">
        {/* Background imagery: UofT campus */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1569447448240-87aaf8b1c0aa?auto=format&fit=crop&w=2400&q=80"
            alt="University of Toronto campus"
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--paper) 0%, rgba(250,248,243,0.85) 60%, var(--paper) 100%)",
            }}
          />
        </div>

        <div className="container pt-20 md:pt-28 pb-20 max-w-5xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="trust-badge">
              <ShieldCheck className="w-3.5 h-3.5" />
              Written by upper-year MD students
            </span>
            <span className="text-xs text-ink-muted hidden md:inline">
              Updated for the 2T9 cohort
            </span>
          </div>

          <p className="eyebrow mb-6 animate-fade-up">
            Temerty Faculty of Medicine · MD Program
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-ink animate-fade-up">
            Welcome to UofT Medicine.
            <br />
            <span className="text-uoft">Here's what comes next.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl animate-fade-up">
            A practical, student-maintained guide to the months between your
            acceptance letter and your first CBL. Housing, finances, registration
            requirements, and the curriculum vocabulary — organized so you can
            actually use it.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <Link
              to="/post-acceptance"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-uoft text-white text-sm font-medium hover:bg-uoft-deep transition-colors"
              style={{ backgroundColor: "var(--uoft-blue)" }}
            >
              Start with the checklist
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/housing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-ink/15 text-sm font-medium text-ink hover:bg-paper-deep transition-colors"
            >
              Explore the housing guide
            </Link>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ============================================================
          COHORT IMAGERY STRIP
          ============================================================ */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <MediaPlaceholder
              kind="photo"
              label="Hero shot of the 2T9 cohort — orientation week, white coat ceremony, or a candid group photo"
              aspect="wide"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80"
              alt="University of Toronto campus building"
              className="w-full aspect-square object-cover rounded-md"
            />
            <MediaPlaceholder
              kind="photo"
              label="Candid cohort moment"
              aspect="square"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION OVERVIEW
          ============================================================ */}
      <section className="container py-20">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">The guide</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              Four sections. Everything between your offer and your first
              rotation.
            </h2>
          </div>
          <p className="text-sm text-ink-muted">
            Each section is maintained by a current student lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-lg overflow-hidden">
          {sections.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              className="group bg-white p-8 md:p-10 hover:bg-paper-deep transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono text-ink-muted"
                    style={{ fontFamily: "ui-monospace, monospace" }}
                  >
                    0{i + 1}
                  </span>
                  <s.icon
                    className="w-5 h-5 text-uoft"
                    strokeWidth={1.75}
                  />
                </div>
                <ArrowRight className="w-4 h-4 text-ink-muted group-hover:translate-x-1 group-hover:text-uoft transition-all" />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-ink">
                {s.title}
              </h3>
              <p className="text-ink-soft leading-relaxed mb-6 flex-1">
                {s.summary}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-ink-muted font-medium pt-4 border-t border-hairline">
                {s.meta}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* ============================================================
          MANIFESTO
          ============================================================ */}
      <section className="container py-20 max-w-3xl">
        <p className="eyebrow mb-4">Why this exists</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8 leading-tight text-ink">
          Med school comes with a syllabus. The transition into it doesn't.
        </h2>
        <div className="prose-content">
          <p>
            When you accept your offer, the Faculty sends you the essentials:
            registration requirements, immunization forms, academic timelines.
            What it can't easily provide is the lived practical knowledge —
            which neighborhoods are realistic on a student budget, which Line of
            Credit terms actually matter, and what your first eight weeks of
            curriculum will feel like.
          </p>
          <p>
            This guide is built to fill that gap. It's written and maintained by
            current and recent UofT MD students, structured around the decisions
            you'll actually face, and updated each year before the new cohort
            arrives. Where the Faculty has an official source — like the{" "}
            <a
              href="https://md.utoronto.ca/registration-requirements-requests"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registration Requirements page
            </a>
            , refreshed each June — we link directly to it rather than
            duplicating the information here.
          </p>
          <p>
            <strong>What this is:</strong> a trusted starting point. <strong>What
            it isn't:</strong> a replacement for advice from your academy, the
            MD Program Office, or financial professionals.
          </p>
        </div>
      </section>

      {/* ============================================================
          CTA STRIP
          ============================================================ */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--uoft-blue)" }}
      >
        <div className="container max-w-4xl text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ color: "var(--gold)" }}
          >
            Ready to start
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-white mb-6">
            The first thing to do is accept your offer.
            <br />
            We'll walk you through the rest.
          </h2>
          <Link
            to="/post-acceptance"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-white text-sm font-medium hover:bg-paper transition-colors"
            style={{ color: "var(--uoft-blue)" }}
          >
            Open the post-acceptance checklist
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
