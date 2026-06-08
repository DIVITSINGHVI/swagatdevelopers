import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-tower.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 2.8 + i * 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium Swagat Developers tower in Surat"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-onyx/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-luxe h-full flex flex-col justify-end pb-24 md:pb-32"
      >
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-3 mb-8 self-start"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
            Trusted Developer in Surat
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.02] text-ivory max-w-5xl"
        >
          Turning Addresses
          <br />
          Into <span className="italic text-gradient-gold">Landmarks.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-8 text-base md:text-lg text-ivory/70 max-w-2xl leading-relaxed"
        >
          18+ Years of Trust · 15+ Landmark Projects · Premium Residential & Commercial
          Developments in Surat.
        </motion.p>

        <motion.div
          custom={3}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold-glow transition-all duration-500"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-ivory/30 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-all duration-500"
          >
            Book a Site Visit
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-champagne/60"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
