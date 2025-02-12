 

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
    errors,
    setErrors
     
}) => {
    return (
        <div>
         <form 
         className="form"
         onSubmit={handleFormSubmit}>
            <input 
              style={{ cursor: "pointer"}}
              value={expenseTitle}
              //onChange={event => updateExpenseTitle(event.target.value)}
              onChange={event => {
                updateExpenseTitle(event.target.value);
                if (errors.title) {
                    setErrors(prevErrors => ({ ...prevErrors, title: "" }));
                }
              }}
              placeholder="Enter Title"
           /> 
           
           {errors.title && <p style={{ color: "red"}}>{errors.title}</p>}
           <textarea 
             className="expense-description"
             style={{ cursor: "pointer"}}
             value={expenseDescription}
             onChange={event => {
              updateExpenseDescription(event.target.value);
              if (errors.description) {
                  setErrors(prevErrors => ({ ...prevErrors, description: "" }));
              }
          }}
             placeholder="Enter Expense Description"
           /> 
            
           {errors.description && <p style={{ color: "red"}}>{errors.description}</p>}
           <input
             className="enter-amount"
             style={{ cursor: "pointer"}} 
             value={expenseAmount}
             onChange={event => {
              updateExpenseAmount(event.target.value);
              if (errors.amount) {
                  setErrors(prevErrors => ({ ...prevErrors, amount: "" }));
              }
          }}
             placeholder="Enter Amount $"
          />
           
          {errors.amount && <p style={{ color: "red"}}>{errors.amount}</p>}
           <input
             className="mm"
             style={{ cursor: "pointer"}} 
             type="date"
             value={expenseDate}
             onChange={event => {
              updateExpenseDate(event.target.value);
              if (errors.date) {
                  setErrors(prevErrors => ({ ...prevErrors, date: "" }));
              }
          }} 
          />
           {errors.date && <p style={{ color: "red"}}>{errors.date}</p>} 
           
            
           <select
           className="category" 
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
             className="submit"
             style={{ cursor: "pointer"}}
             type="submit"
          >
            Add Expense
          </button> 
            
         </form>
        </div>
    );
};

export default ExpenseForm;


 