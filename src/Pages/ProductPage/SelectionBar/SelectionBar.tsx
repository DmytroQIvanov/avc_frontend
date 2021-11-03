import React from "react";

const SelectionBar = (props: { data: string[] }) => {
  const { data } = props;
  return (
    <div>
      {data.map((elem) => (
        <div>{elem}</div>
      ))}
    </div>
  );
};

export default SelectionBar;
