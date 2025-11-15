import { education, internships } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function TimelineSection() {
  const ordered = [...internships].sort((a, b) => {
    if (a.year === b.year) {
      return a.isCurrent ? 1 : -1;
    }
    return (a.year ?? 0) - (b.year ?? 0);
  });

  return (
    <section className="bg-[#08080C] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience timeline"
          title="From first internship to today"
          description="A quick snapshot of where I started, the skills I strengthened, and the team I'm currently powering."
        />

        <div className="mt-16">
          <div className="relative hidden h-1 w-full rounded-full bg-gradient-to-r from-brand-accent via-white/20 to-brand-highlight/60 md:block" />
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {ordered.map((item, index) => (
              <div key={item.company} className="relative flex flex-1 flex-col items-center text-center">
                <div className="absolute left-1/2 hidden h-8 w-px -translate-x-1/2 bg-white/20 md:block" />
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 text-lg font-semibold transition ${
                    item.isCurrent
                      ? "border-brand-accent bg-brand-accent text-black shadow-[0_0_35px_rgba(255,209,102,0.55)]"
                      : "border-white/20 bg-white/5 text-white/70"
                  }`}
                >
                  {item.year}
                </div>
                <div className="mt-4 space-y-2">
                  <p
                    className={`text-xs uppercase tracking-[0.4em] ${
                      item.isCurrent ? "text-brand-accent" : "text-white/40"
                    }`}
                  >
                    {item.isCurrent ? "Current" : index === 0 ? "Start" : "Milestone"}
                  </p>
                  <h3
                    className={`text-lg font-semibold ${
                      item.isCurrent ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.company}
                  </h3>
                  <p className="text-sm text-white/60">{item.role}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.period}
                  </p>
                  <p className="text-sm text-white/60">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Education
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">{edu.school}</h4>
                <p className="text-white/80">{edu.program}</p>
                <p className="mt-2 text-white/60">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

