import { ChefHat, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Features", "How it works", "Recipes", "Testimonials"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-amber-900/40"
      style={{ background: "#461901" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center">
            <ChefHat size={18} className="text-amber-900" />
          </div>
          <span
            className="text-amber-50"
            style={{ fontWeight: 700, fontSize: "1.125rem" }}
          >
            RecipeVault
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-amber-200/80 hover:text-amber-100 transition-colors"
              style={{ fontSize: "0.9375rem" }}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-amber-200/80 hover:text-amber-100 transition-colors"
            style={{ fontSize: "0.9375rem" }}
          >
            Log in
          </Link>
          <Link
            to="/onboarding"
            className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors"
            style={{ fontSize: "0.9375rem", fontWeight: 600 }}
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden text-amber-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-amber-900/40 overflow-hidden"
            style={{ background: "#461901" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-amber-200/80 hover:text-amber-100 transition-colors"
                >
                  {l}
                </a>
              ))}
              <button
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors"
                style={{ fontWeight: 600 }}
              >
                Get started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
