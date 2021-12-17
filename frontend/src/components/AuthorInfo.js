import React, { useState, useEffect } from "react";

import axios from "axios";
import getUserInfo from "../actions/getUserInfo";
import { followUser, unfollowUser } from "../actions/followUnfollow";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function AuthorInfo({
  author,
  isHeMyFollowing,
  fallowingRefresh,
  setFallowingRefresh,
}) {
  const userInfo = getUserInfo();
  const history = useHistory();
  const location = history.location.pathname;

  let flaq = true;
  if (location.includes("following")) {
    flaq = false;
  }
  function follow() {
    followUser(author.id).then((result) => {
      if (result) {
        alert("مخاطب مورد نظر فالو شد.");
        setFallowingRefresh(!fallowingRefresh);
      }
    });
  }
  function unfollow() {
    unfollowUser(author.id).then((result) => {
      if (result) {
        alert("مخاطب مورد نظر آنفالو شد.");
        setFallowingRefresh(!fallowingRefresh);
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 col-md-offset-2">
          <div className="mainheading">
            <div className="row post-top-meta authorpage">
              <div className="col-md-10 col-xs-12">
                <h1>{author.username}</h1>
                <span className="author-description">یک نویسنده ی ساده...</span>
                <div className="py-2">
                  <Link to={`/user/${author.id}/following`}>
                    دنبال کنندگان و دنبال شوندگان
                  </Link>
                </div>
                {flaq && userInfo && !(userInfo.id === author.id) ? (
                  isHeMyFollowing ? (
                    <a
                      onClick={unfollow}
                      style={{
                        cursor: "pointer",
                        color: "white",
                        background: "#0078f4",
                      }}
                      className="btn  follow"
                    >
                      دنبال می کنید
                    </a>
                  ) : (
                    <a
                      onClick={follow}
                      style={{ cursor: "pointer", borderColor: "#0078f4" }}
                      className="btn follow "
                    >
                      دنبال کنید
                    </a>
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-2 col-xs-12">
                <img
                  className="author-thumb"
                  src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                  alt="Sal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
