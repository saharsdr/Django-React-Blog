import React from "react";
import ShareArticle from "../components/ShareArticle";
import { Link } from "react-router-dom";

function Article({ post, category }) {
  var post_image =
    post.thumbnail_pic != null
      ? post.thumbnail_pic
      : "/images/placeholder2.jpg";
  return (
    <div className="container">
      <div className="row">
        {/* <!-- Begin Fixed Left Share --> */}
        <div className="col-md-2 col-xs-12">
          <ShareArticle />
        </div>
        {/* <!-- End Fixed Left Share --> */}

        {/* <!-- Begin Post --> */}
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <div className="mainheading">
            {/* <!-- Begin Top Meta --> */}
            <div className="row post-top-meta">
              <div className="col-md-2">
                <a href="author.html">
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </a>
              </div>
              <div className="col-md-10">
                <a className="link-dark" href="author.html">
                  {post.author}
                </a>
                {/* <a href="#" className="btn follow">
                  دنبال کنید
                </a>
                <span className="author-description">
                  Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
                  theme that you're currently previewing. Developing
                  professional premium themes, templates, plugins, scripts since
                  2012.
                </span> */}
                <span className="post-date">{post.date}</span>
                <span className="dot"></span>
                <span className="post-read">6 min read</span>
              </div>
            </div>
            {/* <!-- End Top Menta --> */}

            <h1 className="posttitle">{post.title}</h1>
          </div>

          {/* <!-- Begin Featured Image --> */}
          <img className="featured-image img-fluid" src={post_image} alt="" />
          {/* <!-- End Featured Image --> */}

          {/* <!-- Begin Post Content --> */}
          <div className="article-post">{post.content}</div>
          {/* <!-- End Post Content --> */}

          {/* <!-- Begin Tags --> */}
          <div className="after-post-tags">
            <ul className="tags">
              {category.map((item) => (
                <li>
                  <Link to="#">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- End Tags --> */}
        </div>
        {/* <!-- End Post --> */}
      </div>
    </div>
  );
}

export default Article;
