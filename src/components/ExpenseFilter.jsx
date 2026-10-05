function ExpenseFilter({ selected, onChange }) {
  return (
    <div className="expense-filter">
      <label>Filter by category: </label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;