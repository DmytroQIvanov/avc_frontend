import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./ProductQuantityBar.sass";

const ProductQuantityBar = (props: any) => {
  const { product, quantity, setQuantity } = props;
  const dispatch = useDispatch();
  return (
    <div className={"product-quantity-bar"}>
      <div className={"product-quantity-bar-container"}>
        <button
          className={"product-quantity-bar__quantity-button"}
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
        <button
          className={"product-quantity-bar__quantity-button"}
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
      </div>
      <span className={"product-quantity-bar__quantity"}>{quantity}</span>
    </div>
  );
};

export default ProductQuantityBar;
