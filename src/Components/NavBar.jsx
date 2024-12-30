import "../Styles/NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img className="logo_img" src="/images/gadgetnest_logo.png" alt="" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
