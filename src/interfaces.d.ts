import { Ref } from "react";

export interface IFormProps {
  addTodo: () => void;
  // handleEnter: (event: KeyboardEventHandler<HTMLInputElement>) => void;
  // inputRef: Ref;
  inputValue: string;
  setInputValue: (value: React.SetStateAction<string>) => void;
}

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

export interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export interface ITodoList {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export interface IFooterProps {
  currentList: ITodo[];
  clearComplitedAction: () => void;
}
