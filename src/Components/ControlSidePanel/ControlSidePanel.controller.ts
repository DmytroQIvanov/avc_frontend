import { useEffect, useState } from "react";
import { setProductsTypes } from "../../store/Slices/productsSlice";
import { useDispatch } from "react-redux";
import { getSideBarLengthStart } from "../../store/Slices/sideBarSlice";

type SidePanelInput = {
  bcaa: boolean;
  LCarnitin: boolean;
  aminoMix: boolean;
  fatBurner: boolean;
  collagen: boolean;
  mgB: boolean;
};

export enum SidePanelEnum {
  bcaa = "bcaa",
  aminoMix = "aminoMix",
  fatBurner = "fatBurner",
  collagen = "collagen",
  mgB = "mgB",
  LCarnitin = "LCarnitin",
}
const ControlSidePanelController = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState<SidePanelInput>({
    bcaa: true,
    aminoMix: true,
    fatBurner: true,
    collagen: true,
    mgB: true,
    LCarnitin: true,
  });

  const [array, setArray] = useState<string[]>([
    "protein",
    "bcaa",
    "gainer",
    "smartVater",
  ]);
  useEffect(() => {
    // dispatch(setProductsTypes(array));
  }, [input]);

  useEffect(() => {
    dispatch(getSideBarLengthStart({ url: "/product/sidebar" }));
  }, []);

  const changeBarState = (type: SidePanelEnum) => {
    console.log(input);
    setInput((prevState) => {
      return { ...prevState, [type]: !prevState[type] };
    });
    console.log(input);
  };

  // const on = (type: "protein" | "bcaa" | "gainer" | "smartVater") => {
  //   if (array.indexOf(type) == -1) {
  //     setArray([...array, type]);
  //   } else {
  //     const result = array.map((elem) => {
  //       if (elem != type) {
  //         return elem;
  //       }
  //       return "";
  //     });
  //     setArray(result);
  //   }
  //   setInput({ ...input, [type]: !input[type] });
  // };
  return { states: { input }, actions: { changeBarState } };
};

export default ControlSidePanelController;
