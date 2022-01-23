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
        <span onClick={() => setSelectedIndex(0)}>Опис товару</span>
        <span onClick={() => setSelectedIndex(1)}>
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
