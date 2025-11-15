import { workflow } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-[#05070A] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Workflow highlights"
          title="My process"
          description="Modern data and AI work thrives on structure. Here’s the loop I follow to stay predictable."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {workflow.map((stage, index) => (
            <li
              key={stage.step}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 text-lg font-semibold">{stage.step}</h4>
              <p className="mt-3 text-sm text-white/70">{stage.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

