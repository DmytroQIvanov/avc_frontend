import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const UserMenu = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const [smth, setsmth] = useState({
    firstName: false,
    lastName: false,
  });
  return (
    <div>
      <div>{user?.firstName}</div>
      <div>{user?.lastName}</div>
      <h2>Заказы ({user?.orders.length})</h2>
      <div>
        {user?.orders.map((elem) => (
          <>
            Статус: {elem.status}
            <div>{elem.orderedAt}</div>
            <div>Примечание к заказу: {elem.orderNotes}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
