import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Redirect } from "react-router-dom";
import {
  changeOrderQuantity,
  deleteOrderProduct,
  userLoginStart,
} from "../../store/Slices/userSlice";

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
            <h3>{elem.product.name}</h3>
            <h4>
              <div>Вкус: {elem.product.productVariant[elem.taste].taste}</div>
              <div>
                Вес:
                {
                  elem.product.productVariant[elem.taste].property[elem.weight]
                    .weight
                }
              </div>
            </h4>
            <div>
              <button
                className={"quantity-button"}
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
                className={"quantity-button"}
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
            </div>
            {/*<div>{elem.product.price}</div>*/}
          </div>
        ))}
      </div>
      <div>
        <button
          className={
            deliveryMethod == deliveryMethodEnum.PICKUP
              ? "yellow-button"
              : "grey-button"
          }
          onClick={() => {
            if (paymentMethod != paymentMethodEnum.COD) {
              setDeliveryMethod(deliveryMethodEnum.PICKUP);
            }
          }}
        >
          Самовывоз
        </button>
        <button
          className={
            deliveryMethod == deliveryMethodEnum.POST
              ? "yellow-button"
              : "grey-button"
          }
          onClick={() => {
            setDeliveryMethod(deliveryMethodEnum.POST);
          }}
        >
          Новой почтой
        </button>
      </div>
      {deliveryMethod == deliveryMethodEnum.POST ? (
        <div>
          <textarea
            className={"default-input"}
            placeholder={"Адрес доставки?"}
            value={deliveryAddress}
            onChange={(elem) => setDeliveryAddress(elem.target.value)}
          />
        </div>
      ) : (
        <h4>Наш адрес: провулок Ярослава Хомова, 3, 4 этаж, Київ</h4>
      )}
      <div>
        <h3>Способ оплаты</h3>
        <button
          className={
            paymentMethod == paymentMethodEnum.COD
              ? "yellow-button"
              : "grey-button"
          }
          onClick={() => {
            setPaymentMethod(paymentMethodEnum.COD);
            setDeliveryMethod(deliveryMethodEnum.POST);
          }}
        >
          Наложенный
        </button>
        <button
          className={
            paymentMethod == paymentMethodEnum.CARD
              ? "yellow-button"
              : "grey-button"
          }
          onClick={() => setPaymentMethod(paymentMethodEnum.CARD)}
        >
          Картой
        </button>
      </div>

      <div>
        <h3>Примечания к заказу</h3>
        <textarea
          className={"default-input"}
          value={orderNotes}
          onChange={(elem) => {
            setOrderNotes(elem.target.value);
          }}
        />
      </div>

      <button
        className={"yellow-button"}
        onClick={() => {
          if (deliveryMethod == deliveryMethodEnum.PICKUP) {
            setDeliveryAddress("Самовывоз");
          }

          dispatch(
            userLoginStart({
              url: "/user/order",
              method: "POST",
              data: {
                orderNotes,
                deliveryAddress,
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
