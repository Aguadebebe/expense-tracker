

const ExpenseForm = ({ 
    expenseDescription, 
    updateExpenseDescription,
    expenseAmount, 
    updateExpenseAmount, 
    expenseDate,
    updateExpenseDate,
    handleFormSubmit
     
}) => {
    return (
        <div>
         <form onSubmit={handleFormSubmit}>
           <textarea 
             style={{ cursor: "pointer"}}
             value={expenseDescription}
             onChange={event => updateExpenseDescription(event.target.value)}
             placeholder="Enter Expense Description"
           ></textarea>
           <input
             style={{ cursor: "pointer"}} 
             value={expenseAmount}
             onChange={event => updateExpenseAmount(event.target.value)}
             placeholder="Enter Amount"
          />
           <input
             style={{ cursor: "pointer"}} 
             type="date"
             value={expenseDate}
             onChange={event => updateExpenseDate(event.target.value)}
          /> 
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