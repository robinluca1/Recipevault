import { motion } from "motion/react";

const features = [
  {
    emoji: "📸",
    title: "Screenshot any recipe",
    desc: "From food blogs, Instagram, PDFs, or even a photo of a cookbook page — if you can screenshot it, Recipevault can read it.",
  },
  {
    emoji: "🔍",
    title: "OCR-powered extraction",
    desc: "Powered by Tesseract OCR, we scan your image and pull out every ingredient, quantity, and cooking step automatically.",
  },
  {
    emoji: "✏️",
    title: "Review & edit before saving",
    desc: "Always see the AI draft before it's locked in. Fix a quantity, rename a step, or tweak anything that didn't scan perfectly.",
  },
  {
    emoji: "🗂️",
    title: "Organise into groups",
    desc: "Name your recipe and drop it into a group like Breads, Pasta, or Asian. Your vault stays tidy no matter how many you add.",
  },
  {
    emoji: "🖼️",
    title: "Add your own photo",
    desc: "Attach a photo of your finished dish to make recipes feel personal — and to remind yourself just how good it turned out.",
  },
  {
    emoji: "🔐",
    title: "Your personal vault",
    desc: "Everything saved privately to your account. Access it on any device, share a collection with family, or keep it all to yourself.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-600 rounded-full mb-4" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
            FEATURES
          </span>
          <h2 className="text-amber-950" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800 }}>
            From chaotic screenshots<br />to a beautiful vault
          </h2>
          <p className="mt-3 text-amber-700/70 max-w-xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            No more recipe tabs, pinned posts, or bookmarks you never find again.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-amber-100 hover:shadow-lg hover:shadow-amber-100/60 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl mb-4">
                {f.emoji}
              </div>
              <h3 className="text-amber-950 mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>{f.title}</h3>
              <p className="text-amber-700/60" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
