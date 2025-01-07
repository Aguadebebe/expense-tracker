 

const ExpenseItem = ({ expense, onDelete }) => {
 console.log(expense);
   
    return (
         
         
        <li className="expense-item">
         {expense.title + " = "}
         {expense.description + " "} 
         {expense.amount + "$ "}
         {expense.date}
         
         <button onClick={() => onDelete(expense.id)}>Delete</button>
        </li>
        
    );
     
};
 
export default ExpenseItem;