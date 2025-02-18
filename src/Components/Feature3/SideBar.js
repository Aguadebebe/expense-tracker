import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { RiGalleryView2 } from "react-icons/ri";
import { TbColumns } from "react-icons/tb";

import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons-container">
        <FaRegTrashCan className="sidebar-icon" />
        <RiGalleryView2 className="sidebar-icon" />
        <TbColumns className="sidebar-icon" />
      </div>
    </div>
  );
};

export default SideBar;
