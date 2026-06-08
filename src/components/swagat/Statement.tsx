import { motion } from "motion/react";

export function Statement() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, oklch(0.78 0.13 80 / 0.15), transparent 50%), radial-gradient(ellipse at 80% 70%, oklch(0.68 0.10 75 / 0.12), transparent 55%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="container-luxe relative">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[1.1] text-ivory max-w-6xl"
        >
          <span className="text-gold">"</span>We don't just build spaces. We create{" "}
          <span className="italic text-gradient-gold">addresses people are proud to belong to.</span>
          <span className="text-gold">"</span>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "8rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 h-px bg-gold"
        />
        <p className="mt-6 text-[11px] tracking-[0.45em] uppercase text-champagne">
          — Swagat Developers
        </p>
      </div>
    </section>
  );
}
