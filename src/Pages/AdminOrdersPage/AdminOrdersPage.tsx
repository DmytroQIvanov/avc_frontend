import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteOrder,
  adminDeleteOrderStart,
  adminGetOrdersStart,
} from "../../store/Slices/adminSlice";
import { RootState } from "../../store/store";

const AdminOrdersPage = () => {
  const dispatch = useDispatch();

  const orders = useSelector(
    (state: RootState) => state.admin.adminData.orders
  );
  useEffect(() => {
    dispatch(adminGetOrdersStart({ url: "/admin/orders", method: "GET" }));
  }, []);

  return (
    <div className={"admin-orders-page"}>
      <div className={"admin-orders-page__container"}>
        {orders.length == 0 && <h2>Заказов нет...</h2>}
        {orders.map((elem, index) => (
          <div className={"admin-orders-page__user"} key={elem.id}>
            <div className={"admin-orders-page__username"}>
              <div>
                ФИО: {elem.user.firstName} {elem.user.lastName}
              </div>
              <div>Примечание к заказу: {elem.orderNotes}</div>
              <div>
                Товары:
                {elem.orderProducts.map((elem) => (
                  <div style={{ border: "1px solid black" }}>
                    <div>Продукт: {elem.product.name}</div>
                    <div>
                      Вкус: {elem.product.productVariant[elem.taste].taste}
                    </div>
                    <div>
                      Вес:{" "}
                      {
                        elem.product.productVariant[elem.taste].property[
                          elem.weight
                        ].weight
                      }
                    </div>
                    <div>Количество: {elem.quantity}</div>
                  </div>
                ))}
              </div>
              <div>Статус заказа: {elem.status}</div>
              <div>Оплата: {elem.PaymentMethod}</div>
              <div>Адресс заказа: {elem.deliveryAddress}</div>
            </div>
            <button
              onClick={() => {
                dispatch(
                  adminDeleteOrderStart({
                    url: "/admin/order",
                    method: "DELETE",
                    index,
                    data: { id: elem.id },
                  })
                );
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrdersPage;
