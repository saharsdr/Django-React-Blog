import React from "react";
import FollowingItem from "../components/FollowingItem";
import AuthorInfo from "../components/AuthorInfo";
function Friends() {
  return (
    <div className="p-5" style={{ backgroundColor: "#f5f5f5" }}>
      {/* <AuthorInfo /> */}
      <FollowingItem />
      <FollowingItem />
      <FollowingItem />
      <FollowingItem />
    </div>
  );
}

export default Friends;
