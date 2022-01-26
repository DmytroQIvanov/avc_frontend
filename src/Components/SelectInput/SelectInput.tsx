import React, { useEffect, useState } from "react";
import styles from "./SelectInput.module.scss";

type Props = {
  naming: string;
  onClick: (index: number) => void;
  data: string[];
  choosenState?: number;
  isOpen: boolean;
};

const SelectInput: React.FC<Props> = ({
  naming,
  onClick,
  data,
  choosenState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (data.length <= 0) return <></>;
  const openSelect = () => {
    setIsOpen((prevState) => !prevState);
  };
  const getMenuStyle = () => {
    const menuOpen = isOpen && data;
    const s =
      styles.menu + " " + (menuOpen ? styles.menu_open : styles.menu_close);
    return s;
  };
  const arrowStyle = () => {
    let s = styles.arrow + " ";
    if (isOpen) s += styles["arrow-up"];
    return s;
  };
  const itemStyle = styles.selectInput_elem;
  const selectedStyle = styles.selectInput_elem_selected;
  return (
    <div className={styles.selectInput} onClick={openSelect}>
      <div className={styles.selectInput_naming}>{naming}</div>
      <div
        className={`${styles.selectInput_container} ${
          isOpen && styles.selectInput_container_opened
        }`}
      >
        {/*<div className={styles.selectInput_innerContainer}>*/}
        <div style={{ margin: "auto", display: "block", lineHeight: "27px" }}>
          {data[choosenState || 0]}
          <div className={arrowStyle()} />
        </div>
        {/*</div>*/}
        <div className={getMenuStyle()}>
          {data.map((elem, index) => (
            <div
              onClick={() => {
                onClick(index);
                setIsOpen(false);
                console.log("is open:", isOpen);
              }}
              className={`${itemStyle} ${
                index == choosenState && selectedStyle
              }`}
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
