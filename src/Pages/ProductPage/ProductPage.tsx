import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Loader } from "../../Components/Loader/Loader";
import { chooseTaste, chooseWeight } from "../../store/Slices/productSlice";
import "./ProductPage.sass";
import { Helmet } from "react-helmet";
import ProductQuantityBar from "../../Components/ProductQuantityBar/ProductQuantityBar";
import Comments from "./Comments/Comments";
import ProductPageController from "./ProductPage.controller";
import SelectInput from "../../Components/SelectInput/SelectInput";
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const ProductInfo = (props: any) => {
  const {
    product,
    tastePanel,
    weightPanel,
    quantity,
    loading,
    choosenState
  } = props.state;
  const {
    handleWeightPanel,
    handleTastePanel,
    setQuantity,
    addProductToBasket
  } = props.actions;
  const dispatch = useDispatch();
  return product && (
    <>
      <div className={"product-page__description"}>
        {product.description}
      </div>

      <div className={"product-page__choose-block"}>
        <SelectInput
          naming={"Смак*"}
          onClick={(index) => dispatch(chooseTaste(index))}
          data={product.productVariant?.map((elem: any) => elem.taste)}
          choosenState={choosenState.taste}
          isOpen={tastePanel}
        />

        <SelectInput
          naming={"Упаковка (г,мл)*"}
          onClick={(index) => dispatch(chooseWeight(index))}
          data={product.productVariant[
            choosenState.taste
          ].property.map((elem: any) => elem.weight)}
          choosenState={choosenState.weight}
          isOpen={weightPanel}
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
    );
}

const ProductPage = () => {
  const {
    states: {
      product,
      tastePanel,
      weightPanel,
      quantity,
      loading,
      choosenState,
      id,
    },
    actions: {
      handleWeightPanel,
      handleTastePanel,
      setQuantity,
      addProductToBasket,
    },
  } = ProductPageController();
  const productState = { product, tastePanel, weightPanel, quantity, loading, choosenState };
  const productActions = { handleWeightPanel, handleTastePanel, setQuantity, addProductToBasket };

  const dispatch = useDispatch();
  const location = useLocation();
  const baseUrl = location.pathname;
  return (
    <>
      <div className="product-page">
        {loading && <Loader />}
        {!loading && product && (
          <>
            <Helmet>
              <title>{product.name}</title>
              <meta name="description" content={product.description} />
            </Helmet>
            <div className="product-page__main-container">
              <h1 className={"product-page__mobile-name"}>{product.name}</h1>
              
              <div>
                <img
                  src={product.productVariant[choosenState.taste].url1}
                  key={id}
                />

                <div style={{ display: "flex" }}>
                  {product.productVariant.map((elem, index) => (
                    <div
                      style={{
                        backgroundColor:
                          choosenState.taste == index ? "yellow" : "inherit",
                        margin: "13px 13px 13px 0px",
                        padding: "2px",
                        borderRadius: "10px",
                      }}
                      key={elem.url1}
                      onClick={() => dispatch(chooseTaste(index))}
                    >
                      <img
                        src={elem.url1}
                        style={{
                          width: "80px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-page__title-container">
                <h1 className="product-page__name">{product.name}</h1>
                <div className="changeProductContent">
                  <NavLink to={baseUrl}>Опис товару</NavLink>
                  <NavLink to={`${baseUrl}/comments`}>Відгуки</NavLink>
                  <NavLink to={`${baseUrl}/buy`}>Замовити</NavLink>
                </div>
                <ProductInfo state={productState} actions={productActions} />
              </div>
            </div>
            <Comments product={product} />
          </>
        )}
      </div>
    </>
  );
};
export default ProductPage;
