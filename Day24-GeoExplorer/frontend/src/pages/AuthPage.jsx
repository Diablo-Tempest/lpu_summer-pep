import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import CompassMark from "../components/CompassMark.jsx";
import "../styles/auth.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const isSignup = mode === "signup";

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (isSignup) {
        await signup(form.name.trim(), form.email.trim(), form.password);
      } else {
        await login(form.email.trim(), form.password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-shell">
      <section className="auth-brand">
        <div className="auth-brand-top">
          <span className="auth-logo-dot" />
          <span className="mono" style={{ fontSize: 13, letterSpacing: "0.08em" }}>
            GEOEXPLORER
          </span>
        </div>

        <div className="auth-compass-wrap">
          <CompassMark size={260} />
        </div>

        <div className="auth-brand-copy">
          <p className="auth-eyebrow">Wherever you are</p>
          <h1 className="auth-headline">Discover nearby places around you.</h1>
          <p className="auth-subcopy">
            Point GeoExplorer at your current location and it finds restaurants, hospitals, ATMs,
            parks, and cafes within reach — plotted on a live map, sourced from OpenStreetMap.
          </p>
          <div className="auth-tag-list">
            <span className="auth-tag">Restaurants</span>
            <span className="auth-tag">Hospitals</span>
            <span className="auth-tag">ATMs</span>
            <span className="auth-tag">Parks</span>
            <span className="auth-tag">Cafes</span>
          </div>
        </div>
      </section>

      <section className="auth-form-side">
        <div className="auth-card">
          <h2>{isSignup ? "Create your account" : "Welcome back"}</h2>
          <p className="auth-switch-copy">
            {isSignup ? "Already exploring with us? " : "New to GeoExplorer? "}
            <button type="button" onClick={() => setMode(isSignup ? "login" : "signup")}>
              {isSignup ? "Log in" : "Sign up"}
            </button>
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Jordan Rivera"
                  autoComplete="name"
                />
              </div>
            )}

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={form.password}
                onChange={(e) => updateField("password", e.target.value)}
                placeholder="At least 6 characters"
                autoComplete={isSignup ? "new-password" : "current-password"}
              />
            </div>

            <button className="auth-submit" type="submit" disabled={submitting}>
              {submitting ? "Please wait…" : isSignup ? "Create account" : "Log in"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
