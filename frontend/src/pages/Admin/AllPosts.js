import React from "react";
import AuthorPosts from "../../sections/AuthorPosts";

function AllPosts({ postRefresh, setPostRefresh, posts, search }) {
  let displayedContacts = posts.filter(function (el) {
    let searchValue1 = el.title.toLowerCase();
    let searchValue2 = el.author.toLowerCase();
    return (
      searchValue1.indexOf(search) !== -1 || searchValue2.indexOf(search) !== -1
    );
  });
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
