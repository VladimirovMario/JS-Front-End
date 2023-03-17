import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useForm } from "../hooks/useForm";

export const AddTodoModal = ({ onTodoAddSubmit, show, onTodoAddClose }) => {
  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      text: "",
    },
    onTodoAddSubmit
  );

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onEscapeKeyDown={onTodoAddClose} onHide={onTodoAddClose} >
        <Modal.Header closeButton onClick={onTodoAddClose}>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new task..."
                name="text"
                value={formValues.text}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Button
              style={{ marginRight: "12px" }}
              variant="outline-primary"
              type="submit"
            >
              Submit
            </Button>

            <Button variant="outline-secondary" onClick={onTodoAddClose}>
              Close
            </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
