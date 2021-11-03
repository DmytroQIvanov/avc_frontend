import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NotificationPage = () => {
  const notifications = useSelector(
    (state: RootState) => state.user.user?.notifications
  );

  return (
    <div>
      {notifications?.map((elem) => (
        <div>
          <div>{elem.notificationNameUA}</div>
          <div>{elem.contentUA}</div>
        </div>
      ))}
      {notifications?.length == 0 && (
        <h2 style={{ textAlign: "center" }}>Ще немає повідомлень</h2>
      )}
    </div>
  );
};

export default NotificationPage;
