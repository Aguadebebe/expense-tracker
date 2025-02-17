import Header from "./Feature-1/Header";
import Expense from "./Feature-2/Feature-SortedCategory/Expense";
import SideBar from "./Feature3/SideBar";
import "../Styles/App.css";

function App() {
  return (
    <div className="App-container">
      <div>
        <SideBar />
      </div>
      <div className="main-content">
        <Header />
        <Expense />
      </div>
    </div>
  );
}

export default App;
