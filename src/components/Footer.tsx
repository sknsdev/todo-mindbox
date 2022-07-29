import React, { useEffect, useState } from "react";
import { IFooterProps, ITodo } from "../interfaces";

const Footer: React.FC<IFooterProps> = (props) => {
  const { currentList, clearComplitedAction } = props;

  const [amount, setAmount] = useState(getLeftAmount(currentList));

  function getLeftAmount(list: ITodo[]) {
    return list.length;
  }

  useEffect(() => {
    setAmount(getLeftAmount(currentList));
  }, [currentList]);

  return (
    <>
      <div className="footer">
        <span className="items-left">{amount} in current list</span>
        <b className="items-clear" onClick={clearComplitedAction}>Clear all completed tasks</b>
      </div>
    </>
  );
};

export default Footer;
