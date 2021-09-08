import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ModalHeaderLanguage.sass";
import { userChangeLanguage } from "../../../store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const ModalHeaderLanguage = (props: { setModalLanguage: Function }) => {
  const { t, i18n } = useTranslation();
  const { setModalLanguage } = props;
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.user.language);
  const changeLanguage = (event: any) => {
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch(userChangeLanguage(event.target.value));
    console.log(language);
  };

  return (
    <div
      className={"modal-header-language__overlay"}
      onClick={() => setModalLanguage(false)}
    >
      <div onChange={changeLanguage} className={"modal-header-language"}>
        <button value="en" name="language" onClick={changeLanguage}>
          English
        </button>
        <button value="ua" name="language" onClick={changeLanguage}>
          Українська
        </button>
      </div>
    </div>
  );
};
