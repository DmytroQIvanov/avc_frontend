import React, { useState } from "react";
import "./ControlSidePanel.sass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ControlSidePanel = (props: any) => {
  const { visibilitySidePanel, setVisibilitySidePanel } = props;
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    categories: {
      sportNutrition: { protein: false, bcaa: false, gainer: false },
    },
    s: "s",
  });

  return (
    <>
      <div
        className={
          visibilitySidePanel
            ? "burger-side-panel__overlay_active"
            : "burger-side-panel__overlay_hidden"
        }
        onClick={() => setVisibilitySidePanel(false)}
      ></div>
      <div
        className={`${
          visibilitySidePanel
            ? "control-side-panel_active"
            : "control-side-panel_hidden"
        } control-side-panel `}
      >
        <ul>
          <a>По категориям</a>
          <ul>
            <a>Спортивное питание</a>
            <li onClick={(elem) => console.log(elem)}>Протеин</li>
            <li>BCAA</li>
            <li>Гейнер</li>
          </ul>
          <ul>
            <a>Екiпiрування</a>
            <li>Гейнер</li>
            <li>Гейнер</li>
            <li>Гейнер</li>
          </ul>
          <ul>
            <a>Одяг</a>
            <li>Футболки</li>
          </ul>
        </ul>
        <ul>
          <a>В наличии</a>
          <li>В наличии</li>
        </ul>
        <ul>По производителям</ul>
        <ul>По цене</ul>
      </div>
    </>
  );
};

export default ControlSidePanel;
