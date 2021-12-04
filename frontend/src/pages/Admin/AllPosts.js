import React from "react";
import AuthorPosts from "../../sections/AuthorPosts";

function AllPosts({ setPostDelete, postDelet, posts }) {
  return (
    <div>
      <div className="section-title">
        <h2>
          <span>لیست نوشته ها</span>
        </h2>
      </div>
      <AuthorPosts
        setPostDelete={setPostDelete}
        postDelet={postDelet}
        posts={posts}
      />
    </div>
  );
}

export default AllPosts;
