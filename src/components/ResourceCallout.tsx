import { ExternalLink, Info } from "lucide-react";

interface ResourceCalloutProps {
  title: string;
  description: string;
  href: string;
  source: string;
  note?: string;
}

/**
 * Highlighted block for official UofT/Faculty resources.
 * Visual emphasis signals "this is the authoritative source —
 * not student commentary."
 */
export const ResourceCallout = ({
  title,
  description,
  href,
  source,
  note,
}: ResourceCalloutProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative border border-hairline rounded-md p-6 bg-white hover:border-uoft transition-colors"
      style={{ borderLeftWidth: "3px", borderLeftColor: "var(--uoft-blue)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="eyebrow mb-2">Official · {source}</p>
          <h4 className="font-display text-lg md:text-xl font-semibold text-ink mb-1.5 group-hover:text-uoft transition-colors">
            {title}
          </h4>
          <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
          {note && (
            <div className="mt-3 flex items-start gap-2 text-xs text-ink-muted bg-paper-deep px-3 py-2 rounded">
              <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" strokeWidth={2} />
              <span>{note}</span>
            </div>
          )}
        </div>
        <ExternalLink
          className="w-4 h-4 text-ink-muted group-hover:text-uoft transition-colors flex-shrink-0 mt-1"
          strokeWidth={2}
        />
      </div>
    </a>
  );
};
