import Filter from "./Filter";
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from "./ExpenseSummary";
import { useState } from "react";

 
  


const Expense = () => {
    const [ expenses, setExpenses ] = useState([]);
    const [ expenseTitle, setExpenseTitle ] = useState("");
    const [ expenseDescription, setExpenseDescription ] = useState("");
    const [ expenseAmount, setExpenseAmount ] = useState("");
    const [ expenseDate, setExpenseDate ] = useState("");
    const [ expenseCategory, setExpenseCategory ] = useState("");
    const [ selectedCategory, setSelectedCategory ] = useState("");
    const [ errors, setErrors ] = useState({
        title: "",
        description: "",
        amount: "",
        date: "",
        category: ""
        });
    
    /**Filter Functions*/
 const groupedExpenses = expenses.reduce((acc, expense) => {
    return {
     ...acc,
     [expense.category]: [...(acc[expense.category] || []), expense],
    };
 }, {});  
  
 const validCategories = [ "Bills", "Auto Parts", "Groceries" ];
    
 function sortByCategory(selectedCategory) {
    setSelectedCategory(selectedCategory);
 }

    /**Filter Functions*/

       
        /*onDelete is a filter function that deletes and ExpenseItem from the expenses array if called*/ 
    const onDelete = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
          
        }
    /*These are state setter functions for the ExpenseForm*/
    function updateExpenseCategory(value) {
        setExpenseCategory(value);
    }
    
    function updateExpenseTitle(value) {
            setExpenseTitle(value);
    }
    
    function updateExpenseDescription(value) {
         setExpenseDescription(value);
    }
     
    function updateExpenseAmount(value) {
         setExpenseAmount(value);
    }
    
    function updateExpenseDate(value) {
         setExpenseDate(value);
    }
    
     /**handleFormSubmit is the Submit function that Submits form data as an ExpenseItem and adds it to the expense array*/
    function handleFormSubmit(event) {
        event.preventDefault();
         
        /**newErrors is an object that checkes all the form elements for submission errors*/
         let newErrors = { title: "", description: "", amount: "", date: "", category: "" };
 
         if ( expenseTitle === "" ) {
            newErrors.title = "PLEASE ENTER A TITLE";
         }
         
         if ( expenseDescription === "") {
            newErrors.description = "PLEASE ENTER A DESCRIPTION";
         }

         if ( expenseAmount === "" || isNaN(expenseAmount)) {
            newErrors.amount = "PLEASE ENTER A NUMBER";
         }

         if ( expenseDate === "") {
            newErrors.date = "PLEASE ENTER A DATE";
         }

         
         if ( newErrors.title || newErrors.description || newErrors.amount || newErrors.date) {
               setErrors(newErrors); 
               return;
         }
        /**expenseId uses Date.now to create a new timestamp as an id for the individual expenseItem in the expenses array*/
        let expenseId = Date.now();
        /** setExpenses is adding first all the previous or current expenses with the spread operator. Then a new expense object is being appended with key prop values for reference*/
        setExpenses([ 
            ...expenses,
            { title: expenseTitle, 
              description: expenseDescription, 
              amount: expenseAmount,
              date: expenseDate,
              id: expenseId,
              category: expenseCategory
        }]); 
        /**The setter functions for all the current form functions that are being called to reset the state back to an empty string.*/
        setExpenseTitle("");
        setExpenseDescription("");
        setExpenseAmount("");
        setExpenseDate("");
        setExpenseCategory("");
        setErrors({ title: "", description: "", amount: "", date: "", category: "" });
             
    }

     
   
        

    return (
        <div>
          <p>Expense (child 2)</p>
          <p>Wrapper for expense-related components</p>
         <ExpenseForm
             expenseTitle={expenseTitle}
             updateExpenseTitle={updateExpenseTitle}
             expenseDescription={expenseDescription}
             updateExpenseDescription={updateExpenseDescription}
             expenseAmount={expenseAmount} 
             updateExpenseAmount={updateExpenseAmount}
             expenseDate={expenseDate}
             updateExpenseDate={updateExpenseDate}
             expenseCategory={expenseCategory}
             updateExpenseCategory={updateExpenseCategory}
             handleFormSubmit={handleFormSubmit}
             errors={errors}
         />
           
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

 