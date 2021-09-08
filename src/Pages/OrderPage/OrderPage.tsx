import React, { useState } from "react";

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
  const [paymentMethod, setPaymentMethod] = useState<paymentMethodEnum>(
    paymentMethodEnum.NOCHOOSE
  );
  // paymentMethodEnum.COD
  const [deliveryMethod, setDeliveryMethod] = useState<deliveryMethodEnum>(
    deliveryMethodEnum.NOCHOOSE
  );
  // deliveryMethodEnum.POST

  return (
    <div>
      <div>
        <h3>Примечания к заказу</h3>
        <textarea />
      </div>

      <div>
        <h3>Способ оплаты</h3>
        <h4>{paymentMethod != "NOCHOOSE" && paymentMethod}</h4>
        <button
          onClick={() => {
            setPaymentMethod(paymentMethodEnum.COD);
            setDeliveryMethod(deliveryMethodEnum.PICKUP);
          }}
        >
          Наложенный
        </button>
        <button onClick={() => setPaymentMethod(paymentMethodEnum.CARD)}>
          Картой
        </button>
      </div>
      <div>
        <button onClick={() => setDeliveryMethod(deliveryMethodEnum.PICKUP)}>
          Самовывоз
        </button>
        <button onClick={() => setDeliveryMethod(deliveryMethodEnum.POST)}>
          Новой почтой
        </button>
      </div>
      {deliveryMethod == deliveryMethodEnum.POST ? (
        <div>
          <textarea placeholder={"Куда доставить?"}></textarea>
        </div>
      ) : (
        <>Наш адрес: </>
      )}
    </div>
  );
};

export default OrderPage;
