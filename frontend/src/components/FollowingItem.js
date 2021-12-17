import React from "react";
import { Link } from "react-router-dom";

function FollowingItem({ username, userId }) {
  return (
    <div className="d-flex w-75 justify-content-start mx-auto py-2 px-3  follow-card">
      <div>
        <span className="title">
          <Link to={`/users/${userId}`}>{username}</Link>
        </span>
      </div>
    </div>
  );
}

export default FollowingItem;
