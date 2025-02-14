import "./ExpenseSummary.css";

const ExpenseSummary = ({ expenses = [] }) => {
  
    const expenseCount = expenses.length;
     console.log("Number of expenses:", expenseCount);

     // Using reduce with logging to track each step
  
    const groupExpenses = expenses.reduce((acc, expense, index) => {
       const amount = parseFloat(expense.amount) || 0; // Convert to number and handle invalid values
       
       console.log(`Index = ${index + 1}: Adding Amount = ${amount} + acc = ${acc}`);
      
    return acc + amount;
    }, 0);
       
       console.log(`groupExpenses: = ${groupExpenses}`);
    
       const roundedTotalExpenseAmount = groupExpenses.toFixed(2);
       console.log(`roundAmount: = ${roundedTotalExpenseAmount}`);

    return (

      <> 
        <h2>Expense Summary -</h2>
        <div className="expense-summary-border">
            {expenseCount > 0 && (
                <div>
                  <p>Total Expense Count: {expenseCount}</p>
                  <p>Total Expense Amount: ${roundedTotalExpenseAmount}</p>
                </div>
            )}
        </div>
      </>
    );
}

export default ExpenseSummary;

 