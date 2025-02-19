import Header from "./Feature-1/Header";
import Expense from "./Feature-2/Feature-SortedCategory/Expense";
import SideBar from "./Feature3/SideBar";

function App() {
  return (
    <div className="container-fluid d-flex">
      <div className="sidebar bg-light border-end">
        <SideBar />
      </div>
      <div className="flex-grow-1">
        <Header />
        <Expense />
      </div>
    </div>
  );
}

export default App;
// Add file save file icon to form
// set up server.js file with express
// set up mongo db to store expense files
// set up fetch rquest for file to be stored in frontend sidebar with screenshot icon
//set up .get request to send/recive files from mongo db
