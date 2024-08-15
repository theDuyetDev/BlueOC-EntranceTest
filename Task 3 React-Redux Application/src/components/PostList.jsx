import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";
import PostItem from "./PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {" "}
      <div className="post-list">
        {currentPosts.map((post, index) => (
          <PostItem key={index} title={post.title} body={post.body} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => {
                paginate(number);
                window.scrollTo(0, 0);
              }}
              href="#!"
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostList;
