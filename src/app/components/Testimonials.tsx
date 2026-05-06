import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sofia M.",
    handle: "@sofiascooks",
    avatar: "SM",
    color: "bg-amber-300",
    text: "Recipevault changed that completely — everything is in one place now. I screenshot a recipe, and within seconds I have a clean, formatted card I can actually cook from.",
    stars: 5,
  },
  {
    name: "James T.",
    handle: "@jamestcooks",
    avatar: "JT",
    color: "bg-orange-300",
    text: "The OCR is surprisingly accurate. It even picked up the handwritten quantities from a cookbook photo I took. The review step meant I could fix the one thing it got wrong.",
    stars: 5,
  },
  {
    name: "Priya K.",
    handle: "@priyabakes",
    avatar: "PK",
    color: "bg-yellow-300",
    text: "I have a Breads group, an Asian group, a Desserts group… my vault is better organised than my kitchen. And every single recipe started as a screenshot.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-600 rounded-full mb-4" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
            TESTIMONIALS
          </span>
          <h2 className="text-amber-950" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800 }}>
            What home cooks are saying
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-amber-800/80 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-amber-900`} style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-amber-900" style={{ fontWeight: 600, fontSize: "0.875rem" }}>{t.name}</p>
                  <p className="text-amber-400" style={{ fontSize: "0.8rem" }}>{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
