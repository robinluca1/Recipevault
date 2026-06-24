import { ChefHat } from "lucide-react";
import parentLogo from "@/imports/parentimg.svg"

const cols = [
  { heading: "Product", links: ["Features", "How it works", "Recipes", "Testimonials"] },
  { heading: "Support", links: ["Help centre", "Contact"] },
];

export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-200/70 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center">
                <ChefHat size={16} className="text-amber-950" />
              </div>
              <span className="text-amber-50" style={{ fontWeight: 700, fontSize: "1.0625rem" }}>RecipeVault</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
              Your personal recipe vault, built for the love of cooking.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.heading}>
              <p className="text-amber-200 mb-4" style={{ fontWeight: 600, fontSize: "0.875rem" }}>{c.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-200 transition-colors" style={{ fontSize: "0.875rem" }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-amber-800/60 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <p style={{ fontSize: "0.8125rem" }}>Powered by</p>
            <img src={parentLogo} alt="Parent Company" className="h-20 opacity-80" />
          </div>
          <p style={{ fontSize: "0.8125rem" }}>© 2026 RecipeVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
