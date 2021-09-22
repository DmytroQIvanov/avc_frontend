import React, { useEffect, useState } from "react";
import "./ControlSidePanel.sass";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setProductsTypes } from "../../store/Slices/productsSlice";
import { getSideBarLengthStart } from "../../store/Slices/sideBarSlice";
import { useTranslation } from "react-i18next";
import { mobileControlSodePanel } from "../../store/Slices/modalSlice";

const ControlSidePanel = (props: any) => {
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
  const visibilitySidePanel = useSelector(
    (state: RootState) => state.modal.mobileControlSidePanel
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
    <aside>
      <div
        className={visibilitySidePanel ? "overlay_active" : "overlay_hidden"}
        onClick={() => dispatch(mobileControlSodePanel({}))}
      ></div>
      <div
        className={`${
          visibilitySidePanel
            ? "control-side-panel_active"
            : "control-side-panel_hidden"
        } control-side-panel `}
      >
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
      </div>
    </aside>
  );
};

export default ControlSidePanel;
