import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./NotificationPanel.sass";

const NotificationPanel = ({
  setNotificationPanel,
}: {
  setNotificationPanel: Function;
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const notifications = useSelector(
    (state: RootState) => state.user.user?.notifications
  );

  return <></>;
  // return (
  //     <div className={"notification-panel__overlay"} onClick={()=>setNotificationPanel(false)}>
  //     <div className={"notification-panel"}>
  //         {!user?<>Чтобы получать уведомления нужно войти</>:<>{!notifications?.length&&<>Пусто</>}{notifications?.map(elem=>(elem.name))}</>}
  //     </div>
  //     </div>
  // );
};

export default NotificationPanel;
