import { ChefHat } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function passwordStrength(pw: string): {
  label: string;
  color: string;
  width: string;
} {
  if (pw.length === 0)
    return { label: "", color: "bg-amber-100", width: "w-0" };
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSpecial = /[^A-Za-z0-9]/.test(pw);
  const score = [pw.length >= 8, hasUpper, hasNumber, hasSpecial].filter(
    Boolean,
  ).length;

  if (score <= 1) return { label: "Weak", color: "bg-red-400", width: "w-1/4" };
  if (score === 2)
    return { label: "Fair", color: "bg-amber-400", width: "w-2/4" };
  if (score === 3)
    return { label: "Good", color: "bg-lime-400", width: "w-3/4" };
  return { label: "Strong", color: "bg-green-500", width: "w-full" };
}

function validate(email: string, password: string) {
  const errors: { email?: string; password?: string } = {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Include at least one uppercase letter.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Include at least one number.";
  }
  return errors;
}

export function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [touched, setTouched] = useState<{
    email?: boolean;
    password?: boolean;
  }>({});

  const strength = passwordStrength(password);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate(email, password);
    setErrors(errs);
    setTouched({ email: true, password: true });

    if (Object.keys(errs).length > 0) {
      return;
    }

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:3000/api";

      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({
          email: data.error || "Something went wrong during registration.",
        });
        return;
      }

      navigate("/profile-setup", {
        state: {
          email,
          source: "email",
          userId: data.user?.[0]?.id,
        },
      });
    } catch (error) {
      console.error("Network error during sign up:", error);
      setErrors({
        email: "Unable to connect to the server. Please try again later.",
      });
    }
  }

  function handleFacebook() {
    navigate("/profile-setup", {
      state: {
        source: "facebook",
        displayName: "Alex Johnson",
        avatarUrl: "https://pravatar.cc",
        email: "",
      },
    });
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#fffbeb" }}
    >
      <nav
        className="border-b border-amber-900/40"
        style={{ background: "#461901" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center">
              <ChefHat size={18} className="text-amber-900" />
            </div>
            <span
              className="text-amber-50"
              style={{ fontWeight: 700, fontSize: "1.125rem" }}
            >
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

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center mb-4">
              <ChefHat size={28} className="text-amber-900" />
            </div>
            <h1
              className="text-amber-900"
              style={{ fontWeight: 800, fontSize: "1.625rem" }}
            >
              Create your account
            </h1>
            <p
              className="text-amber-700/60 mt-1"
              style={{ fontSize: "0.9375rem" }}
            >
              Free forever. No credit card needed.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white/70 p-7 flex flex-col gap-5">
            <button
              type="button"
              onClick={handleFacebook}
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border border-[#1877F2]/30 bg-[#1877F2] hover:bg-[#1664d8] text-white transition-colors"
              style={{ fontWeight: 600, fontSize: "0.9375rem" }}
            >
              <FacebookIcon />
              Continue with Facebook
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-amber-100" />
              <span className="text-amber-400" style={{ fontSize: "0.8rem" }}>
                or
              </span>
              <div className="flex-1 h-px bg-amber-100" />
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-amber-900"
                  style={{ fontSize: "0.9rem", fontWeight: 600 }}
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) {
                      setErrors(validate(e.target.value, password));
                    }
                  }}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, email: true }));
                    setErrors(validate(email, password));
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-amber-50/60 text-amber-900 placeholder-amber-300 focus:outline-none transition-colors ${
                    touched.email && errors.email
                      ? "border-red-300 focus:border-red-400"
                      : "border-amber-200 focus:border-amber-400"
                  }`}
                  style={{ fontSize: "0.9375rem" }}
                />
                {touched.email && errors.email && (
                  <p className="text-red-400" style={{ fontSize: "0.8rem" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-amber-900"
                  style={{ fontSize: "0.9rem", fontWeight: 600 }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Min. 8 chars, 1 uppercase, 1 number"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => {
                    setTouched((t) => ({ ...t, password: true }));
                    setErrors((errs) => ({
                      ...errs,
                      ...validate(email, password),
                    }));
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-amber-50/60 text-amber-900 placeholder-amber-300 focus:outline-none transition-colors ${
                    touched.password && errors.password
                      ? "border-red-300 focus:border-red-400"
                      : "border-amber-200 focus:border-amber-400"
                  }`}
                  style={{ fontSize: "0.9375rem" }}
                />
                {password.length > 0 && (
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex-1 h-1.5 rounded-full bg-amber-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                      />
                    </div>
                    <span
                      className="text-amber-600/70 shrink-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {strength.label}
                    </span>
                  </div>
                )}
                {/* checklist */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-1">
                  {[
                    { label: "8+ characters", met: password.length >= 8 },
                    { label: "Uppercase letter", met: /[A-Z]/.test(password) },
                    { label: "Number", met: /[0-9]/.test(password) },
                    {
                      label: "Special character",
                      met: /[^A-Za-z0-9]/.test(password),
                    },
                  ].map(({ label, met }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${met ? "bg-green-500" : "bg-amber-100"}`}
                      >
                        {met && (
                          <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                          >
                            <path
                              d="M1 3.5L3.5 6L8 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`transition-colors duration-200 ${met ? "text-green-600" : "text-amber-400/70"}`}
                        style={{ fontSize: "0.78rem" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-xl transition-colors mt-1"
                style={{ fontWeight: 700, fontSize: "1rem" }}
              >
                Create free account
              </button>
            </form>

            <p
              className="text-center text-amber-700/60"
              style={{ fontSize: "0.875rem" }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-700 hover:text-amber-900 underline underline-offset-2 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Sign in
              </Link>
            </p>
          </div>

          <p
            className="text-center text-amber-700/40 mt-6 px-4"
            style={{ fontSize: "0.8rem" }}
          >
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-amber-700/60 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-amber-700/60 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
