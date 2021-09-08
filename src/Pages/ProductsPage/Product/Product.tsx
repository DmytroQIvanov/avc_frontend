import { Link } from "react-router-dom";
import { IProduct } from "../../../Interfaces/IProduct";
import "./Product.sass";
import basket from "../../../assets/shopping-basket.svg";
import { useDispatch } from "react-redux";
import { userLoginStart } from "../../../store/Slices/userSlice";
import { useSpring, animated as Spring } from "react-spring";
import { useState } from "react";
import { Loader } from "../../../Components/Loader/Loader";
import logo from "../../../assets/logo.svg";

export const Product = (props: { data: IProduct }) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [greetingStatus, displayGreeting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const contentProps = useSpring({
    opacity: greetingStatus ? 0 : 1,
    marginTop: greetingStatus ? -500 : 0,
    marginRight: greetingStatus ? -500 : 0,

    delay: 300,
  });
  if (!loaded) {
    // return <Loader />;
  }
  return (
    <div className="product-container">
      {!loaded && (
        <img
          src={logo}
          // style={{ , position: "absolute" }}
          className="loader"
        />
      )}
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
    </div>
  );
};
