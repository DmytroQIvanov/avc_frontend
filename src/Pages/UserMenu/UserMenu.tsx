import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const UserMenu = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const [smth, setsmth] = useState({
    firstName: false,
    lastName: false,
  });

  const [tags, setTags] = useState<string[]>([]);

  const smth11 = (tag: string) => {
    if (!tag) return;
    if (tags.includes(tag)) return;
    setTags((prevState) => [...prevState, tag]);
  };

  const [arrau, setArrau] = useState([
    "ssssssssss",
    "ssssssssss1",
    "ssssssssss2",
    "ssssssssss3",
  ]);
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

      <div>
        {tags.map((elem) => (
          <div>{elem}</div>
        ))}
        {arrau && (
          <div>
            {arrau.map((elem) => (
              <button onClick={() => smth11(elem)}>{elem}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
