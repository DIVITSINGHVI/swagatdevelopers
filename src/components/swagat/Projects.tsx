import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-40 bg-charcoal">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
              Landmarks by
              <br />
              <span className="italic text-gradient-gold">Swagat Developers</span>
            </h2>
          </div>
          <p className="text-ivory/60 max-w-sm">
            A curated selection of residential and commercial addresses defining modern Surat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <motion.a
              key={p.name}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block overflow-hidden bg-background"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} by Swagat Developers`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase glass-card text-champagne">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl md:text-3xl text-ivory">{p.name}</h3>
                  <p className="mt-2 text-sm text-ivory/70 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                    View Project
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-gold/40 transition-all duration-700 pointer-events-none" />
              <div
                className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 40%, oklch(0.78 0.13 80 / 0.25), transparent 60%)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
