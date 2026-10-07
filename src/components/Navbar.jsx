import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">💰 ExpenseTracker</span>
      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;