import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Redirect } from "react-router-dom";
import { getUsersStart } from "../../store/Slices/usersSlice";

const OrderPage = () => {
  enum paymentMethodEnum {
    COD = "COD",
    CARD = "CARD",
    NOCHOOSE = "NOCHOOSE",
  }
  enum deliveryMethodEnum {
    POST = "POST",
    PICKUP = "PICKUP",
    NOCHOOSE = "NOCHOOSE",
  }
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState<paymentMethodEnum>(
    paymentMethodEnum.NOCHOOSE
  );
  // paymentMethodEnum.COD
  const [deliveryMethod, setDeliveryMethod] = useState<deliveryMethodEnum>(
    deliveryMethodEnum.NOCHOOSE
  );

  const [orderNotes, setOrderNotes] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  // deliveryMethodEnum.POST
  const user = useSelector((state: RootState) => state.user.user);

  const products = useSelector((state: RootState) => state.user.user?.basket);
  if (!products) {
    return <Redirect to={"/basket"} />;
  }
  if (products.length <= 0) {
    return <Redirect to={"/basket"} />;
  }

  return (
    <div>
      <div>
        {products.map((elem) => (
          <div>
            <img src={elem.product.imageKey1} />
            <div>{elem.product.name}</div>
            <div>{elem.product.description}</div>
            <div>{elem.product.price}</div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            if (paymentMethod != paymentMethodEnum.COD) {
              setDeliveryMethod(deliveryMethodEnum.PICKUP);
            }
          }}
        >
          Самовывоз
        </button>
        <button onClick={() => setDeliveryMethod(deliveryMethodEnum.POST)}>
          Новой почтой
        </button>
      </div>
      {deliveryMethod == deliveryMethodEnum.POST ? (
        <div>
          <textarea
            placeholder={"Адрес доставки?"}
            value={deliveryAddress}
            onChange={(elem) => setDeliveryAddress(elem.target.value)}
          />
        </div>
      ) : (
        <>Наш адрес: </>
      )}
      <div>
        <h3>Способ оплаты</h3>
        <button
          onClick={() => {
            setPaymentMethod(paymentMethodEnum.COD);
            setDeliveryMethod(deliveryMethodEnum.POST);
          }}
        >
          Наложенный
        </button>
        <button onClick={() => setPaymentMethod(paymentMethodEnum.CARD)}>
          Картой
        </button>
        {deliveryMethod == deliveryMethodEnum.PICKUP && <button>В руки</button>}
        <h4>
          {paymentMethod != "NOCHOOSE"
            ? paymentMethod == "CARD"
              ? "Оплата картой"
              : "Наложенным платежём"
            : " "}
        </h4>
      </div>

      <div>
        <h3>Примечания к заказу</h3>
        <textarea
          value={orderNotes}
          onChange={(elem) => {
            setOrderNotes(elem.target.value);
          }}
        />
      </div>

      <button
        onClick={() => {
          dispatch(
            getUsersStart({
              url: "/user/order",
              method: "POST",
              data: {
                orderNotes,
              },
            })
          );
        }}
      >
        Заказать
      </button>
    </div>
  );
};

export default OrderPage;
