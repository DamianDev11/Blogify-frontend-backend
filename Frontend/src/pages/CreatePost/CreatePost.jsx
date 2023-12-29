// CreatePostComponent.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../features/authSlice";
import createPostStyle from "./CreatePost.module.css";

const CreatePostComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!title.trim() || !content.trim() || !image.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const addUser = { title, content, image };

    const response = await fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    if (response.ok) {
      navigate("/all");
    } else {
      console.log(result.error);
      setError(result.error);
    }
  };

  return (
    <>
      {user ? (
        <div className={createPostStyle.container}>
          {error && <div className="alert alert-danger">{error}</div>}
          <h2 className={createPostStyle.title}>Create a Post</h2>

          <form onSubmit={handleSubmit} className={createPostStyle.form}>
            <div className={createPostStyle.formGroup}>
              <label className={createPostStyle.formLabel}>Title</label>
              <input
                type="text"
                className={createPostStyle.formInput}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={createPostStyle.formGroup}>
              <label className={createPostStyle.formLabel}>Content</label>
              <input
                type="text"
                className={createPostStyle.formInput}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className={createPostStyle.formGroup}>
              <label className={createPostStyle.formLabel}>Image</label>
              <input
                type="text"
                className={createPostStyle.formInput}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <button type="submit" className={createPostStyle.submitButton}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className={createPostStyle.banner}>
          <div className={createPostStyle.heading}>
            <b>Please LOGIN to create a POST !!!</b>
            <br />
            <small className={createPostStyle.small}>😀</small>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePostComponent;
