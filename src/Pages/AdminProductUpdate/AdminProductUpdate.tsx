import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductStart } from "../../store/Slices/productSlice";
import { RootState } from "../../store/store";
import { useParams } from "react-router-dom";

const AdminAddProductPage = () => {
  const dispatch = useDispatch();

  // const productType = useSelector(
  //   (state: RootState) => state.product.productType
  // );
  // const array = useSelector((state: RootState) => state.product.createData);

  const updateProduct = () => {
    let data2 = new FormData();
    data2.append("name", name);
    data2.append("description", description);
    // data2.append("price", price);
    data2.append("id", params.id);
    data2.append("type", type);

    console.log(data2);
    dispatch(
      getProductStart({
        url: "/admin/updateProduct",
        method: "POST",
        data: data2,
      })
    );
  };
  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, []);

  const params: { id: string } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfProducts, setNumberOfProducts] = useState("0");
  // const [price, setPrice] = useState("0");
  const [type, setType] = useState("");
  const product = useSelector((state: RootState) => state.product.product);
  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setType(product.type);

      // setPrice(product.price.toString());
    }
  }, [product]);
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
        <div>Тип: </div>
        <input
          onChange={(elem) => {
            setType(elem.target.value);
          }}
          value={type}
          className={"default-input"}
        />
      </div>
      <div>
        <div>Рейтинг</div>
        <input type="number" max={11} min={0} className={"default-input"} />
      </div>

      <button
        onClick={() => {
          updateProduct();
        }}
        className={"yellow-button"}
      >
        Обновить
      </button>
    </div>
  );
};

export default AdminAddProductPage;
