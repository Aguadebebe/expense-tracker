 import "./ExpenseForm.css";

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
      <div className="form-border">
        <form 
          className="form"
          onSubmit={handleFormSubmit}>
            <input 
              className="input-title"
              value={expenseTitle}
              onChange={event => {
                updateExpenseTitle(event.target.value);
                  if (errors.title) {
                    setErrors(prevErrors => ({ ...prevErrors, title: "" }));
                  }
              }}
              placeholder="Enter Title"
            /> 
            {errors.title && <p className="errors">{errors.title}</p>}
            
            <textarea 
              className="expense-description"
              value={expenseDescription}
              onChange={event => {
                updateExpenseDescription(event.target.value);
                  if (errors.description) {
                    setErrors(prevErrors => ({ ...prevErrors, description: "" }));
                  }
              }}
             placeholder="Enter Expense Description"
            /> 
            {errors.description && <p className="errors">{errors.description}</p>}
            
            <input
              className="enter-amount"
              value={expenseAmount}
              onChange={event => {
                updateExpenseAmount(event.target.value);
                  if (errors.amount) {
                    setErrors(prevErrors => ({ ...prevErrors, amount: "" }));
                  }
              }}
              placeholder="Enter Amount $"
            />
            {errors.amount && <p className="errors">{errors.amount}</p>}
            
            <input
              className="input-date"
              type="date"
              value={expenseDate}
              onChange={event => {
                updateExpenseDate(event.target.value);
                if (errors.date) {
                  setErrors(prevErrors => ({ ...prevErrors, date: "" }));
                }
              }} 
            />
            {errors.date && <p className="errors">{errors.date}</p>} 
           
            
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
           
            {errors.category && <p className="errors">{errors.category}</p>}
            <button 
              className="add-expense-btn"
              type="submit"
            >
              Add Expense
            </button> 
            
        </form>
      </div>
    );
};

export default ExpenseForm;


 