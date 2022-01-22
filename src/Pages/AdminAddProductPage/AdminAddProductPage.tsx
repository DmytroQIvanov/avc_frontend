import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductStart } from "../../store/Slices/productSlice";
import { ProductVariant } from "./TypeComponent/ProductVariant";
import { TypeComponent } from "./TypeComponent/TypeComponent";
import { RootState } from "../../store/store";

const AdminAddProductPage = () => {
  const dispatch = useDispatch();

  // const {}

  const productType = useSelector(
    (state: RootState) => state.product.productType
  );
  const productVariant = useSelector(
    (state: RootState) => state.product.productVariant
  );
  const addProduct = (images: Blob[]) => {
    if (!productType) {
      return;
    }
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("oldPrice", oldPrice);
    data.append("newProduct", newProduct.toString());
    data.append("ration", "33");
    data.append("productVariant", JSON.stringify(productVariant));
    data.append("type", productType);
    images.forEach((elem, i) => {
      data.append(`file-${i}`, elem);
    });
    dispatch(
      getProductStart({ url: "/admin/addProduct", method: "POST", data })
    );
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfProducts, setNumberOfProducts] = useState("0");
  const [price, setPrice] = useState("0");
  const [oldPrice, setOldPrice] = useState("");
  const [newProduct, setNewProduct] = useState(true);
  const [images, setImages] = useState<Blob[]>([]);

  const [recommendedProducts, setReccomendedProducts] = useState([]);
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <div>Название товара</div>
        <input
          type="name"
          onChange={(elem) => setName(elem.target.value)}
          value={name}
          className={"default-input"}
        />
      </div>

      <div>
        <div>Описание товара</div>
        <textarea
          onChange={(elem) => {
            setDescription(elem.target.value);
          }}
          value={description}
          className={"default-input"}
          style={{ height: "240px", width: "95%" }}
        />
      </div>

      <div>
        <div>Количество товара на складе</div>
        <input
          type="number"
          onChange={(elem) => {
            setNumberOfProducts(elem.target.value);
          }}
          value={numberOfProducts}
          className={"default-input"}
        />
      </div>

      {/*<div>*/}
      {/*  <div>Цена товара: </div>*/}
      {/*  <input*/}
      {/*    type="number"*/}
      {/*    onChange={(elem) => {*/}
      {/*      setPrice(elem.target.value);*/}
      {/*    }}*/}
      {/*    value={price}*/}
      {/*    className={"default-input"}*/}
      {/*  />*/}
      {/*</div>*/}

      <div>
        <div>Рейтинг</div>
        <input type="number" max={11} min={0} className={"default-input"} />
      </div>

      <button onClick={() => console.log(images)}>s</button>

      <div>
        <TypeComponent />
      </div>
      <div>
        <ProductVariant setImages={setImages} images={images} />
      </div>

      <button
        onClick={() => {
          if (images.length != 0) addProduct(images);
        }}
        className={"yellow-button"}
      >
        Создать
      </button>
    </div>
  );
};

export default AdminAddProductPage;
