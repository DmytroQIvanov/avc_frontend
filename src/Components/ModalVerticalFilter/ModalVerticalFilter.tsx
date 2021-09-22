import React from "react";
import "./ModalVerticalFilter.sass";

const ModalVerticalFilter = (props: any) => {
  const { verticalFilters, setVerticalFilters } = props;
  if (!verticalFilters) {
    return <></>;
  }
  return (
    <>
      <div
        className={"overlay_active"}
        onClick={() => setVerticalFilters(false)}
      ></div>
      <div className={"modal-vertical-filter"}>
        <div>По убыванию цены</div>
        <div>По возрастанию цены</div>
        <div>По названию</div>
        <div>Акционные</div>
        <div>Новинки</div>
        <div>По Рейтингу</div>
      </div>
    </>
  );
};

export default ModalVerticalFilter;
