
const ExpenseSummary = ({ expenses = [] }) => {
  const expenseCount = expenses.length;
  console.log("Number of expenses:", expenseCount);

  // Using reduce with logging to track each step
  const groupExpenses = expenses.reduce((acc, expense, index) => {
      const amount = parseFloat(expense.amount) || 0; // Convert to number and handle invalid values
      console.log(`Index = ${index + 1}: Adding Amount = ${amount} to acc = ${acc}`);
      return acc + amount;
  }, 0);
  console.log(`groupExpenses: = ${groupExpenses}`);
  const roundAmount = groupExpenses.toFixed(2);
  console.log(`roundAmount: = ${roundAmount}`);

  return (
      <div>
          {expenseCount > 0 && (
              <>
                  <p>Total Expense Count: {expenseCount}</p>
                  <p>Total Expense Amount: ${roundAmount}</p>
              </>
          )}
      </div>
  );
};

export default ExpenseSummary;

/** const ExpenseSummary = ({ expenses = [] }) => {
      
    
    const expenseCount =  expenses.length;
    console.log(expenses.length);
   
     
    const groupExpenses = expenses.reduce((acc, expense, index) => {
    const updatedAcc = {
     acc + parseFloat(expense.amount), 0);  
     const roundAmount = groupExpenses.toFixed(2);
}}
    
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

*/