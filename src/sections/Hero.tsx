import { profile, metrics } from "@/data/profile";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07070B] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
            <Sparkles size={16} className="text-brand-accent" />
            {profile.availability}
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Data & AI craft for{" "}
            <span className="text-brand-accent">measurable business impact</span>.
          </h1>
          <p className="text-lg text-white/70 md:max-w-3xl">{profile.summary}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/15 px-4 py-2">
              {profile.location}
            </span>
            <a
              className="rounded-full border border-white/15 px-4 py-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
              href={`mailto:${profile.contact.email}`}
            >
              {profile.contact.email}
            </a>
            <a
              className="rounded-full border border-white/15 px-4 py-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40"
            >
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
                {metric.label}
              </p>
              <p className="mt-3 text-sm text-white/60">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

