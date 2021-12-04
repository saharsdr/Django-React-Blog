import axios from "axios";
import React from "react";
import { RemoveComment } from "../actions/commentAction";
import getUserInfo from "../actions/getUserInfo";
function Comment({ data, key, setRefresh, refresh, postAuthor }) {
  const userInfo = getUserInfo();
  function handlerRemoveComment() {
    RemoveComment(data._id);
    setRefresh(!refresh);
  }

  var author_varify =
    data.author != null
      ? "fa fa-check-circle-o comment_check-icon text-primary"
      : "fa fa-check-circle-o comment_check-icon text-muted";
  return (
    <div className="comment__card p-3 mt-2" key={key}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="user d-flex flex-row align-items-center">
          {" "}
          <img
            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
            width="30"
            className="comment__user-img rounded-circle mr-2"
          />{" "}
          <span>
            <small className="font-weight-bold text-primary">{data.name}</small>{" "}
            <small className="font-weight-bold">{data.content}</small>
          </span>{" "}
        </div>{" "}
        <small>{data.date}</small>
      </div>
      <div className="action d-flex justify-content-between mt-2 align-items-center">
        <div className="comment__reply px-4">
          {" "}
          {userInfo &&
          (userInfo.id === data.author || userInfo.id === postAuthor) ? (
            <>
              <small onClick={handlerRemoveComment}>Remove</small>{" "}
              <span className="comment__dots"></span>
            </>
          ) : (
            ""
          )}
          <small>Reply</small> <span className="comment__dots"></span>{" "}
          <small>Translate</small>{" "}
        </div>
        <div className="comment__icons align-items-center">
          {" "}
          <i className={author_varify}></i>{" "}
        </div>
      </div>
    </div>
  );
}

export default Comment;
