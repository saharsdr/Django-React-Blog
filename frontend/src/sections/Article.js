import React, { useState } from "react";
import ShareArticle from "../components/ShareArticle";
import { Link } from "react-router-dom";
import getUserInfo from "../actions/getUserInfo";

function Article({
  post,
  category,
  comments_len,
  setLikeRefresh,
  likeRefresh,
}) {
  const [thisUserLike, setThisUserLike] = useState(false);
  const userInfo = getUserInfo();
  setLikeRefresh(
    userInfo && post.like && post.like.indexOf(userInfo.id) !== -1
      ? true
      : false
  );
  var post_image =
    post.thumbnail_pic != null
      ? post.thumbnail_pic
      : "/images/placeholder2.jpg";
  function createMarkup() {
    return { __html: post.content };
  }
  return (
    <div className="container">
      <div className="row">
        {/* <!-- Begin Fixed Left Share --> */}
        <div className="col-md-2 col-xs-12">
          <ShareArticle
            setThisUserLike={setThisUserLike}
            thisUserLike={thisUserLike}
            postId={post._id}
            likeCount={post.like ? post.like.length : 0}
            setLikeRefresh={setLikeRefresh}
            likeRefresh={likeRefresh}
            comments_len={comments_len}
          />
        </div>
        {/* <!-- End Fixed Left Share --> */}

        {/* <!-- Begin Post --> */}
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <div className="mainheading">
            {/* <!-- Begin Top Meta --> */}
            <div className="row post-top-meta">
              <div className="col-md-2">
                <Link to={`../users/${post.user}`}>
                  <img
                    className="author-thumb"
                    src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                    alt="Sal"
                  />
                </Link>
              </div>
              <div className="col-md-10">
                <Link className="link-dark" to={`../users/${post.user}`}>
                  {post.author}
                </Link>
                {/* <a href="#" className="btn follow">
                  دنبال کنید
                </a>
                <span className="author-description">
                  Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
                  theme that you're currently previewing. Developing
                  professional premium themes, templates, plugins, scripts since
                  2012.
                </span> */}
                <span className="post-date">
                  {"   "}
                  {post.date}
                  {"   "}
                </span>
                <span className="dot"></span>
                <span className="post-read">
                  {"   "}
                  {post.like != null ? post.like.length : 0} لایک
                </span>
              </div>
            </div>
            {/* <!-- End Top Menta --> */}

            <h1 className="posttitle">{post.title}</h1>
          </div>

          {/* <!-- Begin Featured Image --> */}
          <img className="featured-image img-fluid" src={post_image} alt="" />
          {/* <!-- End Featured Image --> */}

          {/* <!-- Begin Post Content --> */}
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="article-post"
          >
            {/* {post.content} */}
          </div>
          {/* <!-- End Post Content --> */}

          {/* <!-- Begin Tags --> */}
          <div className="after-post-tags">
            <ul className="tags">
              {category.map((item) => (
                <li>
                  <Link to={`/category/${item._id}`}>{item.name}</Link>
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
