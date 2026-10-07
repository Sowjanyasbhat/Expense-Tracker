import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  function startSession(email) {
    const u = { email };
    localStorage.setItem("currentUser", JSON.stringify(u));
    setUser(u);
  }

  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === email)) {
      throw new Error("An account with this email already exists.");
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    startSession(email);
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid email or password.");
    startSession(email);
  }

  function logout() {
    localStorage.removeItem("currentUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}