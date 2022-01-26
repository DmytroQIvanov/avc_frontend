import React from "react";
import { IProduct } from "../../Interfaces/IProduct";

type bubbleProps = {
  list: IProduct[];
  // list: IProduct[] | string[];
  onClick?: () => void;
  visibility?: boolean;
};

const BubbleListInput: React.FC<bubbleProps> = ({
  list,
  visibility,
  onClick,
}) => {
  const listResult = list.map((elem) => (
    <div style={{ display: "flex" }}>
      <img src={elem.productVariant[0].url1} height={"50px"} />
      <div style={{ margin: "auto 0" }}>{elem.name}</div>
    </div>
  ));
  return <div>{listResult}</div>;
};

export default BubbleListInput;
