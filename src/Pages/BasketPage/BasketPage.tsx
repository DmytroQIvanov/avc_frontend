import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderQuantity,
  deleteOrderProduct,
} from "../../store/Slices/userSlice";
import { RootState } from "../../store/store";
import "./BasketPage.sass";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const BasketPage = () => {
  const products = useSelector((state: RootState) => state.user.user?.basket);
  const user = useSelector((state: RootState) => state.user.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let result = 0;
    products?.forEach((elem) => {
      result +=
        elem.product.productVariant[elem.taste].property[elem.weight].price *
        elem.quantity;
    });
    setTotalPrice(result);
  }, [products]);
  // }
  if (!user) {
    return <Redirect to={"/login"} />;
  }
  if (user?.basket.length == 0 || !user) {
    return (
      <div className="basket-page">
        <div className="basket-page__order-container">
          <h1>Ваша корзина пуста</h1>
          <h2>
            <Link to={"/products"}>Продолжить покупки</Link>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="basket-page">
      <div className="basket-page__order-container">
        {products?.map((elem) => (
          <div className="backet-page__order" key={elem.product.name}>
            <h4 className="order__name">{elem.product.name}</h4>
            <h6 className="order__name">
              {elem.product.productVariant[elem.taste].taste}
            </h6>
            <h6 className="order__name">
              {
                elem.product.productVariant[elem.taste].property[elem.weight]
                  .weight
              }
            </h6>
            <h4 className="order__name">
              Цена:{" "}
              {
                elem.product.productVariant[elem.taste].property[elem.weight]
                  .price
              }{" "}
              * {elem.quantity} ={" "}
              {elem.product.productVariant[elem.taste].property[elem.weight]
                .price * elem.quantity}
            </h4>
            <button
              className={"basket-page__quantity-button"}
              onClick={() => {
                dispatch(
                  changeOrderQuantity({
                    url: "/user/changeProductQuantity",
                    method: "PATCH",
                    data: {
                      name: elem.product.name,
                      changedQuantity: 1,
                      quantity: elem.quantity + 1,
                    },
                  })
                );
              }}
            >
              +
            </button>
            <span>{elem.quantity}</span>
            <button
              className={"basket-page__quantity-button"}
              onClick={() => {
                dispatch(
                  changeOrderQuantity({
                    url: "/user/changeProductQuantity",
                    method: "PATCH",
                    data: {
                      name: elem.product.name,
                      changedQuantity: -1,
                      quantity: elem.quantity - 1,
                    },
                  })
                );
              }}
            >
              -
            </button>
            <div>
              <button
                className={"basket-page__delete-button"}
                onClick={() => {
                  dispatch(
                    deleteOrderProduct({
                      url: `/user/product`,
                      method: "DELETE",
                      data: {
                        name: elem.product.name,
                      },
                    })
                  );
                }}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div>Цена: {totalPrice}</div>
        <Link to={"/order"} className={"basket-page__to-order-button"}>
          Заказать
        </Link>
      </div>
    </div>
  );
};

export default BasketPage;
