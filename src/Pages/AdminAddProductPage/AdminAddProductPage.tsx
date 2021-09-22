import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductStart } from "../../store/Slices/productSlice";
import { TypeComponent } from "./TypeComponent/TypeComponent";
import { RootState } from "../../store/store";

const AdminAddProductPage = () => {
  const dispatch = useDispatch();

  const productType = useSelector(
    (state: RootState) => state.product.productType
  );
  const array = useSelector((state: RootState) => state.product.createData);

  const addProduct = (images: Blob[]) => {
    if (!productType) {
      console.log(productType);
      return;
    }
    const data = new FormData();
    images.forEach((elem, i) => {
      data.append(`file-${i}`, elem);
    });
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("oldPrice", oldPrice);
    data.append("newProduct", newProduct.toString());
    data.append("ration", "33");
    data.append("type", productType);
    data.append("arrayOfWeight", array.arrayOfWeight.toString());
    data.append("arrayOfTaste", array.arrayOfTaste.toString());
    dispatch(
      getProductStart({ url: "/admin/addProduct", method: "POST", data })
    );
  };
  const [name, setName] = useState("Proteinn");
  const [description, setDescription] = useState("smth");
  const [numberOfProducts, setNumberOfProducts] = useState("0");
  const [price, setPrice] = useState("333");
  const [oldPrice, setOldPrice] = useState("");
  const [newProduct, setNewProduct] = useState(true);
  const [image1, setImage1] = useState<Blob>();
  const [image2, setImage2] = useState<Blob>();
  const [image3, setImage3] = useState<Blob>();
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

      <div>
        <div>Цена товара: </div>
        <input
          type="number"
          onChange={(elem) => {
            setPrice(elem.target.value);
          }}
          value={price}
          className={"default-input"}
        />
      </div>

      <div>
        <div>Рейтинг</div>
        <input type="number" max={11} min={0} className={"default-input"} />
      </div>
      <div>
        <div>Изображение товара - 1</div>
        <input
          type="file"
          onChange={(elem) => {
            if (elem.target.files) {
              setImage1(elem.target.files[0]);
            }
          }}
          className={"default-input"}
        />
      </div>

      <div>
        <div>Изображение товара - 2</div>
        <input
          type="file"
          onChange={(elem) => {
            if (elem.target.files) {
              setImage2(elem.target.files[0]);
            }
          }}
          className={"default-input"}
        />
      </div>
      <div>
        <div>Изображение товара - 3</div>
        <input
          type="file"
          onChange={(elem) => {
            if (elem.target.files) {
              setImage3(elem.target.files[0]);
            }
          }}
          className={"default-input"}
        />
      </div>

      <div>
        <p>Тип</p>
        <TypeComponent />
      </div>

      <button
        onClick={() => {
          if (image1 && image2 && image3) {
            addProduct([image1, image2, image3]);
          }
        }}
        className={"yellow-button"}
      >
        Создать
      </button>
    </div>
  );
};

export default AdminAddProductPage;
