import { useState } from "react";
import { InputsComponent } from "./InputsComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addImage,
  addProductVariant,
  onHandleTaste,
  setProductType,
} from "../../../store/Slices/productSlice";
import { RootState } from "../../../store/store";

export const TypeComponent = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const productType = useSelector(
    (state: RootState) => state.product.productType
  );
  // const [currentType, setCurrentType] = useState<{
  //   id: null | number;
  //   name: null | string;
  // }>({ id: null, name: null });
  const types = [
    { name: "BCAA_L_glutamine" },
    { name: "L-Carnitin" },
    { name: "Mega Amino mix" },
    { name: "Fat Burner" },
    { name: "Collagen" },
    { name: "Mg+B" },
    { name: "SmartVitamin" },
  ];

  return (
    <div>
      Choosen: {productType}
      {active ? (
        <>
          <div style={{ border: "1px solid black" }}>
            <div>
              <div>Тип</div>
              <div>
                {types.map((elem) => (
                  <div
                    onClick={() => {
                      setActive(false);
                      dispatch(setProductType(elem.name));
                    }}
                  >
                    {elem.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => {}}>Set</button>
        </>
      ) : (
        <button
          onClick={() => {
            setActive(true);
          }}
        >
          Choose
        </button>
      )}
    </div>
  );
};
