import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { AddTodoModal } from "./components/AddTodoModal";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodoList(Object.values(result));
        console.log(Object.values(result));
      });
  }, []);

  const onTodoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    
    setShowAddTodo(false);
  };

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  };

  return (
    <div>
      <Header />

      <TodoList todoList={todoList} onTodoAddClick={onTodoAddClick} />

      <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
    </div>
  );
}

export default App;
