import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import signatureImg from "@/assets/signature-callista.jpg";

const highlights = [
  "Premium residences",
  "Modern planning",
  "Lifestyle amenities",
  "Elegant architecture",
];

export function Signature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="container-luxe">
        <div ref={ref} className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <motion.img
            style={{ y, scale: 1.15 }}
            src={signatureImg}
            alt="Swagat Callista signature project"
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-onyx/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-8 md:p-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
                  Signature Project · Swagat Callista
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
                A New Landmark in
                <br />
                <span className="italic text-gradient-gold">Modern Living.</span>
              </h2>
              <p className="mt-6 text-ivory/75 max-w-xl text-base md:text-lg leading-relaxed">
                Designed for families who seek comfort, elegance, and a refined lifestyle in Surat.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="glass-card px-4 py-3 text-sm text-ivory/85 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
