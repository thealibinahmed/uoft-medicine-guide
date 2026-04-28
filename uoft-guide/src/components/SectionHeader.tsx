interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
