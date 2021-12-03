import React, { useState, useEffect } from "react";

import Comment from "../components/Comment";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Article from "../sections/Article";
import Comments from "../sections/Comments";

function Single({ articles }) {
  const history = useHistory();
  const url = history.location.pathname;
  const [post, setPost] = useState({});
  const [postCategory, setPostCategory] = useState([]);
  const [postComments, setPostComments] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`/api${url}/`);
      setPost(data);
    }
    fetchPost();
    async function fetchPostCategory() {
      const { data } = await axios.get(`/api${url}/category/`);
      setPostCategory(data);
    }
    fetchPostCategory();
    async function fetchPostComments() {
      const { data } = await axios.get(`/api${url}/comments/`);
      setPostComments(data);
    }
    fetchPostComments();
  }, []);

  return (
    <div>
      <Article
        post={post}
        category={postCategory}
        comments_len={postComments.length}
      />
      <div className="hideshare"></div>

      <Comments id="comments" comments={postComments} />
      {/* <Related articles={articles} /> */}
    </div>
  );
}

export default Single;
