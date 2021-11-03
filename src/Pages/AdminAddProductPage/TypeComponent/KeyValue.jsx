import { useState } from "react";
import "./InputsComponent.sass";
import { useDispatch } from "react-redux";
import {
  addArrayOfTaste,
  addArrayOfWeight,
  addKeyValue,
} from "../../../store/Slices/productSlice";

export const KeyValue = (props) => {
  const dispatch = useDispatch();
  let [countOfInputs, setCountOfInputs] = useState(1);
  let arrayOfInputs = [];
  const [data, setData] = useState([]);

  const [key, setKey] = useState("ddd");
  const [value, setValue] = useState("ss");
  for (let i = 0; i <= countOfInputs; i++) {
    arrayOfInputs.push(
      <div
        style={{ display: "flex" }}
        onChange={() => {
          console.log({ [key]: value }, i);
        }}
      >
        <input
          placeholder={1 + i}
          value={data[i]}
          key={i}
          onChange={(elem) => {
            const newArray = data;
            newArray[i] = elem.target.value;
            setData(newArray);
            dispatch(addKeyValue({ data: { [key]: value }, i }));
          }}
          className="inputs-component__input default-input"
        />
        <input
          placeholder={1 + i}
          value={data[i]}
          key={i}
          onChange={(elem) => {
            const newArray = data;
            newArray[i] = elem.target.value;
            setData(newArray);
            // dispatch(addArrayOfTaste({ data: newArray[i], i }));
          }}
          className="inputs-component__input default-input"
        />
      </div>
    );
  }

  return (
    <div className="inputs-component">
      <div className="inputs-component__inputs-container">{arrayOfInputs}</div>
      <button
        onClick={() => {
          setCountOfInputs(countOfInputs + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
