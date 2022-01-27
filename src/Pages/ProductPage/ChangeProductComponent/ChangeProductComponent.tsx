import React, { useState } from "react";

import styles from "./ChangeProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type ChangeProductComponent = {
  children: (selectedPanel: number) => React.ReactNode;
};

const ChangeProductComponent: React.FC<ChangeProductComponent> = ({
  children,
}) => {
  const [selectedPanelIndex, setSelectedIndex] = useState(0);
  const commentsNumber = useSelector(
    (state: RootState) => state.product?.product?.comments.length
  );
  return (
    <div className={styles.changeProductContent}>
      <div className="changeProductContent">
        <span
          onClick={() => setSelectedIndex(0)}
          className={`${
            selectedPanelIndex == 0 && styles.changeProductContent__title_active
          }`}
        >
          Опис товару
        </span>
        <span
          onClick={() => setSelectedIndex(1)}
          className={`${
            selectedPanelIndex == 1 && styles.changeProductContent__title_active
          }`}
        >
          Відгуки{" "}
          {commentsNumber && commentsNumber >= 1 ? `(${commentsNumber})` : ""}
        </span>
      </div>
      <div className={styles.changeProductContent_content}>
        {children(selectedPanelIndex)}
      </div>
    </div>
  );
};

export default ChangeProductComponent;
