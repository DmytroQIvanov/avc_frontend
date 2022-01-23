import React, { useState } from "react";

import styles from "./ChangeProduct.module.scss";

type ChangeProductComponent = {
  children: (selectedPanel: number) => React.ReactNode;
};

const ChangeProductComponent: React.FC<ChangeProductComponent> = ({
  children,
}) => {
  const [selectedPanelIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.changeProductContent}>
      <div className="changeProductContent">
        <span onClick={() => setSelectedIndex(0)}>Опис товару</span>
        <span onClick={() => setSelectedIndex(1)}>Відгуки</span>
      </div>
      <div className={styles.changeProductContent_content}>
        {children(selectedPanelIndex)}
      </div>
    </div>
  );
};

export default ChangeProductComponent;
