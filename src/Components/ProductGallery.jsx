import React from "react";
import "../Styles/ProductGallery.scss";
import ProductItem from "./ProductItem";

const ProductGallery = ({ title, items }) => {
  return (
    <div className="product-gallery">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="product">
        {items.map(({ id, ...otherItemProps }) => {
          return <ProductItem key={id} {...otherItemProps} />;
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
