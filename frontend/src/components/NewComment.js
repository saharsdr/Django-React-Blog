import React, { useState, useEffect } from "react";
import axios from "axios";

function NewComment({ postId, setRefresh, refresh }) {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  async function newComment() {
    if (content === "" || name === "") {
      alert("لطفا فیلدها را پر کنید.");
      return;
    }
    try {
      await axios.post(`/api/posts/${postId}/comment-create/`, {
        post: postId,
        content: content,
        name: name,
      });

      alert("کامنت شما ثبت شد.");
      clear();
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
      alert("مشکلی پیش آمده است.");
    }
  }
  function clear() {
    setContent("");
    setName("");
  }
  return (
    <div className="comments">
      <h2>نظر جدید</h2>

      <div className="comments__form">
        <div className="comments__form-info">
          <div className="comments__form-field">
            <input
              required
              onChange={(e) => setName(e.target.value)}
              id="comments__form-label-name"
              name="name"
              value={name}
              placeholder="نام خود را وارد کنید"
              type="text"
              className="comments__form-input"
            />
            <label
              className="comments__form-label"
              htmlFor="comments__form-label-name"
            >
              <span className="comments__form-label-text">نام</span>
            </label>
          </div>
        </div>

        <div className="comments__form-text">
          <div className="comments__form-field">
            <textarea
              required="required"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              id="comments__form-label-text"
              name="content"
              placeholder="نظر من این است که..."
              type="text"
              className="comments__form-input comments__form-textarea"
            ></textarea>
            <label
              className="comments__form-label"
              htmlFor="comments__form-label-text"
            >
              <span className="comments__form-label-text">نظر شما</span>
            </label>
          </div>
        </div>
        <input
          name="submit"
          type="button"
          id="submit"
          className="comments__form-submit"
          value="ثبت نظر"
          onClick={newComment}
        />
      </div>
    </div>
  );
}

export default NewComment;
