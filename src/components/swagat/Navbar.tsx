import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-gold/50 flex items-center justify-center">
              <span className="font-display text-gold text-lg leading-none">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-ivory text-base md:text-lg tracking-[0.25em]">
                SWAGAT
              </div>
              <div className="text-[10px] tracking-[0.4em] text-champagne/70 -mt-0.5">
                DEVELOPERS
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ivory/80 hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.25em] uppercase border border-gold/50 text-gold hover:bg-gold hover:text-onyx transition-all duration-500"
          >
            Book Site Visit
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-ivory p-2"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] bg-onyx lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <span className="font-display text-ivory tracking-[0.25em]">SWAGAT</span>
              <button onClick={() => setOpen(false)} className="text-ivory p-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display text-3xl text-ivory hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center gap-2 px-6 py-3 text-xs tracking-[0.25em] uppercase border border-gold text-gold"
              >
                Book Site Visit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
