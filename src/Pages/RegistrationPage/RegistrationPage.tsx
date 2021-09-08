import axios from "axios";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { hostAddress } from "../../config";
import "./RegistrationPage.sass";
import "../../assets/design/inputs-buttons.sass";

const RegistrationPage = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    number: "",
  });
  const onHandleData = (elem: any) => {
    setData({ ...data, [elem.target.name]: elem.target.value });
  };
  return (
    <div className="registration-page">
      {message}
      {errorMessage}
      <div>
        <h4>Имя*</h4>
        <input
          className={"default-input"}
          name="firstName"
          onChange={onHandleData}
          value={data.firstName}
        />
      </div>
      <div>
        <h4>Фамилия</h4>
        <input
          name="lastName"
          className={"default-input"}
          onChange={onHandleData}
          value={data.lastName}
        />
      </div>
      <div>
        <h4>Номер телефона*</h4>
        <input
          className={"default-input"}
          name="number"
          onChange={onHandleData}
          value={data.number}
          type=""
        />
      </div>
      <div>
        <h4>Пароль*</h4>
        <input
          className={"default-input"}
          name="password"
          onChange={onHandleData}
          value={data.password}
          type="password"
        />
      </div>
      <div>
        <h4> Подтвердите пароль*</h4>
        <input
          className={"default-input"}
          name="confirmPassword"
          onChange={onHandleData}
          value={data.confirmPassword}
          type="password"
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div>Маете аккаунт?</div>
          <div>Увiйти</div>
        </Link>
        <button
          onClick={() => {
            if (!data.firstName || !data.number || !data.password) {
              setErrorMessage("Обязательные поля не заполены");
              return;
            } else if (data.password !== data.confirmPassword) {
              setErrorMessage("Пароли не совпадают");
              return;
            }
            setMessage("");
            setErrorMessage("");
            axios
              .post(hostAddress + "/user", {
                firstname: data.firstName,
                lastname: data.lastName,
                password: data.password,
                number: data.number,
              })
              .then((elem) => {
                if (elem.status == 201) {
                  setMessage("Аккаунт был создан");
                }
                return <Redirect to="/login" />;
              })
              .catch((elem) => {
                console.log(elem.response.data.message);
                setErrorMessage(elem.response.data.message);
              });
          }}
          className={"yellow-button"}
        >
          Зарееструватись
        </button>
      </div>
    </div>
  );
};
export default RegistrationPage;
