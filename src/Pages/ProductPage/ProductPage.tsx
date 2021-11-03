import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import {
  chooseTaste,
  chooseWeight,
  getProductStart,
} from "../../store/Slices/productSlice";
import { RootState } from "../../store/store";
import "./ProductPage.sass";
import { Helmet } from "react-helmet";
import { addProductToBasketStart } from "../../store/Slices/userSlice";
import ProductQuantityBar from "../../Components/ProductQuantityBar/ProductQuantityBar";
import Comments from "./Comments/Comments";

const ProductPage = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const product = useSelector((state: RootState) => state.product.product);
  const choosenState = useSelector(
    (state: RootState) => state.product.choosenState
  );
  const loading = useSelector((state: RootState) => state.product.loading);
  const [quantity, setQuantity] = useState(1);
  const [taste, setTaste] = useState(false);
  const [weight, setWeight] = useState(false);

  useEffect(() => {
    dispatch(getProductStart({ url: "/product", id: params.id }));
  }, []);

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
              <img
                src={product.productVariant[choosenState.taste].url1}
                key={params.id}
              />
              <div className="product-page__title-container">
                <h1 className="product-page__name">{product?.name}</h1>
                <div className={"product-page__description"}>
                  {product?.description}
                </div>

                <div className={"product-page__choose-block"}>
                  {product.productVariant.length != 0 && (
                    <div>
                      <div>Смак*</div>
                      <span
                        className={"yellow-button"}
                        onClick={() => setTaste(!taste)}
                        style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {product.productVariant[choosenState.taste].taste}
                        {taste && (
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
                        onClick={() => setWeight(!weight)}
                      >
                        {
                          product.productVariant[choosenState.taste].property[
                            choosenState.weight
                          ]?.weight
                        }
                      </span>
                      <div>
                        {weight && (
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
                    onClick={() => {
                      dispatch(
                        addProductToBasketStart({
                          url: `/user/product/${product.id}`,
                          method: "POST",
                          data: {
                            taste: choosenState.taste,
                            weight: choosenState.weight,
                            quantity,
                            product,
                          },
                        })
                      );
                    }}
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
