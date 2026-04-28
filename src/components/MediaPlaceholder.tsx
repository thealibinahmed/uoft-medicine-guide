import { ImageIcon, Film } from "lucide-react";

interface MediaPlaceholderProps {
  kind?: "photo" | "video";
  label: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

/**
 * Drop-in slot for 2T9 cohort media.
 * Replace with <img> or <video> when you have the asset.
 *
 * Example replacement:
 *   <img src="/images/cohort-orientation-2025.jpg"
 *        alt="2T9 cohort at orientation"
 *        className="w-full aspect-video object-cover rounded-md" />
 */
export const MediaPlaceholder = ({
  kind = "photo",
  label,
  aspect = "video",
  className = "",
}: MediaPlaceholderProps) => {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }[aspect];

  const Icon = kind === "video" ? Film : ImageIcon;

  return (
    <div
      className={`${aspectClass} ${className} relative w-full overflow-hidden rounded-md border border-dashed border-uoft/30 bg-paper-deep flex items-center justify-center group`}
      style={{ borderColor: "rgba(0, 42, 92, 0.25)" }}
    >
      <div className="flex flex-col items-center gap-2 text-center px-6">
        <Icon className="w-7 h-7 text-uoft" strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-uoft">
          {kind === "video" ? "2T9 video" : "2T9 photo"}
        </p>
        <p className="text-sm text-ink-soft max-w-xs">{label}</p>
      </div>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, var(--uoft-blue) 1px, transparent 1px), linear-gradient(90deg, var(--uoft-blue) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
};
