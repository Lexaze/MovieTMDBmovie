import { useState } from "react";
import AuthContext from "./AuthContext";

const STORAGE_KEY = "netfl-demo-user";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const email = window.localStorage.getItem(STORAGE_KEY);
    return email ? { email } : null;
  });

  const signIn = (email) => {
    window.localStorage.setItem(STORAGE_KEY, email);
    setUser({ email });
  };

  const signOut = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
