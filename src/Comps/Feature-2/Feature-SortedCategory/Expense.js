import { useState } from "react";
import { SortedExpenseCategories } from "./SortedExpenseCategories";
import { StoredExpenses } from "./StoredExpenses";
import ExpenseList from '../Feature-List/ExpenseList';
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from '../Feature-Form/ExpenseFormHandler';
 

const Expense = () => {
// State 
    const [expenses, setExpenses] = useState([]);

    const selectedCategory = "";
// Event Handlers   
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
             
           
            <ExpenseFormHandler onAddExpense={onAddExpense} />
            <ExpenseList
                expenses={expenses}
                setExpenses={setExpenses}
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
            <StoredExpenses 
            expenses={expenses} 
            setExpenses={setExpenses} 
            />
        </div>
    );
};

export default Expense;
