import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseChart from "./components/ExpenseChart";
import Budget from "./components/Budget";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");
  const [budget, setBudget] = useState(() => {
  return localStorage.getItem("budget") || "";
});

useEffect(() => {
  localStorage.setItem("budget", budget);
}, [budget]);

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
const currentMonth = new Date().toISOString().slice(0, 7); // e.g. "2026-10"

const monthSpent = expenses
  .filter((e) => e.date.startsWith(currentMonth))
  .reduce((sum, e) => sum + e.amount, 0);
return (
  <div className="container">
    <h1>Expense Tracker</h1>
<div className="total-card">
  <p>{filter === "All" ? "Total Spent" : `Total Spent on ${filter}`}</p>
  <h2>₹{total}</h2>
</div>
<Budget
  budget={budget}
  onBudgetChange={setBudget}
  spent={monthSpent}
/>
<ExpenseForm onAddExpense={addExpense} />
<ExpenseChart expenses={expenses} />
<ExpenseFilter selected={filter} onChange={setFilter} />
    <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
  </div>
);
}

export default App;