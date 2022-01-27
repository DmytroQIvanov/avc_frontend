import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import { userLoginStart } from "../../store/Slices/userSlice";
import { RootState } from "../../store/store";
import "./RestoreLoginPage.sass";
import "../../assets/design/inputs-buttons.sass";
import { useTranslation } from "react-i18next";

const RestoreLoginPage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const errorMessage = useSelector(
    (state: RootState) => state.user.errorMessage
  );
  const loading = useSelector((state: RootState) => state.user.loading);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [restoreBegin, setRestoreBegin] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const onRestore = () => {
      setRestoreBegin(true);
  };

  const emailInputKeyDown = (event: any) => {
      if (event.key == 'Enter') {
          onRestore();
      }
  };

  if (user) return <Redirect to="/home" />;
  return (
    <div className="login-page">
      {loading && <Loader />}
      <div>
        {/*<h4>{errorMessage}</h4>*/}
        <div>
          <p>
            Enter Email:
            { /* t("login.number") */ }
          </p>
          <input
            className={"default-input"}
            placeholder={"exmaple@example.com"}
            onChange={(elem) => setEmail(elem.target.value)}
            onKeyDown={emailInputKeyDown}
            value={email}
          />
        </div>
        {true &&
         <button
           className="yellow-button"
           onClick={onRestore}
           disabled={restoreBegin}
         >
             Restore
             { /* t("login.log-in") */ }
         </button>
        }
        {
          restoreBegin &&
          <div>
            <p>
              Enter code:
              { /* t("login.password") */ }
            </p>
            <input
              className={"default-input"}
              placeholder={"123456"}
              onChange={(elem) => setCode(elem.target.value)}
              value={code}
            />
          </div>
        }
      </div>
    </div>
  );
};
export default RestoreLoginPage;
