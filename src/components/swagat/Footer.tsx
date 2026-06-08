import { Instagram } from "lucide-react";
import { navLinks, projects } from "./data";

export function Footer() {
  return (
    <footer className="relative bg-onyx border-t border-white/5">
      <div className="container-luxe py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center">
              <span className="font-display text-gold text-xl leading-none">S</span>
            </div>
            <div>
              <div className="font-display text-ivory text-lg tracking-[0.25em]">SWAGAT</div>
              <div className="text-[10px] tracking-[0.4em] text-champagne/70 -mt-0.5">
                DEVELOPERS
              </div>
            </div>
          </div>
          <p className="mt-6 font-display italic text-2xl text-gradient-gold max-w-md">
            Turning Addresses Into Landmarks.
          </p>
          <p className="mt-4 text-ivory/55 text-sm max-w-md leading-relaxed">
            Crafting premium residential and commercial landmarks in Surat for over 18 years.
          </p>
          <a
            href="https://www.instagram.com/swagatdevelopers/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors"
          >
            <Instagram size={18} />
            <span className="text-sm">@swagatdevelopers</span>
          </a>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ivory/65 hover:text-ivory transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Projects</div>
          <ul className="space-y-3 text-sm">
            {projects.map((p) => (
              <li key={p.name}>
                <a href="#projects" className="text-ivory/65 hover:text-ivory transition-colors">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/65">
            <li>Surat, Gujarat</li>
            <li>India</li>
            <li className="text-ivory/40">Phone — coming soon</li>
            <li className="text-ivory/40">Email — coming soon</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.25em] uppercase text-ivory/40">
          <div>© {new Date().getFullYear()} Swagat Developers · All rights reserved</div>
          <div>Designed for landmark living</div>
        </div>
      </div>
    </footer>
  );
}
