function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses yet. Add your first one above.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((e) => (
        <li key={e.id} className="expense-item">
          <div>
            <div className="expense-title">{e.title}</div>
            <div className="expense-meta">
              {e.category} • {e.date}
            </div>
          </div>
          <div className="expense-right">
            <span className="expense-amount">₹{e.amount}</span>
            <button className="delete-btn" onClick={() => onDeleteExpense(e.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;