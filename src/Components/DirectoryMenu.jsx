import React from "react";
import "../Styles/DirectoryMenu.scss";
import MenuItem from "./MenuItem";
import { catagoryData } from "../Constants";

const DirectoryMenu = () => {
  console.log("this is data", catagoryData);
  return (
    <>
      <h1 style={{ color: "#333", margin: "30px 0" }}>
        The Best Deals, Just for You
      </h1>
      <div className="directory-menu">
        {catagoryData.map((item, index) => (
          <MenuItem key={index} title={item.title} imageUrl={item.img} />
        ))}
      </div>
    </>
  );
};

export default DirectoryMenu;
