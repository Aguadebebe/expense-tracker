import Header from "./Feature-1/Header";
import Expense from "./Feature-2/Feature-SortedCategory/Expense";
import SideBar from "./Feature3/SideBar";
import "../Styles/App.css";

function App() {
  return (
    <div className="container-fluid d-flex">
      <div className="sidebar bg-light border-end">
        <SideBar />
      </div>
      <div className=" flex-grow-1">
        <Header />
        <Expense />
      </div>
    </div>
  );
}

export default App;
