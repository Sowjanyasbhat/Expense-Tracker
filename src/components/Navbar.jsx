import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <span className="logo">💰 ExpenseTracker</span>
      {user && (
        <div className="nav-links">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/expenses">Expenses</NavLink>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;