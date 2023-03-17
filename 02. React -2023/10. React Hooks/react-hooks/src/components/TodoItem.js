import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

export const TodoItem = ({ text, isCompleted }) => {
  return (
    <ListGroup.Item action style={{display: 'flex', justifyContent: "space-between"}}>
      {text}
      <Button variant="outline-secondary">X</Button>
    </ListGroup.Item>
  );
};
