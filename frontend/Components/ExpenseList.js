const ExpenseList = ({ expenses, fetchExpenses }) => {
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.title} - ₹{expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;