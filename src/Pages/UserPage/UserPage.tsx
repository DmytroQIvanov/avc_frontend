import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const [smth, setsmth] = useState({
    firstName: false,
    lastName: false,
  });
  return (
    <div>
      <div>{user?.firstName}</div>
      <div>{user?.lastName}</div>
      <h2>Заказы</h2>
      {/*<div>{user.orders.maporders.map(elem=>elem.)}</div>*/}
    </div>
  );
};

export default UserPage;
