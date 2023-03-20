import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

import { AddTodoModal } from "./components/AddTodoModal";
import { TodoContext } from "./contexts/TodoContext";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodoList(Object.values(result));
        // console.log(Object.values(result));
      });
  }, []);

  const onTodoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, isCompleted: false }),
    });
    const result = await response.json();
    setShowAddTodo(false);
    setTodoList((state) => [result, ...state]);
  };

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  };

  const onTodoDeleteClick = async (todoId) => {
    const response = await fetch(`${baseUrl}/${todoId}`, { method: "DELETE" });
    if (response.ok) {
      setTodoList((state) => state.filter((todo) => todo._id !== todoId));
    }
    // console.log(response);
  };

  const onTodoClick = async (todoId) => {
    const selectedTodo = todoList.find((todo) => todo._id === todoId);
    console.log(selectedTodo);

    const response = await fetch(`${baseUrl}/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedTodo,
        isCompleted: !selectedTodo.isCompleted,
      }),
    });

    if (response.ok) {
      setTodoList((state) =>
        state.map((todo) =>
          todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    }
  };

  const contextValue = {
    onTodoDeleteClick,
    onTodoClick,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <Header />

      <TodoList
        todoList={todoList}
        onTodoAddClick={onTodoAddClick}
        // onTodoDeleteClick={onTodoDeleteClick}
      />

      <AddTodoModal
        show={showAddTodo}
        onTodoAddSubmit={onTodoAddSubmit}
        onTodoAddClose={onTodoAddClose}
      />
    </TodoContext.Provider>
  );
}

export default App;
