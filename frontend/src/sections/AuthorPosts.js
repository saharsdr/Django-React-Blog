import React from "react";
import AuthorPost from "../components/AuthorPost";

function AuthorPosts({ posts }) {
  return (
    <>
      <div className="graybg authorpage">
        <div className="container">
          <div className="listrecent listrelated">
            {posts.map((post) => (
              <AuthorPost post={post} />
            ))}
            {posts.length == 0
              ? "این نویسنده تا به حال متنی منتشر نکرده است."
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorPosts;
