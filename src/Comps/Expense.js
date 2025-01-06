import Filter from "./Filter";
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useState } from "react";

 
  


const Expense = () => {
    const [ expenses, setExpenses ] = useState([]);
    const [ expenseAmount, setExpenseAmount ] = useState("");
    const [ expenseDescription, setExpenseDescription ] = useState("");
    const [ expenseDate, setExpenseDate ] = useState("");

    function updateExpenseDescription(value) {
        setExpenseDescription(value);
     }
    
     function updateExpenseAmount(value) {
        setExpenseAmount(value);
         
    }
    
    function updateExpenseDate(value) {
        setExpenseDate(value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setExpenses([{ 
            ...expenses,
            expenseDescription, 
            expenseAmount,
            expenseDate 
        }]);
        setExpenseDescription("");
        setExpenseAmount("");
        setExpenseDate("");
             
    }

     
   
     

    return (
        <div>
          <p>Expense (child 2)</p>
          <p>Wrapper for expense-related components</p>
          <Filter />
          <ExpenseForm
             expenseDescription={expenseDescription}
             updateExpenseDescription={updateExpenseDescription}
             expenseAmount={expenseAmount} 
             updateExpenseAmount={updateExpenseAmount}
             expenseDate={expenseDate}
             updateExpenseDate={updateExpenseDate}
             handleFormSubmit={handleFormSubmit}
         />
          <ExpenseList  expenses={expenses} />
        </div>
    );
};

export default Expense;