import { TodoItem } from "./TodoItem";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const TodoList = ({ todoList, onTodoAddClick, onTodoDeleteClick }) => {
  return (
    <div style={{ width: "40%", margin: "12px auto" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>

      <ListGroup style={{ marginBottom: "12px" }}>
        {todoList.map((todo) => (
          <TodoItem
            key={todo._id}
            {...todo}
            // onTodoDeleteClick={onTodoDeleteClick}
          />
        ))}
      </ListGroup>

      <Button variant="outline-primary" onClick={onTodoAddClick}>
        Add new task
      </Button>
    </div>
  );
};
