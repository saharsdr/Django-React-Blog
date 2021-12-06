import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getUserInfo from "../actions/getUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RemovePost } from "../actions/postAction";

function AuthorPost({ post, postRefresh, setPostRefresh }) {
  const userInfo = getUserInfo();
  function handlerRemovePost() {
    RemovePost(post._id);
    setPostRefresh(!postRefresh);
  }
  return (
    <div className="authorpostbox">
      <div className="card">
        <Link to={`/posts/${post._id}`}>
          <img
            className="img-fluid img-thumb"
            src={post.thumbnail_pic}
            alt=""
          />
        </Link>
        <div className="card-block">
          <div className="d-flex justify-content-between">
            <h2 className="card-title">
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
            {userInfo && (userInfo.isAdmin || userInfo.id === post.user) ? (
              <div className="icons">
                <FontAwesomeIcon
                  icon={faEdit}
                  color="gray"
                  size="sm"
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                />
                {"  "}
                <FontAwesomeIcon
                  onClick={handlerRemovePost}
                  icon={faTrash}
                  color="red"
                  size="sm"
                  style={{ cursor: "pointer" }}
                />
                {"  "}
              </div>
            ) : (
              ""
            )}
          </div>

          <h4 className="card-text">{post.descriprion}</h4>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <Link to={`/users/${post.user}`}>
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </span>
              <span className="author-meta">
                <span className="post-name">
                  <Link to={`/users/${post.user}`}>{post.username}</Link>
                </span>
                <br />
                <span className="post-date">{post.date}</span>
                <span className="dot"></span>
                <span className="post-read">
                  {"   "}
                  {post.like.length}لایک
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPost;
