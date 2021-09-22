import React from "react";
import "./MobileSearch.sass";
import { setProductsKey } from "../../store/Slices/productsSlice";
import { Link } from "react-router-dom";
import find from "../../assets/find.svg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "../../assets/design/inputs-buttons.sass";
import { mobileSearch as dispatchMobileSearch } from "../../store/Slices/modalSlice";

const MobileSearch = () => {
  const mobileSearch = useSelector(
    (state: RootState) => state.modal.mobileSearch
  );

  const { t, i18n } = useTranslation();
  const key = useSelector((state: RootState) => state.products.key);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={mobileSearch ? "overlay_active" : "overlay_hidden"}
        onClick={() => {
          dispatch(dispatchMobileSearch({}));
        }}
      ></div>
      <div
        className={`${
          mobileSearch ? "mobile-search_active" : "mobile-search_hidden"
        } mobile-search`}
      >
        <div className={"mobile-search__container"}>
          <input
            placeholder={t("header.search")}
            value={key}
            onChange={(elem) => dispatch(setProductsKey(elem.target.value))}
            className={"default-input"}
          />
          <Link
            to={"/products"}
            onClick={() => {
              dispatch(dispatchMobileSearch({}));
            }}
          >
            <img src={find} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSearch;
