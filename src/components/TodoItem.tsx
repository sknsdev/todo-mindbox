import React from "react";
import { ITodoItem } from "../interfaces";
import { HandySvg } from "handy-svg";
import Delete from "../images/delete.svg";

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, text, completed, date, toggleTodo, removeTodo } = props;
  return (
    <div className="todo__item">
      <div className="todo__info">
        <div className="item__control">
          <input
            type="checkbox"
            className="item__checkbox"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <span className="item__text" onClick={() => toggleTodo(id)}>
            {text}
          </span>
        </div>

        <div className="item__date">{date}</div>
      </div>
      <div onClick={() => removeTodo(id)}>
        <HandySvg src={Delete} className="todo__delete" alt="Delete" />
      </div>
    </div>
  );
};

export default TodoItem;
