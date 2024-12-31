import React from "react";
import "../Styles/ProductItem.scss";
import CustomButton from "./CustomButton";

const ProductItem = ({ name, price, imageUrl }) => {
  return (
    <div className="product-item">
      <div>
        <img className="image" src={`${imageUrl}`} alt="" />
      </div>
      <div className="product-details">
        <p>&#8377; {price}</p>
        <h5>{name}</h5>
        <CustomButton
          style={{
            marginTop: "10px",
          }}
        >
          Add To Cart
        </CustomButton>
      </div>
    </div>
  );
};

export default ProductItem;
