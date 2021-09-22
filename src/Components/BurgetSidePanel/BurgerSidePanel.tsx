import React from "react";
import "./BurgerSidePanel.sass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLoginStart } from "../../store/Slices/userSlice";
import { useTranslation } from "react-i18next";
import { mobileburgerSidePanel } from "../../store/Slices/modalSlice";
import basket from "../../assets/header-backet.svg";

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
            <Link to={"/login"} className={"burger-side-panel__login"}>
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
