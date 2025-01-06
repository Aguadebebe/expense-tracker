import Filter from "./Filter";
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useState } from "react";

 
  


const Expense = () => {
    const [ expenses, setExpenses ] = useState([]);
    const [ expenseAmount, setExpenseAmount ] = useState("");
    const [ expenseDescription, setExpenseDescription ] = useState("");
    const [ expenseDate, setExpenseDate ] = useState("");
    const [ errors, setErrors ] = useState({
        description: "",
        amount: "",
        date: ""
        });
    
    

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

         let newErrors = { description: "", amount: "", date: "" };
         
         if ( expenseDescription === "") {
            newErrors.description = "Please enter a description";
         }

         if ( expenseAmount === "" || isNaN(expenseAmount)) {
            newErrors.amount = "Please enter a number";
         }

         if ( expenseDate === "") {
            newErrors.date = "Please enter a date";
         }

         if ( newErrors.description || newErrors.amount || newErrors.date) {
               setErrors(newErrors); 
               return;
         }


        let expenseId = Date.now();
        setExpenses([ 
            ...expenses,
            { expenseDescription, 
            expenseAmount,
            expenseDate,
            expenseId
        }]);
        setExpenseDescription("");
        setExpenseAmount("");
        setExpenseDate("");
        setErrors({ description: "", amount: "", date: ""});
             
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
             errors={errors}
             setErrors={setErrors}
         />
          <ExpenseList  
             expenses={expenses}

         />
        </div>
    );
};

export default Expense;