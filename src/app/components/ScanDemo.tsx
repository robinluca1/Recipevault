import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, Check, ChevronRight, Pencil } from "lucide-react";

const steps = ["Upload", "AI Scans", "Review & Save"];

const extractedIngredients = [
  { raw: "500g bread flour", ok: true },
  { raw: "7g instant yeast", ok: true },
  { raw: "325ml warm water", ok: true },
  { raw: "2 tbsp olive oil", ok: true },
  { raw: "1½ tsp fine salt", ok: true },
  { raw: "Fresh rosemary", ok: true },
];

const extractedSteps = [
  "Combine flour, yeast and salt in a large bowl.",
  "Add water and olive oil, mix into a shaggy dough.",
  "Knead for 10 minutes until smooth and elastic.",
  "Cover and prove for 2 hours until doubled.",
  "Press into an oiled tray, dimple and top with rosemary.",
  "Bake at 220°C for 20–25 minutes until golden.",
];

export function ScanDemo() {
  const [activeStep, setActiveStep] = useState(0);

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
            HOW IT WORKS
          </span>
          <h2 className="text-amber-950" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800 }}>
            Three steps to a clean recipe
          </h2>
          <p className="mt-3 text-amber-700/70 max-w-lg mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Click through to see exactly what happens when you drop a screenshot into Recipevault.
          </p>
        </motion.div>

        {/* Step tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {steps.map((s, i) => (
            <button
              key={s}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-200 ${
                activeStep === i
                  ? "bg-amber-400 border-amber-400 text-amber-950"
                  : "bg-white border-amber-200 text-amber-700 hover:border-amber-300"
              }`}
              style={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${activeStep === i ? "bg-amber-950/20" : "bg-amber-100"}`} style={{ fontWeight: 700 }}>
                {i + 1}
              </span>
              {s}
              {i < steps.length - 1 && <ChevronRight size={14} className="ml-1 opacity-40" />}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          {activeStep === 0 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-amber-950 mb-3" style={{ fontSize: "1.375rem", fontWeight: 800 }}>Upload your screenshot</h3>
                <p className="text-amber-700/70 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  Found a killer focaccia recipe on a food blog? Screenshot it — then drag it straight into Recipevault. We accept PNG, JPG, even PDFs. Any recipe, from anywhere.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Food blog screenshots", "Instagram or TikTok captures", "Cookbook page photos", "Recipe PDFs"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-amber-800" style={{ fontSize: "0.9rem" }}>
                      <Check size={15} className="text-amber-400 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Drop zone mockup */}
              <div className="bg-white border-2 border-dashed border-amber-300 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <Upload size={28} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-amber-900" style={{ fontWeight: 700 }}>Drop your screenshot here</p>
                  <p className="text-amber-500 mt-1" style={{ fontSize: "0.85rem" }}>or click to browse · PNG, JPG, PDF</p>
                </div>
                <button className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl transition-colors" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                  Choose file
                </button>
                <div className="w-full border-t border-amber-100 pt-4">
                  <div className="flex items-center gap-2 bg-amber-50 rounded-xl px-3 py-2">
                    <span className="text-lg">📄</span>
                    <span className="text-amber-700" style={{ fontSize: "0.8rem" }}>focaccia_recipe_screenshot.png</span>
                    <span className="ml-auto text-amber-400" style={{ fontSize: "0.75rem" }}>2.1 MB</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 1 && (
            <motion.div
              key="scan"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <h3 className="text-amber-950 mb-3" style={{ fontSize: "1.375rem", fontWeight: 800 }}>AI reads every detail</h3>
                <p className="text-amber-700/70 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  Our Tesseract OCR engine scans the image line by line, then our AI separates ingredients from instructions, cleans up formatting, and builds a structured recipe — all in a few seconds.
                </p>
                <div className="bg-amber-100/60 rounded-2xl px-5 py-4 border border-amber-200">
                  <p className="text-amber-800 mb-2" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.04em" }}>WHAT WE EXTRACT</p>
                  {["Ingredient names, quantities & units", "Step-by-step instructions in order", "Cook time & serving size (when visible)", "Recipe title from the page"].map((item) => (
                    <div key={item} className="flex items-start gap-2 mb-1.5">
                      <Check size={14} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-amber-800" style={{ fontSize: "0.875rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scanning animation */}
              <div className="bg-white rounded-3xl border border-amber-100 shadow-md p-6 relative overflow-hidden">
                {/* Scan line */}
                <motion.div
                  animate={{ top: ["10%", "90%", "10%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-amber-400/60 z-10"
                  style={{ position: "absolute" }}
                />
                <p className="text-amber-600 mb-3" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>SCANNING IMAGE…</p>
                <div className="space-y-2 mb-5">
                  {["Focaccia Bread", "Ingredients", "Instructions"].map((line, i) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="h-2.5 bg-amber-100 rounded"
                      style={{ width: i === 0 ? "55%" : i === 1 ? "35%" : "75%" }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: [0.1, 0.6, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 + i * 0.2 }}
                      className="h-2 bg-amber-50 rounded border border-amber-100"
                      style={{ width: `${65 + Math.sin(i) * 25}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-amber-600" style={{ fontSize: "0.8rem" }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-amber-300 border-t-amber-500 rounded-full"
                  />
                  Extracting ingredients & steps…
                </div>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <h3 className="text-amber-950 mb-3" style={{ fontSize: "1.375rem", fontWeight: 800 }}>Review, name & save</h3>
                <p className="text-amber-700/70 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  Check the AI draft — everything is editable before saving. Give the recipe a name, pick a group like <em>Breads</em> or <em>Italian</em>, and optionally attach a photo of your finished dish. Then it's in your vault forever.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "1. Review extracted content", icon: "🔍" },
                    { label: "2. Edit anything that's off", icon: <Pencil size={14} className="text-amber-500" /> },
                    { label: "3. Name it & choose a group", icon: "🗂️" },
                    { label: "4. Add a photo (optional)", icon: "📷" },
                    { label: "5. Save to vault ✅", icon: "🔐" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-amber-100">
                      <span className="text-base w-5 flex items-center justify-center shrink-0">{item.icon}</span>
                      <span className="text-amber-800" style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Draft recipe card */}
              <div className="bg-white rounded-3xl border border-amber-100 shadow-md p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-amber-50">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🫓</div>
                  <div className="flex-1">
                    <input
                      defaultValue="Focaccia"
                      className="bg-amber-50 border border-amber-200 rounded-lg px-2 py-1 text-amber-900 w-full outline-none focus:border-amber-400"
                      style={{ fontSize: "0.9rem", fontWeight: 700 }}
                    />
                  </div>
                  <select className="bg-amber-50 border border-amber-200 rounded-lg px-2 py-1 text-amber-700 outline-none text-xs" defaultValue="Breads">
                    <option>Breads</option>
                    <option>Italian</option>
                    <option>Soups</option>
                    <option>Asian</option>
                    <option>Desserts</option>
                  </select>
                </div>

                <p className="text-amber-600 mb-2" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>INGREDIENTS · AI EXTRACTED</p>
                <div className="space-y-1.5 mb-4">
                  {extractedIngredients.map((ing) => (
                    <div key={ing.raw} className="flex items-center gap-2">
                      <Check size={12} className="text-amber-400 shrink-0" />
                      <span className="text-amber-800" style={{ fontSize: "0.8rem" }}>{ing.raw}</span>
                    </div>
                  ))}
                </div>

                <p className="text-amber-600 mb-2" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>STEPS · AI EXTRACTED</p>
                <div className="space-y-1.5">
                  {extractedSteps.slice(0, 3).map((step, i) => (
                    <div key={step} className="flex items-start gap-2">
                      <span className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ fontSize: "0.6rem", fontWeight: 700, color: "#92400e" }}>
                        {i + 1}
                      </span>
                      <span className="text-amber-800" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{step}</span>
                    </div>
                  ))}
                  <p className="text-amber-400" style={{ fontSize: "0.75rem" }}>+3 more steps…</p>
                </div>

                <button className="w-full mt-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl transition-colors" style={{ fontWeight: 700, fontSize: "0.875rem" }}>
                  Save to my vault 🔐
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
