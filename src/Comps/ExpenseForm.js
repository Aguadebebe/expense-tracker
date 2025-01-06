

const ExpenseForm = ({ 
    expenseDescription, 
    updateExpenseDescription,
    expenseAmount, 
    updateExpenseAmount, 
    expenseDate,
    updateExpenseDate,
    handleFormSubmit,
    errors
     
}) => {
    return (
        <div>
         <form onSubmit={handleFormSubmit}>
           <textarea 
             style={{ cursor: "pointer"}}
             value={expenseDescription}
             onChange={event => updateExpenseDescription(event.target.value)}
             placeholder="Enter Expense Description"
           /> 
            {errors.description && <p style={{ color: "red"}}>{errors.description}</p>}
           <input
             style={{ cursor: "pointer"}} 
             value={expenseAmount}
             onChange={event => updateExpenseAmount(event.target.value)}
             placeholder="Enter Amount"
          />
           {errors.amount && <p style={{ color: "red"}}>{errors.amount}</p>}
           <input
             style={{ cursor: "pointer"}} 
             type="date"
             value={expenseDate}
             onChange={event => updateExpenseDate(event.target.value)}
          />
           {errors.date && <p style={{ color: "red"}}>{errors.date}</p>} 
          <button 
             style={{ cursor: "pointer"}}
             type="submit"
          >
            Submit
          </button> 
            
         </form>
        </div>
    );
};

export default ExpenseForm;