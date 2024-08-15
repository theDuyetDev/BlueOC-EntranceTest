import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <>
      <h1>Task 3: React-Redux Application</h1>
      <button onClick={toggleForm} className="add-post-button">
        {showForm ? "Close Post Form" : "Add Post"}
      </button>
      {showForm && <PostForm onClose={toggleForm} />}
      <PostList />
    </>
  );
}

export default App;
