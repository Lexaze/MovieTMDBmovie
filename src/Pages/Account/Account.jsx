import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import styles from "./Account.module.css";

function Account() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/signin" replace state={{ from: "/account" }} />;
  }

  const handleSignOut = () => {
    signOut();
    navigate("/signin", { replace: true });
  };

  return (
    <main className={styles.page}>
      <section className={styles.content} aria-labelledby="account-heading">
        <h1 id="account-heading">Account</h1>
        <div className={styles.panel}>
          <h2>Membership &amp; Billing</h2>
          <p>Signed in as <strong>{user.email}</strong></p>
          <p className={styles.note}>
            This is a demo account. Sign-in details are stored only in this browser.
          </p>
          <button className={styles.signOutButton} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </section>
    </main>
  );
}

export default Account;
