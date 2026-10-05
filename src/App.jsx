import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

 return (
  <div className="container">
    <h1>Expense Tracker</h1>
    <div className="total-card">
      <p>Total Spent</p>
      <h2>₹{total}</h2>
    </div>
    <ExpenseForm onAddExpense={addExpense} />
    <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
  </div>
);
}

export default App;