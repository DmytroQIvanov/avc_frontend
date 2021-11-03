import React from "react";
import "./BurgerSidePanel.sass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLoginStart } from "../../store/Slices/userSlice";
import { useTranslation } from "react-i18next";
import { mobileburgerSidePanel } from "../../store/Slices/modalSlice";
import basket from "../../assets/header-backet.svg";
import bell from "../Header/assets/bell.svg";
import userIMG from "../Header/assets/user.svg";
import loginIMG from "../../assets/login.png";

const BurgerSidePanel = (props: any) => {
  const burgerSidePanel = useSelector(
    (state: RootState) => state.modal.mobileburgerSidePanel
  );

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className={burgerSidePanel ? "overlay_active" : "overlay_hidden"}
        onClick={() => dispatch(mobileburgerSidePanel({}))}
      ></div>
      <div
        className={`${
          burgerSidePanel
            ? "burger-side-panel_active"
            : "burger-side-panel_hidden"
        } burger-side-panel `}
        onChange={() => {
          alert();
        }}
      >
        {!user ? (
          <>
            <Link to={"/login"} style={{ display: "flex", lineHeight: "22px" }}>
              <img
                src={userIMG}
                style={{ margin: "auto", marginRight: "10px", width: "24px" }}
              />
              Гість
            </Link>
            <Link
              to={"/basket"}
              className={"burger-side-panel__basket"}
              style={{ display: "flex" }}
            >
              <img
                src={basket}
                style={{ margin: "auto", marginRight: "10px", width: "22px" }}
              />
              <span style={{ margin: "auto" }}>
                {t("mobile-side-bar.basket")}
              </span>
            </Link>
            <Link
              to={"/login"}
              className={"burger-side-panel__login"}
              style={{ display: "flex" }}
            >
              <img
                src={loginIMG}
                style={{ margin: "auto", marginRight: "10px", width: "26px" }}
              />
              {t("login.log-in")}
            </Link>
            <Link
              to={"/registration"}
              className={"burger-side-panel__register"}
            >
              {t("login.register")}
            </Link>
          </>
        ) : (
          <>
            <Link to={`/user/${user.id}`}>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
            </Link>
            <Link
              to={"/basket"}
              className={"burger-side-panel__basket"}
              style={{ display: "flex" }}
            >
              <img
                src={basket}
                style={{ margin: "auto", marginRight: "10px", width: "22px" }}
              />
              <span style={{ margin: "auto" }}>
                {t("mobile-side-bar.basket")}
              </span>
            </Link>

            <Link
              to={"/notifications"}
              className={"burger-side-panel__basket"}
              style={{ display: "flex" }}
            >
              <img
                src={bell}
                style={{ margin: "auto", marginRight: "10px", width: "22px" }}
              />
              <span style={{ margin: "auto" }}>Повідомлення</span>
            </Link>
            <Link
              to={"/logout"}
              onClick={() => {
                dispatch(
                  userLoginStart({ url: "/user/logout", method: "PATCH" })
                );
              }}
            >
              {t("mobile-side-bar.log-out")}
            </Link>
          </>
        )}
        <Link to={"/"}>{t("mobile-side-bar.about-us")}</Link>
      </div>
    </>
  );
};

export default BurgerSidePanel;
