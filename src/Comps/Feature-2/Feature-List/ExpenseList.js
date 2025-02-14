import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, setExpenses,  onDelete }) => {
    return (
      <>
        <h2>Expense Item List -</h2>
        <div className="item-list-border"> 
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
          ))}
        </ul>
        </div>
      </>
    );
};

export default ExpenseList;