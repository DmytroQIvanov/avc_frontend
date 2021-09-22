import React from "react";
import { useTranslation } from "react-i18next";
import "./ModalHeaderLanguage.sass";
import { userChangeLanguage } from "../../../store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const ModalHeaderLanguage = (props: {
  setModalLanguage: Function;
  modalLanguage: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const { setModalLanguage, modalLanguage } = props;
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.user.language);
  const changeLanguage = (event: any) => {
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch(userChangeLanguage(event.target.value));
  };

  return (
    <>
      <div
        className={modalLanguage ? "overlay_active" : "overlay_hidden"}
        onClick={() => setModalLanguage(false)}
      ></div>

      <div
        onChange={changeLanguage}
        className={`${
          modalLanguage
            ? "modal-header-language_active"
            : "modal-header-language_hidden"
        } modal-header-language`}
      >
        <button
          value="en"
          name="language"
          onClick={(elem) => {
            changeLanguage(elem);
            setModalLanguage(false);
          }}
        >
          English
        </button>
        <button
          value="ua"
          name="language"
          onClick={(elem) => {
            changeLanguage(elem);
            setModalLanguage(false);
          }}
        >
          Українська
        </button>
      </div>
    </>
  );
};
