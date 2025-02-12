import { SortedExpenseCategories } from "./SortedExpenseCategories";
import ExpenseList from '../Feature-List/ExpenseList';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from '../Feature-Form/ExpenseFormHandler';
import { useState } from "react";

const Expense = () => {
    const [expenses, setExpenses] = useState([]);

    const selectedCategory = "";

    const onAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
        console.log([...expenses]);
        console.log([...expenses, newExpense]);
    };

    const onDelete = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <h2>Expense Form -</h2>
           
            <ExpenseFormHandler onAddExpense={onAddExpense} />
            <ExpenseList
                expenses={expenses}
                onDelete={onDelete}
            />
            <ExpenseSummary
                expenses={expenses}
                onDelete={onDelete}
            />
            <SortedExpenseCategories
                expenses={expenses}
                selectedCategory={selectedCategory}
            />
        </div>
    );
};

export default Expense;
