import React from "react";

function AuthorInfo({ author }) {
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
                <div className="sociallinks">
                  <a target="_blank" href="https://www.facebook.com//">
                    <i className="fa fa-facebook"></i>
                  </a>{" "}
                  <span className="dot"></span>{" "}
                  <a target="_blank" href="https://plus.google.com/">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://twitter.com/"
                  className="btn follow"
                >
                  Follow
                </a>
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
