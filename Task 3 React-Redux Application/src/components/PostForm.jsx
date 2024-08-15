import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";

const PostForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body }));
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit} className="post-form">
        <h1>Add Post</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          required
        />
        <div className="form-buttons">
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
