import { ChefHat, Upload, Sparkles, FolderOpen, Pencil } from "lucide-react";
import { Link } from "react-router";

const steps = [
    {
        icon: Upload,
        step: "1",
        title: "Upload a screenshot",
        desc: "Snap or save any recipe from the web.",
        note: "Supported formats: PNG, JPEG, PDF",
    },
    {
        icon: Sparkles,
        step: "2",
        title: "AI extracts the recipe",
        desc: "Tesseract OCR pulls out ingredients and steps automatically.",
        note: null,
    },
    {
        icon: Pencil,
        step: "3",
        title: "Review & edit the draft",
        desc: "Check the extracted content and tweak anything before saving.",
        note: null,
    },
    {
        icon: FolderOpen,
        step: "4",
        title: "Save to your vault",
        desc: "Name it, add a photo, and organize into groups.",
        note: null,
    },
];

export function Onboarding() {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#fffbeb" }}>
            {/* Navbar */}
            <nav className="border-b border-amber-900/40" style={{ background: "#461901" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center">
                            <ChefHat size={18} className="text-amber-900" />
                        </div>
                        <span className="text-amber-50" style={{ fontWeight: 700, fontSize: "1.125rem" }}>
              RecipeVault
            </span>
                    </Link>
                    <Link
                        to="/"
                        className="text-amber-200/80 hover:text-amber-100 transition-colors"
                        style={{ fontSize: "0.9375rem" }}
                    >
                        ← Back to home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
                <div className="max-w-xl w-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center mx-auto mb-6">
                        <ChefHat size={32} className="text-amber-900" />
                    </div>

                    <h1 className="text-amber-900 mb-3" style={{ fontWeight: 800, fontSize: "2rem" }}>
                        Welcome to RecipeVault
                    </h1>
                    <p className="text-amber-800/70 mb-10" style={{ fontSize: "1.0625rem" }}>
                        Create your free account and start building your personal recipe collection in minutes.
                    </p>

                    {/* Steps */}
                    <div className="grid gap-4 mb-10 text-left">
                        {steps.map(({ icon: Icon, step, title, desc, note }) => (
                            <div
                                key={step}
                                className="flex items-start gap-4 p-4 rounded-2xl border border-amber-200 bg-white/60"
                            >
                                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon size={18} className="text-amber-700" />
                                </div>
                                <div>
                                    <p className="text-amber-900" style={{ fontWeight: 600 }}>{title}</p>
                                    <p className="text-amber-700/70" style={{ fontSize: "0.9rem" }}>{desc}</p>
                                    {note && (
                                        <p className="mt-1 text-gray-400" style={{ fontSize: "0.8rem" }}>{note}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Auth options */}
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/signup"
                            className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors"
                            style={{ fontWeight: 700, fontSize: "1rem" }}
                        >
                            Create free account
                        </Link>
                        <Link to="/login" className="w-full py-3 border border-amber-300 hover:border-amber-400 text-amber-800 rounded-xl transition-colors bg-white/60"
                            style={{ fontWeight: 600, fontSize: "1rem" }}
                        >
                            Sign in to existing account
                        </Link>
                    </div>

                    <p className="text-amber-700/50 mt-6" style={{ fontSize: "0.85rem" }}>
                        Free forever. No credit card required.
                    </p>
                </div>
            </div>
        </div>
    );
}
