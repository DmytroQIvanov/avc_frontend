import "./MobileControlBar.sass";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ModalVerticalFilter from "../ModalVerticalFilter/ModalVerticalFilter";
import { mobileControlSodePanel } from "../../store/Slices/modalSlice";
import { useDispatch } from "react-redux";

const MobileControlBar = (props: any) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [verticalFilters, setVerticalFilters] = useState(false);
  return (
    <div className="mobile-control-bar">
      <ModalVerticalFilter
        verticalFilters={verticalFilters}
        setVerticalFilters={setVerticalFilters}
      />
      <div
        className={"mobile-control-bar__button"}
        onClick={() => {
          dispatch(mobileControlSodePanel({}));
        }}
      >
        {t("mobile-control-bar.filters")}
      </div>
      <div
        className={"mobile-control-bar__button"}
        onClick={() => {
          setVerticalFilters(!verticalFilters);
        }}
      >
        {t("mobile-control-bar.byPrice")}
      </div>
    </div>
  );
};
export default MobileControlBar;
