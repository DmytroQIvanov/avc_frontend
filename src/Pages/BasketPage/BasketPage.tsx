import { useDispatch, useSelector } from "react-redux";
import { userLoginStart } from "../../store/Slices/userSlice";
import { RootState } from "../../store/store";
import "./BasketPage.sass";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const BasketPage = () => {
  const products = useSelector((state: RootState) => state.user.user?.basket);
  const user = useSelector((state: RootState) => state.user.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let result = 0;
    products?.forEach((elem) => {
      result += elem.product.price * elem.quantity;
      // debugger
    });
    setTotalPrice(result);
    console.log(products);
  }, [products]);
  if (!user) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className="backet-page">
      <div className="basket-page__order-container">
        {products?.map((elem) => (
          <div className="backet-page__order">
            <h4 className="order__name">{elem.product.name}</h4>
            <h4 className="order__name">Price: {elem.product.price}</h4>

            <h3>{elem.quantity}</h3>
            <button
              onClick={() => {
                dispatch(
                  userLoginStart({
                    url: `/user/product/${elem.ID}`,
                    method: "DELETE",
                  })
                );
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div>Цена: {totalPrice}</div>
      <button>Заказать</button>
    </div>
  );
};

export default BasketPage;
