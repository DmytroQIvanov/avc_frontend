import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginStart } from "../../store/Slices/adminSlice";
import { RootState } from "../../store/store";

import { Loader } from "../../Components/Loader/Loader";
import "../../assets/design/inputs-buttons.sass";

const AdminLoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const firstFetch = useSelector((state: RootState) => state.admin.firstFetch);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminLoginStart({ url: "/admin/auth", method: "POST" }));
  }, []);
  if (!firstFetch) return <Loader />;
  return (
    <div>
      <h3>ПАНЕЛЬ АДМIНIСТРАТОРА</h3>
      {loading && <Loader />}
      <div>
        <div>Логiн</div>
        <input
          onChange={(elem) => {
            setLogin(elem.target.value);
          }}
          value={login}
          className={"default-input"}
        />
      </div>
      <div>
        <div>Пароль</div>
        <input
          onChange={(elem) => {
            setPassword(elem.target.value);
          }}
          value={password}
          placeholder="********"
          type="password"
          className={"default-input"}
        />
      </div>
      <button
        onClick={() => {
          dispatch(
            adminLoginStart({
              url: "/admin/login",
              method: "POST",
              data: { login, password },
            })
          );
        }}
        className={"yellow-button"}
      >
        Увiйти
      </button>
    </div>
  );
};

export default AdminLoginPage;
