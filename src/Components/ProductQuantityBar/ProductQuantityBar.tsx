import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./ProductQuantityBar.sass";

const ProductQuantityBar = (props: any) => {
  const { product, quantity, setQuantity } = props;
  const dispatch = useDispatch();
  return (
    <div className={"product-quantity-bar"}>
      <div className={"product-quantity-btn-container"}>
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
      <div className={"product-quantity-bar__quantity"}>{quantity}</div>
    </div>
  );
};

export default ProductQuantityBar;
