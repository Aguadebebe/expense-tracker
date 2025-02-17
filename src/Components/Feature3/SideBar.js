import React from "react";
import { RiFolderAddLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";

import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <FaRegTrashCan className="sidebar-icon" />
        <RiFolderAddLine className="sidebar-icon" />
        <RiGalleryView2 className="sidebar-icon" />
      </div>
    </div>
  );
};

export default SideBar;
