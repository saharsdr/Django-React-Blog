import React, { useState, useEffect } from "react";

import Comment from "../components/Comment";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Article from "../sections/Article";
import Related from "../sections/Related";
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
      console.log(postComments.length);
      console.log(postComments[0]);
      console.log(url);
    }
    fetchPostComments();
  }, []);

  return (
    <div>
      <Article post={post} category={postCategory} />
      <div className="hideshare"></div>
      {postComments.length > 0 && <Comments comments={postComments} />}

      {/* <Related articles={articles} /> */}
    </div>
  );
}

export default Single;
