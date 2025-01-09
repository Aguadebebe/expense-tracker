 

const ExpenseItem = ({ expense, onDelete }) => {
 console.log(expense);
   
    return (
         
        /**These <span> tags make it so a specific prop of the expense object can be singled out and*/ 
        <li className="expense-item">
         
         <span style={{ color: "green" }}> {expense.title + " = "} </span>
         {expense.description + ""} 
         <span style={{ color: "red" }}>{expense.amount + "$ "}</span>
         {expense.date}
         
         <button onClick={() => onDelete(expense.id)}>Delete</button>
        </li>
        
    );
     
};
 
export default ExpenseItem;