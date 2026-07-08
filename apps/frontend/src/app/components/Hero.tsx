import { motion } from "motion/react";
import { Upload, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-200 rounded-full w-fit">
            <Star size={13} className="text-amber-500 fill-amber-500" />
            <span
              className="text-amber-700"
              style={{ fontSize: "0.8125rem", fontWeight: 500 }}
            >
              Loved by 10,000+ home cooks
            </span>
          </div>

          <h1
            className="text-amber-950"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            Screenshot a recipe.
            <br />
            <span className="text-amber-500">We do the rest.</span>
          </h1>

          <p
            className="text-amber-800/70 max-w-md"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            Snap any recipe — from Instagram, a blog, a cookbook scan — and
            RecipeVault's AI reads it for you. Ingredients extracted. Steps
            cleaned up. Saved to your personal vault in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              to="onboarding"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl transition-colors"
              style={{ fontWeight: 700 }}
            >
              <Upload size={17} /> Upload your first recipe
            </Link>
            <button
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-amber-200 hover:bg-amber-50 text-amber-800 rounded-xl transition-colors"
              style={{ fontWeight: 600 }}
            >
              See how it works <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-amber-400 fill-amber-400"
              />
            ))}
            <span
              className="ml-1 text-amber-600"
              style={{ fontSize: "0.8125rem" }}
            >
              4.5/5 • And its completely free!
            </span>
          </div>
        </motion.div>

        {/* Right — animated before/after mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-amber-300/25 rounded-3xl blur-3xl -z-10 scale-90" />

          <div className="w-full max-w-sm relative">
            {/* "Screenshot" card (messy source) */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -left-6 top-4 w-52 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 z-10"
            >
              <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-2 bg-gray-100 rounded w-full mb-1" />
              <div className="h-2 bg-gray-100 rounded w-5/6 mb-1" />
              <div className="h-2 bg-amber-100 rounded w-2/3 mb-3" />
              <div className="h-16 bg-gray-100 rounded-xl mb-2" />
              <div className="h-2 bg-gray-100 rounded w-full mb-1" />
              <div className="h-2 bg-gray-100 rounded w-4/5 mb-1" />
              <div className="h-2 bg-gray-200 rounded w-3/4" />
              <div className="mt-3 flex gap-1">
                <div className="h-4 bg-blue-100 rounded w-16" />
                <div className="h-4 bg-gray-100 rounded w-10" />
              </div>
              <div
                className="absolute -top-2 -right-2 text-xs bg-gray-600 text-white px-2 py-0.5 rounded-full"
                style={{ fontSize: "0.65rem" }}
              >
                📸 Screenshot
              </div>
            </motion.div>

            {/* Clean vault card */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 4 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="ml-auto w-56 bg-white rounded-2xl shadow-xl border border-amber-100 p-4 relative z-10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🫓</span>
                <span
                  className="text-amber-900"
                  style={{ fontWeight: 700, fontSize: "0.875rem" }}
                >
                  Focaccia
                </span>
                <span
                  className="ml-auto text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full"
                  style={{ fontSize: "0.65rem", fontWeight: 600 }}
                >
                  Breads
                </span>
              </div>
              <p
                className="text-amber-600 mb-1.5"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                INGREDIENTS
              </p>
              {[
                "500g bread flour",
                "7g yeast",
                "Olive oil",
                "Sea salt",
                "Rosemary",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 mb-1">
                  <div className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  <span
                    className="text-amber-800"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
              <p
                className="text-amber-600 mt-2.5 mb-1"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                STEPS
              </p>
              {["Mix flour + yeast", "Knead 10 min", "Proof 2 hrs"].map(
                (s, i) => (
                  <div key={s} className="flex items-center gap-1.5 mb-1">
                    <div
                      className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0"
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "#92400e",
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="text-amber-800"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {s}
                    </span>
                  </div>
                ),
              )}
              <div
                className="absolute -top-2 -right-2 text-xs bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                ✅ Saved to vault
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
