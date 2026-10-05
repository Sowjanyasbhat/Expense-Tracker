import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

 const filteredExpenses =
  filter === "All"
    ? expenses
    : expenses.filter((e) => e.category === filter);

const total = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

return (
  <div className="container">
    <h1>Expense Tracker</h1>
    <div className="total-card">
      <p>{filter === "All" ? "Total Spent" : `Total Spent on ${filter}`}</p>
      <h2>₹{total}</h2>
    </div>
    <ExpenseForm onAddExpense={addExpense} />
    <ExpenseFilter selected={filter} onChange={setFilter} />
    <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
  </div>
);
}

export default App;