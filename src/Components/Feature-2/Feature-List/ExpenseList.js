import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <>
      <h2>Expense Item List -</h2>
      <div className="expense-container border p-3 bg-light">
        <ul className="list-group overflow-auto">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} className="list-group-item" />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;

// This returns a list of expense items in a column below the form.
