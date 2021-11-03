import { useState } from "react";
import "./InputsComponent.sass";
import { useDispatch } from "react-redux";
import {
  addArrayOfTaste,
  addArrayOfWeight,
} from "../../../store/Slices/productSlice";

export const InputsComponent = (props) => {
  const { point, array } = props;
  const dispatch = useDispatch();
  let [countOfInputs, setCountOfInputs] = useState(1);
  let arrayOfInputs = [];
  const [data, setData] = useState([]);
  for (let i = 0; i <= countOfInputs; i++) {
    arrayOfInputs.push(
      <input
        placeholder={1 + i}
        value={data[i]}
        key={i}
        onChange={(elem) => {
          const newArray = data;
          newArray[i] = elem.target.value;
          setData(newArray);
          if (point == "weight")
            dispatch(addArrayOfWeight({ data: newArray[i], i }));
          if (point == "taste")
            dispatch(addArrayOfTaste({ data: newArray[i], i }));
        }}
        className="inputs-component__input default-input"
      />
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
