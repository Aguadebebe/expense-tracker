import React from "react";
import TrashDeleteIcon from "./TrashDeleteIcon";
import FileGridIcon from "./FileGridIcon";
import FileColumnsIcon from "./FileColumnsIcon";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons-container">
        <TrashDeleteIcon />
        <FileGridIcon />
        <FileColumnsIcon />
      </div>
    </div>
  );
};

export default SideBar;
