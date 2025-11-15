import { works } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function WorksSection() {
  return (
    <section id="works" className="bg-[#07080C] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Works gallery"
          title="Evidence of learning faster than the brief"
          description="Every engagement blends analytics rigor with storytelling so teams can trust the numbers instantly."
        />
        <div className="mt-12 grid gap-6">
          {works.map((work) => (
            <article
              key={work.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-transparent to-transparent p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
                <span className="uppercase tracking-[0.3em] text-brand-accent">
                  {work.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{work.title}</h3>
              <p className="mt-3 text-white/70">{work.description}</p>
              <ul className="mt-4 grid gap-2 text-white/80">
                {work.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <p>{highlight}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

