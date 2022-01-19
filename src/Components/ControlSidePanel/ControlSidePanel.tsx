import React, { useEffect, useState } from "react";
import "./ControlSidePanel.sass";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";
import { mobileControlSodePanel } from "../../store/Slices/modalSlice";
import ControlSidePanelController, {
  SidePanelEnum,
} from "./ControlSidePanel.controller";

const ControlSidePanel = (props: any) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(
    (state: RootState) => state.sidebar.sidebarLength
  );
  const visibilitySidePanel = useSelector(
    (state: RootState) => state.modal.mobileControlSidePanel
  );

  const { t, i18n } = useTranslation();

  const {
    states: { input },
    actions: { changeBarState },
  } = ControlSidePanelController();
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
          <h3>
            Absolute Life (
            {sidebar.MegaAminoMix +
              sidebar.BCAA_L_glutamine +
              sidebar.Collagen +
              sidebar.Mg_B +
              sidebar.L_Carnitin +
              sidebar.Fat_Burner}
            )
          </h3>
          <div>
            <li>
              BCAA+L-Glutamine ({sidebar.BCAA_L_glutamine})
              <button
                name="protein"
                value="protein"
                className={`sidebar__input-square ${input.bcaa && "active"}`}
                onClick={() => changeBarState(SidePanelEnum.bcaa)}
              ></button>
            </li>

            <li>
              L-Carnitin ({sidebar.L_Carnitin})
              <button
                name="gainer"
                className={`sidebar__input-square ${
                  input.LCarnitin && "active"
                }`}
                onClick={() => changeBarState(SidePanelEnum.LCarnitin)}
              ></button>
            </li>
            <li>
              Mega Amino mix ({sidebar.MegaAminoMix})
              <button
                name="bcaa"
                className={`sidebar__input-square ${
                  input.aminoMix && "active"
                }`}
                onClick={() => changeBarState(SidePanelEnum.aminoMix)}
              ></button>
            </li>
            <li>
              Fat Burner ({sidebar.Fat_Burner})
              <button
                name="smartVater"
                className={`sidebar__input-square ${
                  input.fatBurner && "active"
                }`}
                onClick={() => changeBarState(SidePanelEnum.fatBurner)}
              ></button>
            </li>
            <li>
              Mg+B ({sidebar.Mg_B})
              <button
                name="smartVater"
                className={`sidebar__input-square ${input.mgB && "active"}`}
                onClick={() => changeBarState(SidePanelEnum.mgB)}
              ></button>
            </li>
            <li>
              Collagen ({sidebar.Collagen})
              <button
                name="smartVater"
                className={`sidebar__input-square ${
                  input.collagen && "active"
                }`}
                onClick={() => changeBarState(SidePanelEnum.collagen)}
              ></button>
            </li>
          </div>
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
