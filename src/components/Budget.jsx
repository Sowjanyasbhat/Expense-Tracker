function Budget({ budget, onBudgetChange, spent }) {
  const percent = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
  const isOver = budget > 0 && spent > budget;
  const isNear = budget > 0 && !isOver && spent >= budget * 0.8;

  return (
    <div className="budget-card">
      <h3>Monthly Budget</h3>
      <input
        type="number"
        placeholder="Set your monthly budget"
        value={budget}
        onChange={(e) => onBudgetChange(e.target.value)}
      />

      {budget > 0 && (
        <>
          <div className="progress">
            <div
              className={`progress-bar ${isOver ? "over" : isNear ? "near" : ""}`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="budget-text">
            ₹{spent} spent of ₹{budget}
          </p>
          {isOver && (
            <p className="warning">
              You have exceeded your budget by ₹{spent - budget}!
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