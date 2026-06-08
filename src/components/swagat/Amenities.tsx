import { motion } from "motion/react";
import {
  Building2,
  Dumbbell,
  Waves,
  PartyPopper,
  Gamepad2,
  Sparkles,
  Baby,
  Trees,
  Users,
} from "lucide-react";

const amenities = [
  { icon: Building2, label: "Clubhouse" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: PartyPopper, label: "Banquet Hall" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Sparkles, label: "Temple" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Trees, label: "Landscaped Garden" },
  { icon: Users, label: "Community Spaces" },
];

export function Amenities() {
  return (
    <section id="amenities" className="relative py-28 md:py-40 bg-charcoal">
      <div className="container-luxe">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
              Lifestyle & Amenities
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
            A curated lifestyle,
            <br />
            <span className="italic text-gradient-gold">at every address.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px bg-white/5">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
              className="group bg-charcoal p-8 md:p-10 flex items-center gap-5 hover:bg-background transition-colors duration-500"
            >
              <div className="h-14 w-14 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-onyx group-hover:border-gold transition-all duration-500">
                <a.icon size={22} strokeWidth={1.3} />
              </div>
              <div>
                <div className="text-ivory text-base md:text-lg">{a.label}</div>
                <div className="mt-1 h-px w-6 bg-gold/50 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
