import React, { useState, useEffect } from "react";
import FollowingItem from "../components/FollowingItem";
import AuthorInfo from "../components/AuthorInfo";
function Friends() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
