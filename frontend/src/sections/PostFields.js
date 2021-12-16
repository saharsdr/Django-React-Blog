import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react/dist/ckeditor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Button } from "react-bootstrap";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function PostFields({
  postId,
  post,
  userInfo,
  postRefresh,
  setPostRefresh,
  postCategory,
  allCategory,
  title,
  setTitle,
  content,
  setContent,
  description,
  setDescription,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const animatedComponents = makeAnimated();

  let opAllCategory = [];
  opAllCategory = allCategory.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  let postOpList = postCategory.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  useEffect(() => {
    setSelectedOption(postCategory);
  }, []);

  async function handlerEditPost() {
    if (userInfo) {
      console.log(title);
      console.log(description);
      console.log(selectedOption);
      try {
        await axios.post(
          `/api/posts/${postId}/update/`,
          {
            title: title,
            user: userInfo.id,
            content: content,
            descriprion: description,
            category: selectedOption,
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        alert("تغییرات ثبت شد.");
        setPostRefresh(!postRefresh);
      } catch (error) {
        console.log(error.toJSON());
        alert("مشکلی پیش آمده است.");
      }
    }
  }

  return (
    <>
      <Form.Group className="mb-3">
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
          value={description}
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
          data={content}
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
      <Form.Group className="mb-3">
        <Form.Label>دسته بندی : </Form.Label>

        <Select
          placeholder="دسته بندی را انتخاب کنید"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          defaultValue={postOpList}
          onChange={setSelectedOption}
          options={opAllCategory}
        />
      </Form.Group>
      <Button
        onClick={handlerEditPost}
        style={{ cursor: "pointer" }}
        className="mt-3"
        variant="primary"
      >
        ثبت تغییرات
      </Button>{" "}
    </>
  );
}

export default PostFields;
