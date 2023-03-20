import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export const TodoItem = ({
  _id,
  text,
  isCompleted,
  // onTodoDeleteClick
}) => {
  const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext);

  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
      onClick={()=>onTodoClick(_id)}
    >
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {text}
      </p>

      <Button
        variant="outline-secondary"
        onClick={() => onTodoDeleteClick(_id)}
      >
        X
      </Button>
    </ListGroup.Item>
  );
};
