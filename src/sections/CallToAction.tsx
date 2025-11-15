import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-brand-highlight/20 via-transparent to-brand-accent/20 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          Let’s work together
        </p>
        <h3 className="text-3xl font-semibold">
          Ready to co-build data products, AI prototypes, or dashboards that teams actually use?
        </h3>
        <p className="text-white/70">
          I’m based in Istanbul, work comfortably in English and Turkish, and can jump into internships, part-time roles, or project-based collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:border-brand-accent hover:text-brand-accent"
            href={`mailto:${profile.contact.email}`}
          >
            Email {profile.contact.email}
          </a>
          <a
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-brand-accent hover:text-brand-accent"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center gap-2">
              Connect on LinkedIn
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

