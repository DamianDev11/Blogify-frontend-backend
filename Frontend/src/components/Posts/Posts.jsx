import "./posts.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "../ModalComponent"; // Adjust the path as needed

const Posts = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  //function to open modal
  const handleOpenModal = (id, image, title, content, USER) => {
    setSelectedData({ id, image, title, content, USER });
    setShowModal(true);
  };
  //function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post._id} className="post">
        <Button
            onClick={() =>
              handleOpenModal(
                post._id,
                post.image,
                post.title,
                post.content,
                post.user
              )
            }
          >
            VIEW POST
          </Button>
          <h2 className="post-title">{post.title}</h2>
          <img
            src={post.image}
            alt={post.title}
           className="post"
            
          />
          <p className="post-content">{post.content}</p>
          
        </div>
      ))}
      <ModalComponent
        showModal={showModal}
        handleClose={handleCloseModal}
        {...selectedData}
      />
    </div>
  );
};

export default Posts;
