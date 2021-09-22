import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./NavBar.sass";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={""}>
      {/*<div className={"nav-bar__block"}></div>*/}
      <nav className="nav-bar">
        {/* <div className="nav-bar__mobile-burger">---</div> */}
        <div className="nav-bar__container">
          <Link to="/products">{t("nav-bar.sportsnutrition")}</Link>
          <Link to="/products">{t("nav-bar.equipment")}</Link>
          <Link to="/products">{t("nav-bar.clothing")}</Link>
          <Link to="/products">{t("nav-bar.vitamins")}</Link>
          <Link to="/products">{t("nav-bar.sportsnutrition")}</Link>
        </div>
      </nav>
    </div>
  );
};
