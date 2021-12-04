import React from "react";
import AuthorPost from "../components/AuthorPost";

function AuthorPosts({ posts,  postDelet, setPostDelete }) {
  return (
    <>
      <div className="graybg authorpage">
        <div className="container">
          <div className="listrecent listrelated">
            {posts.map((post) => (
              <AuthorPost post={post} key={post._id}  postDelet={postDelet} setPostDelete={setPostDelete} />
            ))}
            {posts.length === 0
              ? "این نویسنده تا به حال متنی منتشر نکرده است."
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorPosts;
