import { motion } from "motion/react";
import { Upload } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 bg-yellow-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative bg-gradient-to-br from-amber-400 to-yellow-400 rounded-3xl p-12 text-center overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-14 -left-10 w-64 h-64 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="text-5xl">🔐</div>
            <h2 className="text-amber-950" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800 }}>
              Start building your vault today
            </h2>
            <p className="text-amber-900/70 max-w-md" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
              Free forever for up to 50 recipes. Upload your first screenshot and watch RecipeVault do the work — no credit card, no setup.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-950 hover:bg-amber-900 text-amber-50 rounded-xl transition-colors" style={{ fontWeight: 600 }}>
                <Upload size={16} /> Upload your first recipe
              </button>
            </div>

            <p className="text-amber-800/60" style={{ fontSize: "0.8125rem" }}>
              Already have an account? <span className="underline cursor-pointer hover:text-amber-900">Log in</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
