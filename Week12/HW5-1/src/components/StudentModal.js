import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function StudentModal({ isOpen, onClose, data, onSave }) {
  const [student, setStudent] = useState(data);

  useEffect(() => {
    setStudent(data);
  }, [data]);

  const handleChange = (props) => {
    const { name, value } = props.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{student.id ? "Edit Student" : "Add Student"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={student.name || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={student.age || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={student.phone || ""}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onSave(student);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentModal;
