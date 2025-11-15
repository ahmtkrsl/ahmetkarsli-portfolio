type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center" : ""}`}>
      <p className="text-sm uppercase tracking-[0.3em] text-brand-accent/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {description ? (
        <p className="text-base text-white/70 max-w-2xl mx-auto">{description}</p>
      ) : null}
    </div>
  );
}

