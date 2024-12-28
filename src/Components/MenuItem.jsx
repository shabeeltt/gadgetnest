import React from "react";
import "../Styles/MenuItem.scss";

const MenuItem = ({ title, imageUrl }) => {
  console.log(title);
  return (
    <div className="menu-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <div className="title">{title}</div>
        <p className="subtitle">BUY NOW</p>
      </div>
    </div>
  );
};

export default MenuItem;
