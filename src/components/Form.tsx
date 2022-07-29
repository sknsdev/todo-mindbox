import React, { useEffect, useRef } from "react";
import { IFormProps } from "../interfaces";

const Form: React.FC<IFormProps> = (props) => {
  const { addTodo, inputValue, setInputValue } = props;
  const inputPlaceHolder = "What needs to be done?";

  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={inputValue}
        placeholder={inputPlaceHolder}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleEnter}
        className="basic-input form-input"
        ref={inputRef}
      />
      <button className="button button--enabled" onClick={addTodo}>Add</button>
    </div>
  );
};

export default Form;
