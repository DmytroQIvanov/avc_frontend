import React, { ReactNode, useState } from "react";
import styles from "./VariantComponent.module.scss";
import Input from "../../../Components/Input/Input";

type variantPropertyType = {
  index: number;
  count: number;
  register: any;
};
//VARIANT PROPERTY
const VariantPropertyComponent: React.FC<variantPropertyType> = ({
  count,
  index,
  register,
}) => {
  const resultArray: ReactNode[] = [];
  for (let x = 1; x <= count; x++) {
    resultArray.push(
      <div
        key={x}
        style={{
          margin: "10px 0 10px 5px",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "10px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: "10px", fontSize: "20px" }}>
          {x}
        </div>
        <Input
          name={"Вес"}
          inputName={`productVariant.${index}.property.${x}.weight`}
          register={register}
        />
        {count}
        <Input
          name={"Цена"}
          inputName={`productVariant.${index}.property.${x}.price`}
          register={register}
        />
      </div>
    );
  }
  return <>{resultArray}</>;
};

type props = {
  i: number;
  register: any;
};
const VariantComponent: React.FC<props> = ({ children, i, register }) => {
  const [variantPropertyCount, setVariantPropertyCount] = useState(1);

  return (
    <div className={styles.variant}>
      <Input
        name={"Вкус"}
        inputName={`productVariant.${i}.taste`}
        register={register}
      />
      <Input
        type={"file"}
        name={"Изображение"}
        inputName={`productVariant.${i}.image`}
        register={register}
      />
      <VariantPropertyComponent
        count={variantPropertyCount}
        index={i}
        register={register}
      />
      <button
        type={"button"}
        onClick={() => setVariantPropertyCount((prevState) => prevState + 1)}
      >
        Добавить {variantPropertyCount}
      </button>
    </div>
  );
};

export default VariantComponent;
