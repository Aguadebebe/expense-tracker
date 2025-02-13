 import "./ExpenseForm.css";
/**{ 
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
     
} */
const ExpenseForm = (props) => {
    return (
      <div className="form-border">
        <form 
          className="form"
          onSubmit={props.handleFormSubmit}>
          <fieldset> 
          <legend>Expense Form -</legend>
            <input 
              className="input-title"
              value={props.expenseTitle}
              onChange={event => {
                props.updateExpenseTitle(event.target.value);
                  if (props.errors.title) {
                    props.setErrors(prevErrors => ({ ...prevErrors, title: "" }));
                  }
              }}
              placeholder="Enter Title"
            /> 
            {props.errors.title && <p className="errors">{props.errors.title}</p>}
            
            <textarea 
              className="expense-description"
              value={props.expenseDescription}
              onChange={event => {
                props.updateExpenseDescription(event.target.value);
                  if (props.errors.description) {
                    props.setErrors(prevErrors => ({ ...prevErrors, description: "" }));
                  }
              }}
             placeholder="Enter Expense Description"
            /> 
            {props.errors.description && <p className="errors">{props.errors.description}</p>}
            
            <input
              className="enter-amount"
              value={props.expenseAmount}
              onChange={event => {
                props.updateExpenseAmount(event.target.value);
                  if (props.errors.amount) {
                    props.setErrors(prevErrors => ({ ...prevErrors, amount: "" }));
                  }
              }}
              placeholder="Enter Amount $"
            />
            {props.errors.amount && <p className="errors">{props.errors.amount}</p>}
            
            <input
              className="input-date"
              type="date"
              value={props.expenseDate}
              onChange={event => {
              props.updateExpenseDate(event.target.value);
                if (props.errors.date) {
                  props.setErrors(prevErrors => ({ ...prevErrors, date: "" }));
                }
              }} 
            />
            {props.errors.date && <p className="errors">{props.errors.date}</p>} 
           
            
            <select
              className="category" 
              value={props.expenseCategory}
              onChange={event => props.updateExpenseCategory(event.target.value)}
            > 
              <option>Select a Category</option>
              <option>Bills</option>
              <option>Auto Parts</option>
              <option>Groceries</option>
            </select>
           
            {props.errors.category && <p className="errors">{props.errors.category}</p>}
            <button 
              className="add-expense-btn"
              type="submit"
            >
              Add Expense
            </button> 
          </fieldset>
        </form>
      </div>
    );
};

export default ExpenseForm;


 