import { services } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#040305] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Solutions suite"
          title="Ways I plug into your roadmap"
          description="From cloud pipelines to stakeholder-ready decks, I embed quickly, clarify KPIs, and ship reliable automation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-white/70">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

