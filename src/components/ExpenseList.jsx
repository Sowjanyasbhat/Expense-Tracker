function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses yet. Add your first one above.</p>;
  }

  return (
    <ul>
      {expenses.map((e) => (
        <li key={e.id}>
          {e.title} - ₹{e.amount} - {e.category} - {e.date}{" "}
          <button onClick={() => onDeleteExpense(e.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;