

const ExpenseSummary = ({ expenses = [] }) => {
    /*const expenseCount = Array.isArray(expenses) ? expenses.length : 0;*/
    const expenseCount =  expenses.length;
    /**This conditional statement is saying if eCount is greater than 0 meaning there is anything in the array. Then render the <p> to the screen. but if not as in the first render because the initial state is set with [] an empty array.*/
    
    return (
          <div>
          {expenseCount > 0 && <p>Total Expenses: {expenseCount}</p>}
          </div>
    )
};

export default ExpenseSummary;

