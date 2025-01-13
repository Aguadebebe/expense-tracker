 

const ExpenseForm = ({ 
    expenseTitle,
    updateExpenseTitle,
    expenseDescription, 
    updateExpenseDescription,
    expenseAmount, 
    updateExpenseAmount, 
    expenseDate,
    updateExpenseDate,
    expenseCategory,
    updateExpenseCategory,
    handleFormSubmit,
    errors
     
}) => {
    return (
        <div>
         <form onSubmit={handleFormSubmit}>
            <input 
              style={{ cursor: "pointer"}}
              value={expenseTitle}
              onChange={event => updateExpenseTitle(event.target.value)}
              placeholder="Enter Title"
           /> 
           
           {errors.title && <p style={{ color: "red"}}>{errors.title}</p>}
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
             placeholder="Enter Amount $"
          />
           
          {errors.amount && <p style={{ color: "red"}}>{errors.amount}</p>}
           <input
             style={{ cursor: "pointer"}} 
             type="date"
             value={expenseDate}
             onChange={event => updateExpenseDate(event.target.value)}
          />
           {errors.date && <p style={{ color: "red"}}>{errors.date}</p>} 
           
            
           <select 
           value={expenseCategory}
           onChange={event => updateExpenseCategory(event.target.value)}
           > 
             <option>Select a Category</option>
             <option>Bills</option>
             <option>Auto Parts</option>
             <option>Groceries</option>
          </select>
           
          {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
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


 