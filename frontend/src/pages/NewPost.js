import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react/dist/ckeditor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Button } from "react-bootstrap";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CreatePost } from "../actions/postAction";

function NewPost({ postRefresh, setPostRefresh }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const animatedComponents = makeAnimated();
  const userInfo = getUserInfo();
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
  document.title = " پست جدید";
  let opList = [];
  opList = category.map((item) => ({ value: item._id, label: item.name }));

  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState(null);
  async function handlerSavePost() {
    if (userInfo) {
      if (title == "" || content == "" || description == "") {
        alert("فیلد ها را پر کنید. ");
        return;
      }

      const selectedCategory = selectedOption
        ? selectedOption.map((item) => item.value)
        : [];
      const status = CreatePost(
        title,
        content,
        description,
        selectedCategory,
        postRefresh,
        setPostRefresh,
        history
      );
      if (status === "error") {
        alert("مشکلی پیش آمده است.");
      } else {
        setPostId(status._id);
        console.log(postId);
        try {
          const { data } = await axios.post("/api/posts-image/", formData, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          });
          console.warn(data);
        } catch (error) {
          console.error(error);
        }

        history.push("/");
      }
      console.log(selectedOption);
    }
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("post_id", postId);

    setFormData(formData);
  };

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
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>تصویر را انتخاب کنید</Form.Label>
        <Form.Control
          placeholder="تصویر را انتخاب کنید"
          type="file"
          onChange={uploadFileHandler}
        />
        {/* <Form.File
        // id="image-file"
        // label="تصویر انتخاب کن"
        // custom
        // onChange={uploadFileHandler}
        /> */}
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
          data=""
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
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={opList}
        />
      </Form.Group>
      <Button
        onClick={handlerSavePost}
        style={{ cursor: "pointer" }}
        className="mt-3"
        variant="primary"
      >
        دخیره
      </Button>{" "}
    </div>
  );
}

export default NewPost;
