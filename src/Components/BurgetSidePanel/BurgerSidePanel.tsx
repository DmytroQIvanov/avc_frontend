import React from "react";
import "./BurgerSidePanel.sass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { userLoginStart } from "../../store/Slices/userSlice";

const BurgerSidePanel = (props: any) => {
  const { burgerSidePanel, setBurgerSidePanel } = props;
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={
          burgerSidePanel
            ? "burger-side-panel__overlay_active"
            : "burger-side-panel__overlay_hidden"
        }
        onClick={() => setBurgerSidePanel(false)}
      ></div>
      <div
        className={`${
          burgerSidePanel
            ? "burger-side-panel_active"
            : "burger-side-panel_hidden"
        } burger-side-panel `}
      >
        {!user ? (
          <>
            <Link to={"/login"} className={"burger-side-panel__login"}>
              Войти
            </Link>
            <Link
              to={"/registration"}
              className={"burger-side-panel__register"}
            >
              Зарегистрироваться
            </Link>
          </>
        ) : (
          <>
            <Link to={"/"}>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
            </Link>
            <Link to={"/basket"} className={"burger-side-panel__basket"}>
              Корзина
            </Link>
            <Link
              to={"/logout"}
              onClick={() => {
                dispatch(
                  userLoginStart({ url: "/user/logout", method: "PATCH" })
                );
              }}
            >
              Выйти
            </Link>
          </>
        )}
        <Link to={"/"}>О нас</Link>
      </div>
    </>
  );
};

export default BurgerSidePanel;
