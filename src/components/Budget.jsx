function Budget({ budget, onBudgetChange, spent }) {
  const limit = Number(budget);
  const percent = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
  const isOver = limit > 0 && spent > limit;
  const isNear = limit > 0 && !isOver && spent >= limit * 0.8;

  return (
    <div className="budget-card">
      <h3>Monthly Budget</h3>
      <input
        type="number"
        placeholder="Set your monthly budget"
        value={budget}
        onChange={(e) => onBudgetChange(e.target.value)}
      />

      {limit > 0 && (
        <>
          <div className="progress">
            <div
              className={`progress-bar ${isOver ? "over" : isNear ? "near" : ""}`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="budget-text">
            ₹{spent} spent of ₹{limit}
          </p>
          {isOver && (
            <p className="warning">
              You have exceeded your budget by ₹{spent - limit}!
            </p>
          )}
          {isNear && (
            <p className="caution">You have used over 80% of your budget.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Budget;