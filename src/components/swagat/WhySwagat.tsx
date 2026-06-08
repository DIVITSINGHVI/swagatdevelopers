import { motion } from "motion/react";
import { ShieldCheck, Hammer, Compass, Landmark } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "18+ Years of Trust",
    desc: "A legacy of integrity built across two decades of delivered landmarks.",
  },
  {
    icon: Hammer,
    title: "Quality Construction",
    desc: "Materials, finishes and engineering selected for permanence and refinement.",
  },
  {
    icon: Compass,
    title: "Thoughtful Planning",
    desc: "Every floorplate considered for light, flow and the rhythm of daily life.",
  },
  {
    icon: Landmark,
    title: "Landmark Architecture",
    desc: "Distinctive façades that elevate the skyline and define their neighbourhoods.",
  },
];

export function WhySwagat() {
  return (
    <section id="why" className="relative py-28 md:py-40">
      <div className="container-luxe">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
              Why Swagat
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
            Four pillars of a
            <br />
            <span className="italic text-gradient-gold">landmark address.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card p-8 relative overflow-hidden hover:border-gold/40 transition-colors duration-700"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <div className="relative">
                <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-onyx transition-all duration-500">
                  <it.icon size={20} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl text-ivory">{it.title}</h3>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{it.desc}</p>
                <div className="mt-6 h-px w-10 bg-gold/60 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
