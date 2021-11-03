import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import { userLoginStart } from "../../store/Slices/userSlice";
import { RootState } from "../../store/store";
import "./LoginPage.sass";
import "../../assets/design/inputs-buttons.sass";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const errorMessage = useSelector(
    (state: RootState) => state.user.errorMessage
  );
  const loading = useSelector((state: RootState) => state.user.loading);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  if (user) return <Redirect to="/home" />;
  return (
    <div className="login-page">
      {loading && <Loader />}
      <div>
        {/*<h4>{errorMessage}</h4>*/}
        <div>
          <p>{t("login.number")}</p>
          <input
            className={"default-input"}
            placeholder={"+380440000000"}
            onChange={(elem) => setLogin(elem.target.value)}
            value={login}
          />
        </div>
        <div>
          <p>{t("login.password")}</p>
          <input
            className={"default-input"}
            placeholder={"* * * * * *"}
            onChange={(elem) => setPassword(elem.target.value)}
            value={password}
            type="password"
          />
        </div>
        <Link to="/registration">
          <div>{t("login.account")}</div>
          <div>{t("login.register")}</div>
        </Link>
        <button
          className={"yellow-button"}
          onClick={() => {
            dispatch(
              userLoginStart({
                url: "/user/login",
                method: "POST",
                data: { login, password },
              })
            );
          }}
        >
          {t("login.log-in")}
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
