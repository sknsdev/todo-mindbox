import React from "react";
import empty from "../images/empty.svg";

const EmptyList = () => {
  return (
    <div className="todo__list--empty">
      <img src={empty} alt="Current list is empty" />
      <label className="item__text">Current list of tasks if empty!</label>
    </div>
  );
};

export default EmptyList;
