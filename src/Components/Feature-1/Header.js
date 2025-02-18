import "./Header.css";
import TimeStamp from "./TimeStamp";
import { RiFolderAddLine } from "react-icons/ri";
const Header = () => {
  return (
    <>
      <span className="header-icon-container">
        <RiFolderAddLine className="header-icon" />
        <h1 className="header-title">Expense Ledger App</h1>
        <TimeStamp />
      </span>
    </>
  );
};

export default Header;

// Both of these should have the functionality of adding and deleting a file of
// a new expense list and have it show up in the right hand column sidebar.
// Then to delete it as well.

//This component displays the title and is the lengthwise section at the top.
