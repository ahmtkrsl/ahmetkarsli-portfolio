import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/70">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-white/60">
          <a href={`mailto:${profile.contact.email}`} className="hover:text-white">
            {profile.contact.email}
          </a>
          <span>·</span>
          <a href={profile.contact.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

