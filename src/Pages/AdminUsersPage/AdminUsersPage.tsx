import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart } from "../../store/Slices/usersSlice";
import { RootState } from "../../store/store";
import "./AdminUsersPage.sass";

const AdminUsersPage = () => {
  const dispath = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  // const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispath(getUsersStart({ url: "/admin/users" }));
  }, []);
  return (
    <div className={"admin-user-page"}>
      <div className={"admin-user-page__container"}>
        {users.map((elem) => (
          <div className={"admin-user-page__user"}>
            <div className={"admin-user-page__username"}>
              {elem.firstName} {elem.lastName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminUsersPage;
