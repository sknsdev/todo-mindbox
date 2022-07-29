import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./App.scss";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
  const [currentFilter, setCurrentFilter] = useState("all");

  const addTodo = () => {
    if (inputValue !== "") {
      setTodos([
        ...todos,
        {
          id: uniqid(),
          text: inputValue,
          completed: false,
          date: Date.now().toLocaleString(),
        },
      ]);
    }
    setInputValue("");
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeCompletedTodo = (): void => {
    setTodos(todos.filter((todo) => todo.completed !== true));
    setCurrentFilter("all")
  };

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  useEffect(() => {
    switch (currentFilter) {
      case "all":
        setFilteredTodos(todos);
        break;

      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
    }
  }, [todos, currentFilter]);

  return (
    <>
      <div className="app">
        <div className="container xl:mx-9 md:mx-5 sm:mx-1 my-5">
          <h1 className="app__title">Todos</h1>
          <Form
            addTodo={addTodo}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

          <div className="todo-list-container">
            <div className="filter-container">
              <div className="filter-controls">
                <button
                className={currentFilter === 'all' ? 'tab tab--selected' : 'tab'}
                  onClick={() => {
                    setCurrentFilter("all");
                  }}
                >
                  All
                </button>
                <button
                className={currentFilter === 'active' ? 'tab tab--selected' : 'tab'}
                  onClick={() => {
                    setCurrentFilter("active");
                  }}
                >
                  Active
                </button>
                <button
                className={currentFilter === 'completed' ? 'tab tab--selected' : 'tab'}
                  onClick={() => {
                    setCurrentFilter("completed");
                  }}
                >
                  Completed
                </button>
              </div>
              <div className="filter-sort">
                <span>sort by</span>
              </div>
            </div>

            <TodoList
              items={filteredTodos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          </div>

          <Footer
            currentList={filteredTodos}
            clearComplitedAction={removeCompletedTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
