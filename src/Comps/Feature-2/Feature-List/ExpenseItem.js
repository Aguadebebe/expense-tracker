 

const ExpenseItem = ({ expense, onDelete }) => {
  
   
    return (
           
        <li className="expense-item">
         
          <span style={{ color: "green" }}> {expense.title + " = "} </span>
           {expense.description} 
          <span style={{ color: "red" }}>{"$" + expense.amount }</span>
           {expense.date}
         
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </li>
        
    );
     
};
 
export default ExpenseItem;