import React from "react";
import AuthorPosts from "../../sections/AuthorPosts";

function AllPosts({ postRefresh, setPostRefresh, posts }) {
  return (
    <div>
      <div className="section-title">
        <h2>
          <span>لیست نوشته ها</span>
        </h2>
      </div>
      <AuthorPosts
        postRefresh={postRefresh}
        setPostRefresh={setPostRefresh}
        posts={posts}
      />
    </div>
  );
}

export default AllPosts;
