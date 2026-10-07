import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [budget, setBudget] = useState(() => {
    return localStorage.getItem("budget") || "";
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  return (
    <>
      <Navbar />
      <div className="container">
       <Routes>
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <Dashboard
          expenses={expenses}
          budget={budget}
          onBudgetChange={setBudget}
        />
      </ProtectedRoute>
    }
  />
  <Route
    path="/expenses"
    element={
      <ProtectedRoute>
        <Expenses
          expenses={expenses}
          onAddExpense={addExpense}
          onDeleteExpense={deleteExpense}
        />
      </ProtectedRoute>
    }
  />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
      </div>
    </>
  );
}

export default App;