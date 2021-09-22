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
    smartVater: true,
  });
  const [array, setArray] = useState<string[]>([
    "protein",
    "bcaa",
    "gainer",
    "smartVater",
  ]);
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

  const on = (type: "protein" | "bcaa" | "gainer" | "smartVater") => {
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
        <h3>{t("nav-bar.sportsnutrition")}</h3>
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
        <li>
          Smart Vater ({sidebar.smartVater})
          <button
            name="smartVater"
            className={`sidebar__input-square ${input.smartVater && "active"}`}
            onClick={() => on("smartVater")}
          ></button>
        </li>
      </ul>
      <ul>
        <h3>{t("nav-bar.equipment")}</h3>
      </ul>
      <ul>
        <h3>{t("nav-bar.clothing")}</h3>
      </ul>
      <ul>
        <h3>{t("nav-bar.vitamins")}</h3>
      </ul>
    </aside>
  );
};
