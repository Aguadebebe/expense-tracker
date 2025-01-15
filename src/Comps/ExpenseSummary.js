

const ExpenseSummary = ({ expenses = [] }) => {
     
    /**This conditional statement is saying if expenseCount is greater than 0 meaning there is anything in the array. Then render the <p> to the screen. But if not as in the first render,render nothing because the initial state is set with [] as an empty array.*/
    
    const expenseCount =  expenses.length;
    /**Array.prototype.reduce - reduce() is a method in JavaScript that iterates over an array and reduces it to a single value. This value can be anything: a number, an array, an object, or even a string.*/
    const groupExpenses = expenses.reduce((acc, expense) => 
    { return acc + parseFloat(expense.amount) }, 0); /**Number() constructor converts expense.amount "7.00" from a string to numbers - 7.00 */
     const roundAmount = groupExpenses.toFixed(2);

    return (
          <div>
           
            {expenseCount > 0 && (
                <>
                <p>Total Expense Count: {expenseCount}</p>
                <p>Total Expense Amount: ${roundAmount}</p>
                </>
            )}
          </div>
    )
};

export default ExpenseSummary;

