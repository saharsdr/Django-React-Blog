import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Button } from "react-bootstrap";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";

function NewPost() {
  const userInfo = getUserInfo();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  async function handlerSavePost() {
    if (userInfo) {
      try {
        await axios.post("http://localhost:8000/api/posts-create/", {
          title: title,
          author: userInfo.id,
          content: content,
          descriprion: description,
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
      } catch {
        alert("مشکلی پیش آمده است.");
      }
    }
  }
  return (
    <div className="App">
      <div className="section-title">
        <h2>
          <span>نوشته ی جدید</span>
        </h2>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>موضوع : </Form.Label>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="وقتی که داستان ها پرواز ..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>خلاصه : </Form.Label>
        <Form.Control
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
          data="<p></p>"
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
      <Button className="mt-3" variant="primary">
        دخیره
      </Button>{" "}
    </div>
  );
}

export default NewPost;
