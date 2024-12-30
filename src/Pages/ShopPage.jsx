import React from "react";
import "../Styles/ShopPage.scss";
import ProductGallery from "../Components/ProductGallery";
import { catagoryData } from "../Constants";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {catagoryData.map(({ id, ...otherCatagoryData }) => (
        <ProductGallery key={id} {...otherCatagoryData} />
      ))}
    </div>
  );
};

export default ShopPage;
