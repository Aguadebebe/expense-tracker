import Filter from "./Filter";
import ExpenseList from './Feature-4/ExpenseList';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from './Feature-3/ExpenseFormHandler';
import { useState } from "react";

const Expense = () => {
    const [expenses, setExpenses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const validCategories = ["Bills", "Auto Parts", "Groceries"];

    const groupedExpenses = expenses.reduce((acc, expense) => {
        return {
            ...acc,
            [expense.category]: [...(acc[expense.category] || []), expense],
        };
    }, {});

    const onAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
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
            <Filter
                selectedCategory={selectedCategory}
                sortByCategory={sortByCategory}
                validCategories={validCategories}
                groupedExpenses={groupedExpenses}
            />
        </div>
    );
};

export default Expense;
