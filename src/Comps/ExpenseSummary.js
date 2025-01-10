

const ExpenseSummary = ({ expenses = [] }) => {
    
    const expenseCount =  expenses.length;
    /**This conditional statement is saying if eCount is greater than 0 meaning there is anything in the array. Then render the <p> to the screen. But if not as in the first render,render nothing because the initial state is set with [] as an empty array.*/
    const groupExpenses = expenses.reduce((acc, expense) => 
    { return acc + Number(expense.amount) }, 0); /**Number() constructor converts expense.amount "7.00" from a string to numbers - 7.00 */
    return (
          <div>
            {expenseCount > 0 && (
                <>
                <p>Total Expense Count: {expenseCount}</p>
                <p>Total Expense Amount: ${groupExpenses}</p>

                </>
            )}
          </div>
    )
};

export default ExpenseSummary;

