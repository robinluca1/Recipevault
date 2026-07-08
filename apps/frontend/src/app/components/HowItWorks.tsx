import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    emoji: "🔗",
    title: "Save from anywhere",
    desc: "Paste a URL, import from a photo, or type it in manually. Saveur captures the recipe instantly.",
  },
  {
    n: "02",
    emoji: "✨",
    title: "Auto-organise",
    desc: "We extract ingredients, steps and nutrition info and file it neatly under relevant tags.",
  },
  {
    n: "03",
    emoji: "👨‍🍳",
    title: "Cook with confidence",
    desc: "Open Cook Mode — your phone stays on, timers are set, and steps scroll beautifully.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-yellow-50 to-amber-100/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1 bg-amber-200 text-amber-700 rounded-full mb-4"
            style={{ fontSize: "0.8125rem", fontWeight: 600 }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="text-amber-950"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
            }}
          >
            Up and cooking in 3 steps
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-0.5 bg-amber-200" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 rounded-3xl bg-white border-2 border-amber-200 shadow-md flex flex-col items-center justify-center mb-6 z-10">
                <span className="text-4xl">{s.emoji}</span>
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-amber-900"
                  style={{ fontSize: "0.7rem", fontWeight: 800 }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                className="text-amber-950 mb-2"
                style={{ fontSize: "1rem", fontWeight: 700 }}
              >
                {s.title}
              </h3>
              <p
                className="text-amber-700/60 max-w-xs"
                style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
