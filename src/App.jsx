import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />

      {expenses.map((e) => (
        <p key={e.id}>
          {e.title} - ₹{e.amount} - {e.category} - {e.date}
        </p>
      ))}
    </div>
  );
}

export default App;