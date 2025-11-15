import { testimonials } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#060608] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Reviews showcase"
          title="Documented impact"
          description="Snapshots pulled from internship journals, research notes, and delivery reports."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-6"
            >
              <blockquote className="text-white/80">{testimonial.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.title}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">
                  {testimonial.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

