import { profile } from "@/data/profile";

const links = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Stacks", href: "#stacks" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Workflow", href: "#workflow" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <a href="#" className="font-semibold tracking-wide">
          {profile.name}
        </a>
        <div className="hidden md:flex items-center gap-6 text-white/70">
          {links.map((link) => (
            <a
              key={link.href}
              className="hover:text-white transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="rounded-full border border-brand-accent/70 px-4 py-1 text-brand-accent text-xs uppercase tracking-[0.3em]"
          href={`mailto:${profile.contact.email}`}
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

