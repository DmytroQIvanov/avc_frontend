import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setProductsKey } from "../../store/Slices/productsSlice";
import { Link } from "react-router-dom";
import { userLoginStart } from "../../store/Slices/userSlice";
import logout from "../../assets/logout.svg";

import find from "../../assets/find.svg";
import backet from "../../assets/header-backet.svg";
import { useState } from "react";
import NotificationPanel from "../NotificationPanel/NotificationPanel";
import logo from "../../assets/logo.svg";
import ukraine from "../../assets/ukraine.png";
import usa from "../../assets/united-states.png";

import bell from "./assets/bell.svg";
import search from "./assets/search.svg";
import "./Header.sass";
import { ModalHeaderLanguage } from "./ModalHeaderLanguage/ModalHeaderLanguage";
import {
  mobileburgerSidePanel,
  mobileSearch as dispatchMobileSearch,
} from "../../store/Slices/modalSlice";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const key = useSelector((state: RootState) => state.products.key);
  const user = useSelector((state: RootState) => state.user.user);
  const language = useSelector((state: RootState) => state.user.language);
  const basket = useSelector((state: RootState) => state.user.user?.basket);
  const dispatch = useDispatch();
  const [modalLanguage, setModalLanguage] = useState(false);
  const [notificationPanel, setNotificationPanel] = useState(false);

  return (
    <div>
      <ModalHeaderLanguage
        setModalLanguage={setModalLanguage}
        modalLanguage={modalLanguage}
      />
      <div className={"header__block"} />
      <header className="header">
        <div className="header__container">
          <Link to="/home" className="header__logo-container">
            <img src={logo} alt="avc - logo" />
          </Link>
          <Link to="/posts" className="header__avc-team">
            <div>AVC</div>
            <div>TEAM</div>
          </Link>
          <div style={{}} className={"header__number"}>
            +380979197048
          </div>
          <div className="header__input">
            <input
              placeholder={t("header.search")}
              value={key}
              onChange={(elem) => dispatch(setProductsKey(elem.target.value))}
            />
            <Link to="/products">
              <img src={find} />
            </Link>
          </div>

          <div
            className={"header__burger-menu"}
            onClick={() => {
              dispatch(mobileburgerSidePanel({}));
            }}
          />
          <img
            src={language == "ua" ? ukraine : usa}
            onClick={() => setModalLanguage(!modalLanguage)}
            className={"header__language-icon"}
          />

          {/*MOBILE ICON*/}
          <img
            src={search}
            onClick={() => {
              dispatch(dispatchMobileSearch({}));
            }}
            className={"header__mobile-search"}
          />

          <div className="header__icons">
            <Link to="/basket" className="header__busket-container">
              <img src={backet} />
              {user && (
                <span className="header__busket-count">{basket?.length}</span>
              )}
            </Link>
            <div className="header__busket-container">
              <img
                src={bell}
                onClick={() => {
                  setNotificationPanel(!notificationPanel);
                }}
              />
              {user && user.notifications?.length != 0 && (
                <span className="header__busket-count">
                  {user.notifications?.length}
                </span>
              )}
              {notificationPanel && (
                <NotificationPanel
                  setNotificationPanel={setNotificationPanel}
                />
              )}
            </div>
            {user ? (
              <>
                <Link
                  to={`/user/${user.id}`}
                  className="header__name-container"
                >
                  <div>{user.firstName}</div>
                  <div>{user.lastName}</div>
                </Link>
                <img
                  src={logout}
                  alt={"logout"}
                  onClick={() => {
                    dispatch(
                      userLoginStart({ url: "/user/logout", method: "PATCH" })
                    );
                  }}
                />
              </>
            ) : (
              <Link className="header__login" to="/login">
                {t("header.log-in")}
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
