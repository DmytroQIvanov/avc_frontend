import { useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Loader } from "../../Components/Loader/Loader";
import { chooseTaste, chooseWeight } from "../../store/Slices/productSlice";
import "./ProductPage.sass";
import { Helmet } from "react-helmet";
import ProductQuantityBar from "../../Components/ProductQuantityBar/ProductQuantityBar";
import Comments from "./Comments/Comments";
import ProductPageController from "./ProductPage.controller";

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
  const dispatch = useDispatch();

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
                          // height: "50px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-page__title-container">
                <h1 className="product-page__name">{product.name}</h1>
                <div className={"product-page__description"}>
                  {product.description}
                </div>

                <div className={"product-page__choose-block"}>
                  {product.productVariant.length != 0 && (
                    <div>
                      <div>Смак*</div>
                      <span
                        className={"yellow-button"}
                        onClick={handleTastePanel}
                        style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {product.productVariant[choosenState.taste].taste}
                        {tastePanel && (
                          <div className={"model-choose-block"}>
                            {product.productVariant.map((elem, index) => (
                              <div
                                onClick={() => {
                                  dispatch(chooseTaste(index));
                                }}
                              >
                                {elem.taste}
                              </div>
                            ))}
                          </div>
                        )}
                      </span>
                    </div>
                  )}
                  {product.productVariant[choosenState.taste].property
                    .length && (
                    <div>
                      <div style={{ margin: "30px" }}>Упаковка (г,мл)*</div>
                      <span
                        className={"yellow-button"}
                        onClick={handleWeightPanel}
                      >
                        {
                          product.productVariant[choosenState.taste].property[
                            choosenState.weight
                          ]?.weight
                        }
                      </span>
                      <div>
                        {weightPanel && (
                          <div>
                            {product.productVariant[
                              choosenState.taste
                            ].property.map((elem, index) => (
                              <div
                                onClick={() => dispatch(chooseWeight(index))}
                              >
                                {elem.weight}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

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
