import React, { useState, useEffect } from "react";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";
import { useLocation } from "react-router-dom";
import PostFields from "../sections/PostFields";

function EditPost({ postRefresh, setPostRefresh }) {
  const location = useLocation().pathname;

  const x1 = location.replace("posts", "");
  const x2 = x1.replace("edit", "");
  const postId = x2.replaceAll("/", "");
  const [post, setPost] = useState({});
  const [postCategory, setPostCategory] = useState([]);
  const userInfo = getUserInfo();
  const [category, setCategory] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  document.title = "ویرایش نوشته";
  useEffect(() => {
    async function fetchPost() {
      await axios.get(`/api/posts/${postId}/`).then((result) => {
        setPost(result.data);
        setTitle(result.data.title);
        setDescription(result.data.descriprion);
        setContent(result.data.content);
        console.log(result.data);
      });
    }
    fetchPost();
    async function fetchPostCategory() {
      await axios.get(`/api/posts/${postId}/category/`).then((result) => {
        setPostCategory(result.data);
      });
    }
    fetchPostCategory();
  }, [postRefresh, location]);

  useEffect(() => {
    async function fetchCategory() {
      await axios
        .get("/api/category/", {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        })
        .then((result) => {
          setCategory(result.data);
          console.log(result.data);
          console.log(category);
        });
    }
    fetchCategory();
  }, [postRefresh]);

  return (
    <div className="App">
      <PostFields
        userInfo={userInfo}
        post={post}
        postId={postId}
        postRefresh={postRefresh}
        setPostRefresh={setPostRefresh}
        postCategory={postCategory}
        allCategory={category}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}

export default EditPost;
