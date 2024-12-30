import React from "react";
import "../Styles/DirectoryMenu.scss";
import MenuItem from "./MenuItem";
import { catagoryData } from "../Constants";

const DirectoryMenu = () => {
  return (
    <>
      <h1 style={{ color: "#333", marginBottom: "40px" }}>
        The Best Deals, Just for You
      </h1>
      <div className="directory-menu">
        {catagoryData.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            imageUrl={item.img}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};

export default DirectoryMenu;
