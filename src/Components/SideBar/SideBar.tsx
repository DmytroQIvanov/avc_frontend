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
    BCAA_L_glutamine: true,
    MegaAminoMix: true,
  });

  const [array, setArray] = useState<string[]>([
    "BCAA_L_glutamine",
    "MegaAminoMix",
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

  const on = (type: "BCAA_L_glutamine" | "MegaAminoMix") => {
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
        <h3>Absolute Life </h3>
        <li>
          BCAA+L-Glutamine ({sidebar.BCAA_L_glutamine})
          <button
            name="smartVater"
            className={`sidebar__input-square ${
              input.BCAA_L_glutamine && "active"
            }`}
            onClick={() => on("BCAA_L_glutamine")}
          />
        </li>
        <li>
          Mega Amino mix ({sidebar.MegaAminoMix})
          <button
            name="MegaAminoMix"
            className={`sidebar__input-square ${
              input.MegaAminoMix && "active"
            }`}
            onClick={() => on("MegaAminoMix")}
          />
        </li>
        <li>
          Fat Burner (3){" "}
          <button
            name="MegaAminoMix"
            className={`sidebar__input-square ${
              input.MegaAminoMix && "active"
            }`}
            onClick={() => on("MegaAminoMix")}
          />
        </li>
        <li>
          Collagen (2){" "}
          <button
            name="MegaAminoMix"
            className={`sidebar__input-square ${
              input.MegaAminoMix && "active"
            }`}
            onClick={() => on("MegaAminoMix")}
          />
        </li>
        <li>
          Mg+B (1){" "}
          <button
            name="MegaAminoMix"
            className={`sidebar__input-square ${
              input.MegaAminoMix && "active"
            }`}
            onClick={() => on("MegaAminoMix")}
          />
        </li>
      </ul>
      <ul>
        <h3>{t("nav-bar.equipment")}</h3>
      </ul>
      <ul>
        <h3>Smart Vitamin</h3>
      </ul>
      <ul>
        <h3>{t("nav-bar.vitamins")}</h3>
      </ul>
    </aside>
  );
};
