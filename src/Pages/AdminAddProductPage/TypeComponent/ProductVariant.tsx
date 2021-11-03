import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProductVariant,
  deleteProductVariant,
  onHandleTaste,
} from "../../../store/Slices/productSlice";
import { ProductWeight } from "./ProductWeight";

export const ProductVariant = (props: { images: any; setImages: any }) => {
  const { images, setImages } = props;
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  let productVariants: {}[] = [];
  let [countOfVariants, setCountOfVariants] = useState(0);

  for (let i = 0; i <= countOfVariants; i++) {
    productVariants.push(
      <div style={{ border: "1px solid black" }}>
        <button
          onClick={() => {
            productVariants.splice(i, 1);
            dispatch(deleteProductVariant({ index: i }));
          }}
        >
          Delete
        </button>
        <div>
          <div>Вкус</div>
          <input
            className={"default-input"}
            onChange={(elem) => {
              dispatch(onHandleTaste({ data: elem.target.value, i }));
            }}
          />
        </div>

        <div>
          <div>Изображение товара - {i + 1}</div>
          <input
            type="file"
            onChange={(elem) => {
              if (elem.target.files) {
                setImages([...images, (images[i] = elem.target.files[0])]);
              }
            }}
            className={"default-input"}
          />
        </div>
        <ProductWeight i={i} />
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          setCountOfVariants(++countOfVariants);
          dispatch(addProductVariant());
        }}
      >
        Add
      </button>
      {productVariants}
    </div>
  );
};
