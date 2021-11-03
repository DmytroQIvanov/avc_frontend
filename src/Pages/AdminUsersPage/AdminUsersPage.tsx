import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart } from "../../store/Slices/usersSlice";
import { RootState } from "../../store/store";
import "./AdminUsersPage.sass";
import { handleUsers } from "../../store/handlers/users";
import { handleDeleteORder } from "../../store/handlers/admin";
import { userLoginStart } from "../../store/Slices/userSlice";
import {
  adminDeleteOrder,
  adminDeleteOrderStart,
  adminDeleteUserStart,
} from "../../store/Slices/adminSlice";

const AdminUsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  // const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispatch(getUsersStart({ url: "/admin/users" }));
  }, []);
  return (
    <div className={"admin-user-page"}>
      <div className={"admin-user-page__container"}>
        {users.map((elem) => (
          <div className={"admin-user-page__user"}>
            <div className={"admin-user-page__username"}>
              {elem.firstName} {elem.lastName}
            </div>
            <button
              onClick={() => {
                dispatch(
                  adminDeleteUserStart({
                    url: `/admin/user/${elem.id}`,
                    method: "DELETE",
                  })
                );
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminUsersPage;
