import React from "react";

import { RiGalleryView2 } from "react-icons/ri";
import { TbColumns } from "react-icons/tb";
import TrashDelete from "./TrashDelete";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons-container">
        <TrashDelete />
        <RiGalleryView2 className="sidebar-icon" />
        <TbColumns className="sidebar-icon" />
      </div>
    </div>
  );
};

export default SideBar;
