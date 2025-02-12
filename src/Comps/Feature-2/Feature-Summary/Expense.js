import { SortedExpenseCategories } from "../Feature-SortedCategory/SortedExpenseCategories";
import ExpenseList from '../Feature-List/ExpenseList';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from '../Feature-Form/ExpenseFormHandler';
import { useState } from "react";

const Expense = () => {
    const [expenses, setExpenses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const onAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
        console.log([...expenses]);
        console.log([...expenses, newExpense]);
    };

    const onDelete = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    function sortByCategory(selectedCategory) {
        setSelectedCategory(selectedCategory);
    }

    return (
        <div>
            <p>Expense (child 2)</p>
            <p>Wrapper for expense-related components</p>

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
                sortByCategory={sortByCategory}
                expenses={expenses}
                selectedCategory={selectedCategory}
            />
        </div>
    );
};

export default Expense;
