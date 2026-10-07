import Budget from "../components/Budget";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard({ expenses, budget, onBudgetChange }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthSpent = expenses
    .filter((e) => e.date.startsWith(currentMonth))
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <div className="total-card">
        <p>Total Spent</p>
        <h2>₹{total}</h2>
      </div>
      <Budget
        budget={budget}
        onBudgetChange={onBudgetChange}
        spent={monthSpent}
      />
      <ExpenseChart expenses={expenses} />
    </>
  );
}

export default Dashboard;