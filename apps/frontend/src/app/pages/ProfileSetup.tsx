import { ChefHat, Camera, CheckCircle2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { useState, useRef } from "react";

interface LocationState {
    source: "email" | "facebook";
    email?: string;
    displayName?: string;
    avatarUrl?: string;
}

export function ProfileSetup() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = (location.state as LocationState) ?? { source: "email" };

    const isFacebook = state.source === "facebook";

    const [displayName, setDisplayName] = useState(state.displayName ?? "");
    // const [avatarUrl, setAvatarUrl] = useState(state.avatarUrl ?? "");
    const [avatarPreview, setAvatarPreview] = useState(state.avatarUrl ?? "");
    const [nameError, setNameError] = useState("");
    const fileRef = useRef<HTMLInputElement>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setAvatarPreview(url);
        // setAvatarUrl(url);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!displayName.trim()) {
            setNameError("Please enter a display name.");
            return;
        }
        // In a real app, persist user data then redirect to dashboard
        navigate("/");
    }

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
                    {/* Step indicator */}
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-400/30 border border-amber-400/50 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-amber-400" />
                        </div>
                        <div className="w-12 h-px bg-amber-700/40" />
                        <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                            <span className="text-amber-900" style={{ fontSize: "0.7rem", fontWeight: 800 }}>2</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Card */}
            <div className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="w-full max-w-sm">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-amber-900 text-center" style={{ fontWeight: 800, fontSize: "1.625rem" }}>
                            {isFacebook ? "Looks good?" : "Set up your profile"}
                        </h1>
                        <p className="text-amber-700/60 mt-2 text-center" style={{ fontSize: "0.9375rem" }}>
                            {isFacebook
                                ? "We pulled your name and photo from Facebook. Feel free to change them — you can update these anytime."
                                : "Add a display name and photo so other cooks know who you are."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="rounded-2xl border border-amber-200 bg-white/70 p-7 flex flex-col gap-6">
                            {/* Avatar picker */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full border-4 border-amber-200 overflow-hidden bg-amber-100 flex items-center justify-center">
                                        {avatarPreview ? (
                                            <img src={avatarPreview} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <ChefHat size={36} className="text-amber-300" />
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => fileRef.current?.click()}
                                        className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-500 border-2 border-white flex items-center justify-center transition-colors"
                                    >
                                        <Camera size={14} className="text-amber-900" />
                                    </button>
                                </div>
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => fileRef.current?.click()}
                                    className="text-amber-600 hover:text-amber-800 transition-colors"
                                    style={{ fontSize: "0.85rem", fontWeight: 600 }}
                                >
                                    {avatarPreview ? "Change photo" : "Upload photo"}
                                </button>
                            </div>

                            {/* Display name */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="displayName" className="text-amber-900" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                    Display name
                                </label>
                                <input
                                    id="displayName"
                                    type="text"
                                    placeholder="e.g. Alex Johnson"
                                    value={displayName}
                                    onChange={e => { setDisplayName(e.target.value); setNameError(""); }}
                                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-amber-50/60 text-amber-900 placeholder-amber-300 focus:outline-none transition-colors ${
                                        nameError ? "border-red-300 focus:border-red-400" : "border-amber-200 focus:border-amber-400"
                                    }`}
                                    style={{ fontSize: "0.9375rem" }}
                                />
                                {nameError && (
                                    <p className="text-red-400" style={{ fontSize: "0.8rem" }}>{nameError}</p>
                                )}
                                <p className="text-amber-500/70" style={{ fontSize: "0.8rem" }}>
                                    This is how you'll appear to other users.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors"
                                style={{ fontWeight: 700, fontSize: "1rem" }}
                            >
                                Go to my vault →
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-amber-700/40 mt-5" style={{ fontSize: "0.8rem" }}>
                        You can always update your profile later in settings.
                    </p>
                </div>
            </div>
        </div>
    );
}
