import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseFilter from "../components/ExpenseFilter";
import ExpenseList from "../components/ExpenseList";

function Expenses({ expenses, onAddExpense, onDeleteExpense }) {
  const [filter, setFilter] = useState("All");

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  const total = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <ExpenseForm onAddExpense={onAddExpense} />
      <ExpenseFilter selected={filter} onChange={setFilter} />
      <p className="filter-total">
        {filter === "All" ? "Total" : `Total for ${filter}`}: ₹{total}
      </p>
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={onDeleteExpense}
      />
    </>
  );
}

export default Expenses;