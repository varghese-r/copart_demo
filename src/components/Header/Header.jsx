import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <img
        className="logo"
        src={require("../../assets/copart-logo.png")}
        alt="logo"
      />
      <input
        className="search_bar"
        type="text"
        placeholder="Search inventory by Make, Model, VIN and more"
      />
      <div onClick={props.inventoryClickHandler}>Search Inventory</div>
    </div>
  );
};

export default Header;
