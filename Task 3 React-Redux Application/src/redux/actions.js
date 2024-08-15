import axios from "axios";
import { fetchPosts as setPosts } from "./reducers";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch(setPosts(response.data));
};

export const addPost = (post) => (dispatch) => {
  dispatch({ type: "posts/addPost", payload: post });
};
