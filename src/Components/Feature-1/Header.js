import "./Header.css";
import { RiFolderAddLine } from "react-icons/ri";
const Header = () => {
  return (
    <>
      <RiFolderAddLine className="header-icon" />
      <header>
        <h1 className="header-title">Expense Ledger App</h1>
      </header>
    </>
  );
};

export default Header;

// Both of these should have the functionality of adding and deleting a file of
// a new expense list and have it show up in the right hand column sidebar.
// Then to delete it as well.

//This component displays the title and is the lengthwise section at the top.
