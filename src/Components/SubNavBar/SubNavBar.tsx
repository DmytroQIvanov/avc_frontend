import { useTranslation } from "react-i18next";
import "./NavBar2.sass";
import { useDispatch, useSelector } from "react-redux";
import squares from "./assets/Group-square.svg";
import rows from "./assets/Group-rows.svg";
import { userChangeProductView } from "../../store/Slices/userSlice";
import { RootState } from "../../store/store";
import { useEffect } from "react";

export const SubNavBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const activeOption = useSelector(
    (state: RootState) => state.user.productView
  );
  useEffect(() => {
    const result = localStorage.getItem("productView");
    if (result == "row" || result == "square") {
      dispatch(userChangeProductView(result));
    }
  }, []);

  return (
    <div className={""}>
      {/*<div className={"nav-bar__block"}></div>*/}
      <nav className="nav-bar">
        <div className="nav-bar__container">
          <div>
            <img
              src={squares}
              className={activeOption == "square" ? "active" : "off"}
              onClick={() => {
                dispatch(userChangeProductView("square"));
              }}
            />
            <img
              src={rows}
              className={activeOption == "row" ? "active" : "off"}
              onClick={() => {
                dispatch(userChangeProductView("row"));
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
