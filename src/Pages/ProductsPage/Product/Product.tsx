import { Link } from "react-router-dom";
import { IProduct } from "../../../Interfaces/IProduct";
import "./Product.sass";
import basket from "../../../assets/shopping-basket.svg";
import { useDispatch, useSelector } from "react-redux";
import { userLoginStart } from "../../../store/Slices/userSlice";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import { RootState } from "../../../store/store";

export const Product = (props: { data: IProduct; admin: boolean }) => {
  const { data, admin } = props;
  const dispatch = useDispatch();
  const [greetingStatus, displayGreeting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const view = useSelector((state: RootState) => state.user.productView);

  return (
    <div className="product-container">
      {!loaded && <img src={logo} className={`loader ${view}`} />}
      {view == "square" ? (
        <div className={`product ${loaded && "product-loaded"}`}>
          <div className="product__image-container">
            <Link to={`/product/${data.id}`}>
              <img
                src={data.url1}
                onLoad={() => {
                  setLoaded(true);
                }}
              />
              <h3 className="product__title">{data.name}</h3>
            </Link>
          </div>
          <div className="product__description">{data.description}</div>
          <div className="product__bottom-panel">
            <span className="product__price">{data.price} грн</span>
            <img
              src={basket}
              onClick={() => {
                dispatch(
                  userLoginStart({
                    url: `/user/product/${data.id}`,
                    method: "POST",
                  })
                );
                displayGreeting(!greetingStatus);
              }}
            />
          </div>
        </div>
      ) : (
        <div className={`product-row ${loaded && "product-loaded"}`}>
          <div className="product-row__image-container">
            <Link to={`/product/${data.id}`}>
              <img
                src={data.url1}
                onLoad={() => {
                  setLoaded(true);
                }}
              />
            </Link>
          </div>
          <div className={"product-row__text-container"}>
            <Link to={`/product/${data.id}`} className="product-row__title">
              {data.name}
            </Link>

            <div className="product-row__description">{data.description}</div>
          </div>
          <div className="product-row__side-panel">
            <span className="product-row__price">{data.price} грн</span>
            {!admin && (
              <img
                src={basket}
                onClick={() => {
                  dispatch(
                    userLoginStart({
                      url: `/user/product/${data.id}`,
                      method: "POST",
                    })
                  );
                  displayGreeting(!greetingStatus);
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
