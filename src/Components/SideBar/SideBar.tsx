import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsTypes, setSideBar } from "../../store/Slices/productsSlice";
import { getSideBarLengthStart } from "../../store/Slices/sideBarSlice";
import { RootState } from "../../store/store";
import "./SideBar.sass";
import { useTranslation } from "react-i18next";

export const SideBar = () => {
  const [input, setInput] = useState({
    protein: true,
    gainer: true,
    bcaa: true,
  });
  const [array, setArray] = useState<string[]>(["protein", "bcaa", "gainer"]);
  const dispatch = useDispatch();
  const sidebar = useSelector(
    (state: RootState) => state.sidebar.sidebarLength
  );
  useEffect(() => {
    dispatch(setProductsTypes(array));
  }, [input]);

  useEffect(() => {
    dispatch(getSideBarLengthStart({ url: "/product/sidebar" }));
  }, []);

  const on = (type: "protein" | "bcaa" | "gainer") => {
    if (array.indexOf(type) == -1) {
      setArray([...array, type]);
    } else {
      const result = array.map((elem) => {
        if (elem != type) {
          return elem;
        }
        return "";
      });
      setArray(result);
    }
    setInput({ ...input, [type]: !input[type] });
  };
  const { t, i18n } = useTranslation();

  return (
    <aside className="sidebar">
      <ul>
        <h1>{t("nav-bar.sportsnutrition")}</h1>
        <li>
          {t("products.protein")} ({sidebar.protein})
          <button
            name="protein"
            value="protein"
            className={`sidebar__input-square ${input.protein && "active"}`}
            onClick={() => on("protein")}
          ></button>
        </li>

        <li>
          {t("products.gainer")} ({sidebar.gainer})
          <button
            name="gainer"
            className={`sidebar__input-square ${input.gainer && "active"}`}
            onClick={() => on("gainer")}
          ></button>
        </li>
        <li>
          {t("products.BCAA")} ({sidebar.bcaa})
          <button
            name="bcaa"
            className={`sidebar__input-square ${input.bcaa && "active"}`}
            onClick={() => on("bcaa")}
          ></button>
        </li>
      </ul>
      <ul>
        <h1>{t("nav-bar.equipment")}</h1>
      </ul>
      <ul>
        <h1>{t("nav-bar.clothing")}</h1>
      </ul>
      <ul>
        <h1>{t("nav-bar.vitamins")}</h1>
      </ul>
    </aside>
  );
};
