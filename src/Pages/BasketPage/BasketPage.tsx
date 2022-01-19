import "./BasketPage.sass";
import { Link, Redirect } from "react-router-dom";
import BasketPageController from "./BasketPage.controller";

const BasketPage = () => {
  const {
    actions: {
      reduceProductQuantity,
      increaseProductQuantity,
      deleteProductQuantity,
    },
    states: { totalPrice, products, user },
  } = BasketPageController();
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
                increaseProductQuantity(elem);
              }}
            >
              +
            </button>
            <span>{elem.quantity}</span>
            <button
              className={"basket-page__quantity-button"}
              onClick={() => {
                reduceProductQuantity(elem);
              }}
            >
              -
            </button>
            <div>
              <button
                className={"basket-page__delete-button"}
                onClick={() => {
                  deleteProductQuantity(elem);
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
