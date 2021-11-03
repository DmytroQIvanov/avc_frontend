import { useState } from "react";
import { InputsComponent } from "./InputsComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addImage,
  addProductVariant,
  addVariantWeight,
  onHandlePrice,
  onHandleTaste,
  onHandleWeight,
  setProductType,
} from "../../../store/Slices/productSlice";
import { RootState } from "../../../store/store";

export const ProductWeight = (props: { i: number }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { i } = props;

  let productVariants = [];
  let [countOfVariants, setCountOfVariants] = useState(0);

  for (let i2 = 0; i2 <= countOfVariants; i2++) {
    productVariants.push(
      <div
        style={{
          margin: "5px",
          border: "1px solid black",
          borderRadius: "3px",
        }}
      >
        <div>
          <div>Weight</div>
          <input
            onChange={(elem) => {
              dispatch(onHandleWeight({ data: elem.target.value, i2, i }));
            }}
            className={"default-input"}
          />
        </div>

        <div>
          <div>Цена </div>
          <input
            onChange={(elem) => {
              dispatch(onHandlePrice({ data: elem.target.value, i2, i }));
            }}
            className={"default-input"}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {productVariants}
      <button
        onClick={() => {
          setCountOfVariants(++countOfVariants);
          dispatch(addVariantWeight({ i }));
        }}
      >
        Add Weight
      </button>
    </div>
  );
};
