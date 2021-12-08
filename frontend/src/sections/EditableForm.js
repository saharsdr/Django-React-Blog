import React, { useState, useEffect } from "react";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";
import { useLocation } from "react-router-dom";
import PostFields from "../sections/PostFields";

function EditableForm({ postRefresh, setPostRefresh }) {
  const location = useLocation().pathname;

  const x1 = location.replace("posts", "");
  const x2 = x1.replace("edit", "");
  const postId = x2.replaceAll("/", "");
  const [post, setPost] = useState({});
  const [postCategory, setPostCategory] = useState([]);
  const userInfo = getUserInfo();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`/api/posts/${postId}/`);
      setPost(data);
    }
    fetchPost();
    async function fetchPostCategory() {
      const { data } = await axios.get(`/api/posts/${postId}/category/`);
      setPostCategory(data);
    }
    fetchPostCategory();
  }, []);

  useEffect(() => {
    async function fetchCategory() {
      const { data } = await axios.get("/api/category/", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setCategory(data);
    }
    fetchCategory();
  }, []);

  console.log(post);
  return (
    <div>
      <PostFields
        userInfo={userInfo}
        post={post}
        postId={postId}
        postRefresh={postRefresh}
        setPostRefresh={setPostRefresh}
        postCategory={postCategory}
        allCategory={category}
      />
      <p></p>
      <p></p>
    </div>
  );
}

export default EditableForm;
