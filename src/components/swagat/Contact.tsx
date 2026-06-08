import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const projects = [
  "Swagat Callista",
  "Swagat Cilantra",
  "Swagat Texking",
  "Coral Heights",
  "Rasik Villa",
  "Swagat Homes",
  "Not Sure Yet",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Residential",
    project: "Swagat Callista",
    message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    toast.success("Thank you. Our team will reach out shortly.");
    setForm({
      name: "",
      phone: "",
      interest: "Residential",
      project: "Swagat Callista",
      message: "",
    });
  }

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="container-luxe grid lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-champagne">
              Enquiry
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05]">
            Looking for your next
            <br />
            <span className="italic text-gradient-gold">landmark address?</span>
          </h2>
          <p className="mt-6 text-ivory/65 max-w-md leading-relaxed">
            Share your details and the Swagat Developers team will help you explore the right
            residential or commercial opportunity.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">Location</div>
              <div className="mt-1 text-ivory">Surat, Gujarat · India</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">Instagram</div>
              <a
                href="https://www.instagram.com/swagatdevelopers/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-ivory hover:text-gold transition-colors inline-block"
              >
                @swagatdevelopers
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-7 glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name">
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={80}
                className="luxe-input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Phone Number">
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                maxLength={20}
                className="luxe-input"
                placeholder="+91"
              />
            </Field>
            <Field label="Interested In">
              <select
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="luxe-input"
              >
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </Field>
            <Field label="Preferred Project">
              <select
                value={form.project}
                onChange={(e) => update("project", e.target.value)}
                className="luxe-input"
              >
                {projects.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Message">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={600}
                  className="luxe-input resize-none"
                  placeholder="Tell us what you're looking for…"
                />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            className="group mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold-glow transition-all duration-500"
          >
            Request a Callback
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>

      <style>{`
        .luxe-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid oklch(1 0 0 / 0.15);
          padding: 0.75rem 0;
          color: var(--ivory);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.4s;
        }
        .luxe-input:focus { border-color: var(--gold); }
        .luxe-input::placeholder { color: oklch(1 0 0 / 0.3); }
        select.luxe-input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, var(--gold) 50%), linear-gradient(135deg, var(--gold) 50%, transparent 50%); background-position: calc(100% - 14px) 18px, calc(100% - 8px) 18px; background-size: 6px 6px; background-repeat: no-repeat; padding-right: 1.5rem; }
        select.luxe-input option { background: var(--charcoal); color: var(--ivory); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
