import React from "react";
import "../Styles/MenuItem.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, url }) => {
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <div className="content">
          <div className="title">{title}</div>
          <p className="subtitle">BUY NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
