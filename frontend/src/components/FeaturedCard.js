import React from "react";
import { Link } from "react-router-dom";

function FeaturedCard({ post }) {
  return (
    <div className="card" key={post._id}>
      <div className="row">
        <div className="col-md-5 wrapthumbnail">
          <Link to={`/posts/${post._id}`}>
            <div
              className="thumbnail"
              style={{
                backgroundImage: `url(${
                  post.thumbnail_pic != null
                    ? post.thumbnail_pic
                    : "/images/placeholder1.jpg"
                })`,
              }}
            ></div>
          </Link>
        </div>
        <div className="col-md-7">
          <div className="card-block">
            <h2 className="card-title">
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
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
                    <Link to={`/users/${post.user}`}>{post.author}</Link>
                  </span>
                  <br />
                  <span className="post-date">{post.date}</span>
                  <span className="dot"></span>
                  <span className="post-read">
                    {"   "}
                    {post.like.length} لایک
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
