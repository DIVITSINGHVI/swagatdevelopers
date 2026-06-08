import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 bg-charcoal overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container-luxe relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-7xl text-ivory leading-[1.05] max-w-4xl mx-auto"
        >
          Your Landmark Address
          <br />
          <span className="italic text-gradient-gold">Starts Here.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold-glow transition-all duration-500"
          >
            Book Site Visit
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/30 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-all duration-500"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
