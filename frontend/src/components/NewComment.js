import React from "react";

function NewComment() {
  return (
    <>
      <div className="comments">
        <h2>نظر جدید</h2>

        <form className="comments__form">
          <div className="comments__form-info">
            <div className="comments__form-field">
              <input
                id="comments__form-label-name"
                name="author"
                placeholder="نام خود را وارد کنید"
                type="text"
                className="comments__form-input"
              />
              <label
                className="comments__form-label"
                for="comments__form-label-name"
              >
                <span className="comments__form-label-text">نام</span>
              </label>
            </div>
          </div>

          <div className="comments__form-text">
            <div className="comments__form-field">
              <textarea
                id="comments__form-label-text"
                name="author"
                placeholder="نظر من این است که..."
                type="text"
                className="comments__form-input comments__form-textarea"
              ></textarea>
              <label
                className="comments__form-label"
                for="comments__form-label-text"
              >
                <span className="comments__form-label-text">نظر شما</span>
              </label>
            </div>
          </div>
          <input
            name="submit"
            type="submit"
            id="submit"
            className="comments__form-submit"
            value="ثبت نظر"
          />
        </form>
      </div>
    </>
  );
}

export default NewComment;
