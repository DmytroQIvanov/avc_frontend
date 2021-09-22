import { useState } from "react";
import { InputsComponent } from "./InputsComponent";
import { useDispatch } from "react-redux";
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
      name: "smartVater",
      additionalFields: [
        { array: true, name: "weight" },
        { array: true, name: "taste" },
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
      <button
        onClick={() => setActive(!active)}
        className={"grey-button"}
        style={{ cursor: "pointer" }}
      >
        Choose
      </button>
      {active &&
        typesRout.map((elem, id) => (
          <div
            onClick={() => {
              setCurrentType({ id, name: elem.name });
              dispatch(setProductType(elem.name));
              setActive(false);
            }}
            style={{
              padding: "10px",
              backgroundColor: "#3339",
              borderRadius: "10px",
              marginTop: "10px",
              cursor: "pointer",
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
              <InputsComponent point={elem.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
