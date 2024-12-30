import React from "react";
import "../Styles/ProductItem.scss";

const ProductItem = ({ name, price, imageUrl }) => {
  return (
    <div className="product-item">
      <div>
        <img className="image" src={`${imageUrl}`} alt="" />
      </div>
      <div className="product-details">
        <p>&#8377; {price}</p>
        <h5>{name}</h5>
        {/* <button></button> */}
      </div>
    </div>
  );
};

export default ProductItem;
