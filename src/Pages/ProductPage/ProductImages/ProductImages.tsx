import React from "react";
import styles from "./ProductImage.module.scss";

type ProductImages = {
  mainImage: string;
  arrayImages: string[];
  onClick: (index: number) => void;
  choosenState?: number;
};

const ProductImages: React.FC<ProductImages> = ({
  arrayImages,
  mainImage,
  onClick,
  choosenState,
}) => {
  return (
    <div className={styles.productImage}>
      <img src={mainImage} key={mainImage} />

      <div className={styles.productImage__imagesContainer}>
        {arrayImages.map((elem, index) => (
          <div
            className={`${styles.productImage__subImage} ${
              choosenState === index && styles.productImage__subImage_active
            }`}
            key={elem}
            onClick={() => onClick(index)}
          >
            <img
              src={elem}
              style={{
                width: "80px",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
