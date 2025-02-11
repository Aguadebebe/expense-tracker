
 import ExpenseForm from './ExpenseForm';
 import { useState } from 'react';
 
 const ExpenseFormHandler = ({ onAddExpense }, text) => {
     const [expenseTitle, setExpenseTitle] = useState("");
     const [expenseDescription, setExpenseDescription] = useState("");
     const [expenseAmount, setExpenseAmount] = useState("");
     const [expenseDate, setExpenseDate] = useState("");
     const [expenseCategory, setExpenseCategory] = useState("");
     const [errors, setErrors] = useState({
         title: "",
         description: "",
         amount: "",
         date: "",
         category: "",
     });
 
     const handleFormSubmit = (event) => {
         event.preventDefault();
 
         let newErrors = { title: "", description: "", amount: "", date: "", category: "" };
 
         if (expenseTitle.trim() === "") newErrors.title = "PLEASE ENTER A TITLE";
         if (expenseDescription.trim() === "") newErrors.description = "PLEASE ENTER A DESCRIPTION";
         if (expenseAmount.trim() === "" || isNaN(expenseAmount)) newErrors.amount = "PLEASE ENTER A NUMBER";
         if (expenseDate.trim() === "") newErrors.date = "PLEASE ENTER A DATE";
 
         if (Object.values(newErrors).some((error) => error !== "")) {
             setErrors(newErrors);
             return;
         }
 
         const newExpense = {
             title: expenseTitle,
             description: expenseDescription,
             amount: parseFloat(expenseAmount),
             date: expenseDate,
             id: Date.now(),
             category: expenseCategory,
         };
 
         onAddExpense(newExpense);
 
         // Reset form state
         setExpenseTitle("");
         setExpenseDescription("");
         setExpenseAmount("");
         setExpenseDate("");
         setExpenseCategory("");
         setErrors({ title: "", description: "", amount: "", date: "", category: "" });
     };
 
     return (
         <ExpenseForm
             expenseTitle={expenseTitle}
             updateExpenseTitle={setExpenseTitle}
             expenseDescription={expenseDescription}
             updateExpenseDescription={setExpenseDescription}
             expenseAmount={expenseAmount}
             updateExpenseAmount={setExpenseAmount}
             expenseDate={expenseDate}
             updateExpenseDate={setExpenseDate}
             expenseCategory={expenseCategory}
             updateExpenseCategory={setExpenseCategory}
             handleFormSubmit={handleFormSubmit}
             errors={errors}
         />
     );
 };
 
 export default ExpenseFormHandler;
 