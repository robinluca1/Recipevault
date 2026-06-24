import { motion } from "motion/react";
import { Clock, Heart, FolderOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

const groups = [
  { label: "All", count: 31 },
  { label: "Breads", count: 7 },
  { label: "Italian", count: 9 },
  { label: "Asian", count: 8 },
  { label: "Desserts", count: 7 },
];

const recipes = [
  {
    title: "Focaccia",
    group: "Breads",
    time: "3 hrs",
    likes: 12,
    img: "https://images.unsplash.com/photo-1657897410328-46e21dd4e7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob21lbWFkZSUyMGJyZWFkJTIwcGFzdGElMjBpdGFsaWFuJTIwa2l0Y2hlbnxlbnwxfHx8fDE3Nzc5OTAxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🫓",
    source: "📸 Scanned",
  },
  {
    title: "Seared Sea Bass",
    group: "Fish",
    time: "20 min",
    likes: 8,
    img: "https://images.unsplash.com/photo-1765265432611-17d3f2da2d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcmVjaXBlcyUyMGZvb2QlMjBkZWxpY2lvdXN8ZW58MXx8fHwxNzc3OTkwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🐟",
    source: "📸 Scanned",
  },
  {
    title: "Sunday Ragu",
    group: "Italian",
    time: "4 hrs",
    likes: 21,
    img: "https://images.unsplash.com/photo-1615196483149-f6ab06744895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb29raW5nJTIwcmVjaXBlcyUyMGZvb2QlMjBkZWxpY2lvdXN8ZW58MXx8fHwxNzc3OTkwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🍝",
    source: "📸 Scanned",
  },
];

export function RecipeShowcase() {
  return (
    <section className="py-24 px-6 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-600 rounded-full mb-3" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
            YOUR VAULT
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-amber-950" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800 }}>
              Everything, beautifully organised
            </h2>
          </div>

          {/* Group tabs */}
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            {groups.map((g, i) => (
              <button
                key={g.label}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl border transition-all ${
                  i === 0
                    ? "bg-amber-400 border-amber-400 text-amber-950"
                    : "bg-white border-amber-200 text-amber-700 hover:border-amber-300"
                }`}
                style={{ fontSize: "0.8125rem", fontWeight: 600 }}
              >
                <FolderOpen size={13} />
                {g.label}
                <span className={`px-1.5 py-0.5 rounded-md text-xs ${i === 0 ? "bg-amber-950/10" : "bg-amber-50 text-amber-500"}`}>
                  {g.count}
                </span>
              </button>
            ))}
            <button className="text-amber-600 hover:text-amber-500 transition-colors shrink-0 text-right last:grow" style={{ fontWeight: 600, fontSize: "0.9375rem" }}>
              Open  vault →
            </button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-amber-100 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1.5 transition-all duration-200 group"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full" style={{ fontSize: "0.7rem", fontWeight: 600, color: "#92400e" }}>
                  {r.emoji} {r.group}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-amber-400/90 backdrop-blur-sm rounded-full text-amber-950" style={{ fontSize: "0.65rem", fontWeight: 700 }}>
                  {r.source}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-amber-950 mb-3" style={{ fontSize: "1.0625rem", fontWeight: 700 }}>{r.title}</h3>
                <div className="flex items-center gap-4 text-amber-600/70" style={{ fontSize: "0.8125rem" }}>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {r.time}</span>
                  <span className="flex items-center gap-1.5 ml-auto">
                    <Heart size={13} className="fill-amber-300 text-amber-300" /> {r.likes} saves
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
