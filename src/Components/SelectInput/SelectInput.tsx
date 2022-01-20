import React, { useState } from "react";
import styles from "./SelectInput.module.scss";
import { chooseTaste } from "../../store/Slices/productSlice";

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
  return (
    <div className={styles.selectInput}>
      <div className={styles.selectInput_naming}>{naming}</div>
      <div className={styles.selectInput_container}>
        <div onClick={() => setIsOpen((prevState) => !prevState)}>
          {data[choosenState || 0]}
        </div>
        {isOpen && data && (
          <div className={styles.menu}>
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
        )}
      </div>
    </div>
  );
};

export default SelectInput;
