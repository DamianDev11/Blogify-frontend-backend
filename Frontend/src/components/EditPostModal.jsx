import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const EditPostModal = ({
  showEditModal,
  handleCloseEditModal,
  initialData,
  onSave,
}) => {
  const [editedData, setEditedData] = useState(initialData);
  const handleSave = () => {
    // Call the onSave function to initiate the save action
    onSave && onSave(editedData);
    handleCloseEditModal();
  };

  return (
    <Modal
      show={showEditModal}
      onHide={handleCloseEditModal}
      size="lg"
      dialogClassName="modal-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={editedData.title}
              onChange={(e) =>
                setEditedData({ ...editedData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              value={editedData.content}
              onChange={(e) =>
                setEditedData({ ...editedData, content: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={editedData.image}
              onChange={(e) =>
                setEditedData({ ...editedData, image: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPostModal;
