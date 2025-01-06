import Header from "./Header";
import Expense from './Expense';
import ExpenseSummary from "./ExpenseSummary";
import "../Styles/App.css";
 


 
function App() {
  return (
    <div className="App-container">
      App-Parent
     <Header />
     <Expense />
     <ExpenseSummary />
    </div>
  );
}

export default App;
