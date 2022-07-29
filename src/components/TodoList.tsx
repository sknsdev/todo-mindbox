import React from "react";
import { ITodoList } from "../interfaces";
import EmptyList from "./EmptyList";
import TodoItem from "./TodoItem";

const TodoList: React.FC<ITodoList> = (props) => {
  const { items, removeTodo, toggleTodo } = props;

  if (items.length)
    return (
      <div className="todo__list">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    );

  return (
    <div className="todo__list">
      <EmptyList />
    </div>
  );
};

export default TodoList;
