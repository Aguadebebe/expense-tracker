import { useState } from "react";
import { SortedExpenseCategories } from "./SortedExpenseCategories";
import { StoredExpenses } from "./StoredExpenses";
import ExpenseList from "../Feature-List/ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from "../Feature-Form/ExpenseFormHandler";

const Expense = () => {
  // State
  const [expenses, setExpenses] = useState([]);

  const selectedCategory = "";
  // Event Handlers

  const onDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseFormHandler expenses={expenses} setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} onDelete={onDelete} />
      <ExpenseSummary expenses={expenses} />
      <SortedExpenseCategories expenses={expenses} selectedCategory={selectedCategory} />
      <StoredExpenses expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default Expense;

// this is composing all of the child components together with the expenses state, selectedCategory value, and onDelete function.
