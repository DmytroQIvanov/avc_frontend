import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductPage.sass";
import ProductQuantityBar from "../../Components/ProductQuantityBar/ProductQuantityBar";
import ProductPageController from "./ProductPage.controller";
import SelectInput from "../../Components/SelectInput/SelectInput";
import Wrapper from "./Wrapper";
import React from "react";
import ProductImages from "./ProductImages/ProductImages";
import ChangeProductComponent from "./ChangeProductComponent/ChangeProductComponent";
import Comments from "./Comments/Comments";
import { Product } from "../ProductsPage/Product/Product";

type Dict = {
  [key: string]: string;
};

const Table = (props: any) => {
  const { data } = props;

  const rows = Object.entries(data).map((keyValue: any) => (
    <tbody key={keyValue[0]}>
      <tr>
        <td>{keyValue[0]}:</td>
        <td>{keyValue[1]}</td>
      </tr>
    </tbody>
  ));

  return <table>{rows}</table>;
};

const obj = {
  Країна: "Україна",
  "Розмір порції": "14 г",
  "Кількість порцій": "35",
};

const ProductPage = () => {
  const {
    states: { product, loading, choosenState, products },
    states,
    actions,
    actions: { chooseTasteF, chooseWeightF, choosePanel },
  } = ProductPageController();

  // const location = useLocation();
  // const baseUrl = location.pathname;
  return (
    <div style={{ position: "relative" }}>
      {/*<Wrapper*/}
      {/*  loading={loading}*/}
      {/*  meta={{ description: product?.description, title: product?.name }}*/}
      {/*  children={*/}
      <div className="product-page">
        {!loading && product && (
          <>
            <div className="product-page__main-container">
              <h1 className={"product-page__mobile-name"}>{product.name}</h1>

              <ProductImages
                arrayImages={product.productVariant.map((elem) => elem.url1)}
                mainImage={product.productVariant[choosenState.taste].url1}
                onClick={chooseTasteF}
                choosenState={choosenState.taste}
              />

              <div className="product-page__title-container">
                <h1 className="product-page__name">{product.name}</h1>
                <ProductInfo state={states} actions={actions} />
              </div>
            </div>
            <div style={{ marginTop: "100px" }}>
              <h2>З цим також купують:</h2>
              <div style={{ display: "flex" }}>
                {products.map((elem) => (
                  <Product product={elem} key={elem.id} />
                ))}
              </div>
            </div>
            <ChangeProductComponent>
              {(selectedPanelIndex) => (
                <>
                  {selectedPanelIndex == 0 && (
                    <>
                      <div className={"product-page__description"}>
                        {product.description}
                      </div>
                      <Table data={obj} />
                    </>
                  )}
                  {selectedPanelIndex == 1 && <Comments />}
                </>
              )}
            </ChangeProductComponent>
          </>
        )}
      </div>
      {/*}*/}
      {/*/>*/}
    </div>
  );
};

const ProductInfo = (props: any) => {
  const { product, tastePanel, weightPanel, quantity, loading, choosenState } =
    props.state;
  const { setQuantity, chooseWeightF, chooseTasteF, addProductToBasket } =
    props.actions;
  return (
    product && (
      <>
        <div className={"product-page__pre-description"}>
          {product.description}
        </div>
        <div className={"product-page__choose-block"}>
          <SelectInput
            naming={"Смак*"}
            onClick={chooseTasteF}
            data={product.productVariant?.map((elem: any) => elem.taste)}
            choosenState={choosenState.taste}
            isOpen={tastePanel}
            key={"ss22ss"}
          />

          <SelectInput
            naming={"Упаковка (г,мл)*"}
            onClick={chooseWeightF}
            data={product.productVariant[choosenState.taste].property.map(
              (elem: any) => elem.weight
            )}
            choosenState={choosenState.weight}
            isOpen={weightPanel}
            key={"ssss"}
          />
          <ProductQuantityBar
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        <div className="product-page__price-container">
          <span className="product-page__price">
            {
              product.productVariant[choosenState.taste].property[
                choosenState.weight
              ]?.price
            }
            {quantity > 1 && (
              <span>
                {" "}
                * {quantity} ={" "}
                {product.productVariant[choosenState.taste].property[
                  choosenState.weight
                ].price * quantity}
              </span>
            )}{" "}
            грн
          </span>

          <span className="product-page__cost-of-delivery">
            Вартiсть доставки вiд 60 грн
          </span>
        </div>
        <div className={"product-page__buy-block"}>
          <button
            className="product-page__buy-button"
            onClick={addProductToBasket}
          >
            Додати до кошику
          </button>
        </div>
      </>
    )
  );
};
export default ProductPage;
