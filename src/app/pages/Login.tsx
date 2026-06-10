import { ChefHat } from "lucide-react";
import { Link } from "react-router";

export function Login() {
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
              Recipevault
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

            {/* Card */}
            <div className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="w-full max-w-sm">
                    {/* Logo mark */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center mb-4">
                            <ChefHat size={28} className="text-amber-900" />
                        </div>
                        <h1 className="text-amber-900" style={{ fontWeight: 800, fontSize: "1.625rem" }}>
                            Welcome back!
                        </h1>
                        <p className="text-amber-700/60 mt-1" style={{ fontSize: "0.9375rem" }}>
                            Sign in to your vault
                        </p>
                    </div>

                    {/* Form card */}
                    <div className="rounded-2xl border border-amber-200 bg-white/70 p-7 flex flex-col gap-5">
                        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-amber-900" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 bg-amber-50/60 text-amber-900 placeholder-amber-300 focus:outline-none focus:border-amber-400 transition-colors"
                                    style={{ fontSize: "0.9375rem" }}
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-amber-900" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                        Password
                                    </label>
                                    <a
                                        href="#"
                                        className="text-amber-600 hover:text-amber-700 transition-colors"
                                        style={{ fontSize: "0.825rem" }}
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 bg-amber-50/60 text-amber-900 placeholder-amber-300 focus:outline-none focus:border-amber-400 transition-colors"
                                    style={{ fontSize: "0.9375rem" }}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors mt-1"
                                style={{ fontWeight: 700, fontSize: "1rem" }}
                            >
                                Log in
                            </button>
                        </form>

                        <p className="text-center text-amber-700/60" style={{ fontSize: "0.875rem" }}>
                            Don't have an account?{" "}
                            <Link to="/get-started" className="text-amber-700 hover:text-amber-900 underline underline-offset-2 transition-colors" style={{ fontWeight: 600 }}>
                                Sign up free
                            </Link>
                        </p>
                    </div>

                    {/* Legal */}
                    <p className="text-center text-amber-700/40 mt-6 px-4" style={{ fontSize: "0.8rem" }}>
                        By signing in, you agree to our{" "}
                        <a href="#" className="underline underline-offset-2 hover:text-amber-700/60 transition-colors">Terms of Service</a>
                        {" "}and{" "}
                        <a href="#" className="underline underline-offset-2 hover:text-amber-700/60 transition-colors">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
