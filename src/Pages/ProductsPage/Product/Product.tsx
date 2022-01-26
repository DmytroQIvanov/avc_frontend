import { Link } from "react-router-dom";
import { IProduct } from "../../../Interfaces/IProduct";
import "./Product.sass";
import basket from "../../../assets/shopping-basket.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToBasketStart,
  addProductToFavouriteStart,
  userLoginStart,
} from "../../../store/Slices/userSlice";
import { useMemo, useState } from "react";
import logo from "../../../assets/logo.svg";
import { RootState } from "../../../store/store";
import vectorHeart from "./assets/vectorHeart.svg";
import vectorFire from "./assets/fire.svg";
import vectorHeartActive from "./assets/vectorHeartActive.svg";
import { chooseTaste } from "../../../store/Slices/productSlice";

export const Product = (props: { product: IProduct; admin?: boolean }) => {
  const { product, admin } = props;
  const dispatch = useDispatch();
  const [greetingStatus, displayGreeting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const view = useSelector((state: RootState) => state.user.productView);
  const [random, ls] = useState(0);
  useMemo(
    () => ls(Math.floor(Math.random() * product.productVariant.length)),
    []
  );

  return (
    <div className="product-container">
      {!loaded && <img src={logo} className={`loader ${view}`} />}
      {view == "square" ? (
        <div className={`product ${loaded && "product-loaded"}`}>
          <div className="product__image-container">
            <Link
              to={`/product/${product.id}`}
              onClick={() => dispatch(chooseTaste(random))}
            >
              <img
                src={product.productVariant[random].url1}
                onLoad={() => {
                  setLoaded(true);
                }}
              />
            </Link>
            {true ? (
              <img
                src={vectorHeart}
                className={"product__heart_inactive"}
                onClick={() => {
                  dispatch(
                    addProductToFavouriteStart({
                      url: "/user/favourite",
                      method: "PATCH",
                      data: { productId: product.id, product },
                    })
                  );
                }}
              />
            ) : (
              <img
                src={vectorHeartActive}
                className={"product__heart_inactive"}
              />
            )}
            {true && (
              <img
                src={vectorFire}
                className={"product__fire"}
                onClick={() => {
                  // dispatch(
                  //     addProductToFavouriteStart({
                  //       url: "/user/favourite",
                  //       method: "PATCH",
                  //       data: { productId: product.id, product },
                  //     })
                  // );
                }}
              />
            )}
          </div>
          <h1 className="product__title">
            <Link to={`/product/${product.id}?taste=0`}>{product.name}</Link>
          </h1>
          <div className="product__bottom-panel">
            <span className="product__price">
              {Math.min(
                ...product.productVariant[random].property.map(
                  (elem) => elem.price
                )
              )}
              грн
            </span>
            {!admin ? (
              <img
                src={basket}
                onClick={() => {
                  dispatch(
                    addProductToBasketStart({
                      url: `/user/product/${product.id}`,
                      method: "POST",
                      data: { taste: random, weight: 0, quantity: 1, product },
                    })
                  );
                  displayGreeting(!greetingStatus);
                }}
              />
            ) : (
              <div style={{ position: "absolute", top: "0px" }}>
                <button
                  onClick={() => {
                    dispatch(
                      userLoginStart({
                        url: `/admin/deleteProduct/${product.id}`,
                        method: "DELETE",
                      })
                    );
                  }}
                >
                  Delete
                </button>
                <button>
                  <Link to={`/admin/updateProduct/${product.id}`}>Update</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={`product-row ${loaded && "product-loaded"}`}>
          <div className="product-row__image-container">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.productVariant[random].url1}
                onLoad={() => {
                  setLoaded(true);
                }}
              />
            </Link>
          </div>
          <div className={"product-row__text-container"}>
            <Link to={`/product/${product.id}`} className="product-row__title">
              {product.name}
            </Link>

            <div className="product-row__description">
              {product.description}
            </div>
          </div>
          <div className="product-row__side-panel">
            <span className="product-row__price">
              {Math.min(
                ...product.productVariant[random].property.map(
                  (elem) => elem.price
                )
              )}{" "}
              грн
            </span>
            <img
              src={basket}
              onClick={() => {
                dispatch(
                  addProductToBasketStart({
                    url: `/user/product/${product.id}`,
                    method: "POST",
                    data: { taste: random, weight: 0, quantity: 1, product },
                  })
                );
                displayGreeting(!greetingStatus);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
