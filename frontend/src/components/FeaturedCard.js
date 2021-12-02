import React from "react";
import { Link } from "react-router-dom";

function FeaturedCard() {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-5 wrapthumbnail">
          <Link to="/">
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(assets/img/demopic/1.jpg)` }}
            ></div>
          </Link>
        </div>
        <div className="col-md-7">
          <div className="card-block">
            <h2 className="card-title">
              <Link to="post.html">
                We're living some strange times -- Title --
              </Link>
            </h2>
            <h4 className="card-text">
              -- Description --This is a longer card with supporting text below
              as a natural lead-in to additional content. This content is a
              little bit longer.
            </h4>
            <div className="metafooter">
              <div className="wrapfooter">
                <span className="meta-footer-thumb">
                  <Link to="author.html">
                    <img
                      className="author-thumb"
                      src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                      alt="Sal"
                    />
                  </Link>
                </span>
                <span className="author-meta">
                  <span className="post-name">
                    <Link to="author.html">Steve-- Author --</Link>
                  </span>
                  <br />
                  <span className="post-date">22 July 2017</span>
                  <span className="dot"></span>
                  <span className="post-read">6 min read</span>
                </span>
                <span className="post-read-more">
                  <Link to="post.html" title="Read Story">
                    <svg
                      className="svgIcon-use"
                      width="25"
                      height="25"
                      viewbox="0 0 25 25"
                    >
                      <path
                        d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
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
