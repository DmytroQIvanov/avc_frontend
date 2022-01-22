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

  // const [timer, setTimer] = useState(100);
  if (data.length <= 0) return <></>;
  const openSelect = async () => {
    setIsOpen((prevState) => !prevState);
    // const res = await setTimeout(() => {
    //   setTimer((prevState) => prevState - 10);
    //   alert();
    //   console.log(timer);
    // }, 10);
    // while (timer > 10 && isOpen) {
    //   console.log(res);
    //   return res;
    // if (timer <= 10) {
    //   setIsOpen(false);
    // }
    // }
  };
  return (
    <div className={styles.selectInput}>
      <div className={styles.selectInput_naming}>{naming}</div>
      <div
        className={`${styles.selectInput_container} ${
          isOpen && styles.selectInput_container_opened
        }`}
      >
        <div
          onClick={() => {
            openSelect();
          }}
        >
          {data[choosenState || 0]}
        </div>
        <div
          className={`${styles.menu} ${
            isOpen && data ? styles.menu_open : styles.menu_close
          }`}
        >
          {data.map((elem, index) => (
            <div
              onClick={() => {
                onClick(index);
                setIsOpen(false);
              }}
              className={`${styles.selectInput_elem} ${
                index == choosenState && styles.selectInput_elem_selected
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
