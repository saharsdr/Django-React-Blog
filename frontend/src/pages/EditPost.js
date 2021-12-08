import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react/dist/ckeditor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Button } from "react-bootstrap";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
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
  }, [postRefresh, location]);
  const [category, setCategory] = useState([]);
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

  let opList = [];
  opList = category.map((item) => ({ value: item._id, label: item.name }));
  let postOpList = postCategory.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  return (
    <div className="App">
      <PostFields
        userInfo={userInfo}
        post={post}
        postId={postId}
        postRefresh={postRefresh}
        setPostRefresh={setPostRefresh}
        postCategory={postOpList}
        allCategory={opList}
      />
    </div>
  );
}

export default EditPost;
