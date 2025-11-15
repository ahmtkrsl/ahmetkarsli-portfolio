import { stacks } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function StacksSection() {
  return (
    <section id="stacks" className="bg-[#050506] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My stacks"
          title="Tooling I rely on to ship data & AI outcomes"
          description="From Google Cloud to Python notebooks, these stacks form the backbone of every pipeline, dashboard, and ML experiment I deliver."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">
                {stack.title}
              </p>
              <p className="mt-2 text-white/70">{stack.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-1 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

