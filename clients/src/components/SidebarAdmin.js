import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./styles/SidebarAdmin.css";

const Sidebar = () => {
  return (
    <Menu>
      <div className="logo">
        <img src={require("../assets/img/TokyoVibesLogo.png")} alt={"Logo Tokyo Vibes"} className="imageTokyoLogo"></img>
        <span>Tokyo Vibes</span>
      </div>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};

export default Sidebar;
