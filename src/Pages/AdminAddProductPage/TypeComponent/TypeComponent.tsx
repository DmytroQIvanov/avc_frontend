import { useState } from "react";
import { InputsComponent } from "./InputsComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setProductType } from "../../../store/Slices/productSlice";

export const TypeComponent = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const [currentType, setCurrentType] = useState<{
    id: null | number;
    name: null | string;
  }>({ id: null, name: null });

  const [typesRout, setTypesRout] = useState([
    {
      name: "protein",
      additionalFields: [
        { array: true, name: "weight" },
        { array: true, name: "taste" },
      ],
    },
    {
      name: "bcaa",
      additionalFields: [
        { array: true, name: "weight" },
        // { array: true, name: "taste" },
      ],
    },
    {
      name: "gainer",
      additionalFields: [
        // { array: true, name: "weight" },
        { array: true, name: "taste" },
      ],
    },
  ]);

  return (
    <div>
      {currentType.name ? (
        <div>Selected: {currentType.name}</div>
      ) : (
        <div>Not choosen </div>
      )}
      <button onClick={() => setActive(!active)}>Choose</button>
      {active &&
        typesRout.map((elem, id) => (
          <div
            onClick={() => {
              dispatch(setProductType(currentType.name));
              setCurrentType({ id, name: elem.name });
              setActive(false);
            }}
          >
            {elem.name}
          </div>
        ))}

      {currentType.id != null && (
        <div>
          {typesRout[currentType.id].additionalFields.map((elem) => (
            <div>
              <h2>{elem.name}</h2>
              <InputsComponent />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
