import React, { useState, useEffect } from "react";
import AuthorPosts from "../../sections/AuthorPosts";

function AllPosts({ postRefresh, setPostRefresh, posts, search }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let displayedContacts = posts.filter(function (el) {
    let searchValue1 = el.title.toLowerCase();
    let searchValue2 = el.author.toLowerCase();
    return (
      searchValue1.indexOf(search) !== -1 || searchValue2.indexOf(search) !== -1
    );
  });
  document.title = " لیست نوشته ها";
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
        posts={displayedContacts}
      />
    </div>
  );
}

export default AllPosts;
