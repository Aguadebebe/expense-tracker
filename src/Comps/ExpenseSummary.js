

const ExpenseSummary = ({ expenses = [] }) => {
 
    const expenseCount =  expenses.length;
    /**This conditional statement is saying if eCount is greater than 0 meaning there is anything in the array. Then render the <p> to the screen. But if not as in the first render,render nothing because the initial state is set with [] as an empty array.*/
    
    return (
          <div>
          {expenseCount > 0 && <p>Total Expenses: {expenseCount}</p>}
          </div>
    )
};

export default ExpenseSummary;

