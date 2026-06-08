import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } }}
        >
          {/* ambient gold glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs tracking-[0.6em] text-champagne/70 uppercase mb-6"
            >
              Est. 2007 · Surat
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-6xl text-ivory relative"
            >
              <span
                className="relative bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, var(--ivory) 0%, var(--ivory) 40%, var(--gold) 50%, var(--ivory) 60%, var(--ivory) 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  animation: "shimmer 2.4s ease-in-out",
                }}
              >
                SWAGAT DEVELOPERS
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="font-display italic text-base md:text-lg text-champagne mt-5"
            >
              Turning Addresses Into Landmarks
            </motion.p>

            {/* gold progress line */}
            <div className="mt-10 h-px w-64 mx-auto bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
                className="h-full w-full bg-gradient-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
