import { motion } from "motion/react";
import aboutImg from "@/assets/about-craft.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Architectural craft at Swagat Developers"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden md:block glass-card p-6 max-w-xs">
            <div className="font-display text-4xl text-gradient-gold">18+</div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-ivory/70 mt-1">
              Years building Surat's skyline
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
              About Swagat
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ivory">
            Built on Trust.
            <br />
            <span className="italic text-gradient-gold">Designed for Tomorrow.</span>
          </h2>
          <p className="mt-8 text-ivory/70 leading-[1.85] text-base md:text-lg max-w-xl">
            For over 18 years, Swagat Developers has shaped modern residential and commercial
            spaces across Surat. Every project reflects thoughtful planning, quality construction,
            elegant architecture, and a commitment to creating landmark addresses for modern
            families and businesses.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-white/5 max-w-md">
            {[
              ["Established", "2007"],
              ["Headquartered", "Surat, Gujarat"],
              ["Sectors", "Residential · Commercial"],
              ["Philosophy", "Landmark living"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">{k}</div>
                <div className="mt-2 text-ivory text-sm">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
