import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import styles from "./SignIn.module.css";

function SignIn() {
  const { user, signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/account" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setError("Enter your email address to continue.");
      return;
    }

    signIn(email);
    navigate(location.state?.from || "/account", { replace: true });
  };

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="signin-heading">
        <h1 id="signin-heading">Sign In</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter any password"
            autoComplete="current-password"
            required
          />

          {error && <p className={styles.error} role="alert">{error}</p>}
          <button type="submit" className={styles.submitButton}>Sign In</button>
        </form>
        <p className={styles.demoNote}>
          Demo sign-in only. Your email is saved in this browser; no password is stored or verified.
        </p>
        <p className={styles.backLink}>
          New here? <Link to="/">Explore Netflix</Link>
        </p>
      </section>
    </main>
  );
}

export default SignIn;
