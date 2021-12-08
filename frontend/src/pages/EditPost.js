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

  return (
    <div className="App">
      <PostFields
        userInfo={userInfo}
        post={post}
        postId={postId}
        postRefresh={postRefresh}
        setPostRefresh={setPostRefresh}
      />
      {/* <Form.Group className="mb-3">
        <Form.Label>موضوع : </Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="وقتی که داستان ها پرواز ..."
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>تصویر را انتخاب کنید</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>خلاصه : </Form.Label>
        <Form.Control
          // value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          rows={3}
          placeholder="وقتی که داستان ها پرواز ..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>محتوا : </Form.Label>
        <CKEditor
          config={{
            language: "fa",
          }}
          editor={ClassicEditor}
          data={"content"}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </Form.Group>
      <Button
        onClick={handlerEditPost}
        style={{ cursor: "pointer" }}
        className="mt-3"
        variant="primary"
      >
        ثبت تغییرات
      </Button>{" "} */}
    </div>
  );
}

export default EditPost;
