import React from "react";

function FollowingItem() {
  return (
    <div className="d-flex w-75 justify-content-between mx-auto py-2 px-3  follow-card">
      <div>
        <span className="title">name</span>
      </div>
      <div>
        <a href="">follow/ unfollow</a>
      </div>
    </div>
  );
}

export default FollowingItem;
