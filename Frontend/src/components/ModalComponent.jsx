import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/authSlice";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../features/authSlice";
import EditPostModal from "./EditPostModal";

const ModalComponent = ({
  showModal,
  handleClose,
  id,
  image,
  title,
  content,
  USER,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);  //Modal to edit post after edit button is clicked
  const user = useSelector(selectUser); 
  const token = useSelector(selectToken);
  const navigate = useNavigate();

    //user=userDetails,USER=postDetails and userDetails
    //USER will only be present when we click on a particular post detail is viewed
    //this condition is used to check if the logged in user has clicked on his 
    //own post ,then only edit and delete button will be viewed to him
  const canEditDelete = user && USER && user._id === USER._id; 

  //opens up the edit modal
  const handleEdit = () => {
    console.log("Edit clicked for post with ID:", id);
    setShowEditModal(true);
  };

    //closes the edit modal on clicking save button,save button is in EditPostModalComponent
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

    //API request to update the post
  const handleSaveEdit = async (editedData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (response.ok) {
        console.log("Post edited successfully!", id);
        console.log("Save edit for post with ID:", id, "and data:", editedData);
        navigate("/");
      } else {
        console.error("Error deleting post:", response.status);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  //request to delete post
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (response.ok) {
        console.log("Post deleted successfully!", id);
        navigate("/");
      } else {
        console.error("Error deleting post:", response.status);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }

    handleClose();
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        dialogClassName="modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={image}
            alt={title}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
          <p>Post ID: {id}</p>
          <p><i>Posted by: {USER && USER.name}</i></p>
          <p>Description : {content}</p>
        </Modal.Body>
        <Modal.Footer>
          {canEditDelete && (
            <>
              <Button variant="primary" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Edit Post Modal */}
      <EditPostModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        initialData={{ title, content, image }}
        onSave={handleSaveEdit}
      />
    </>
  );
};

export default ModalComponent;
