import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div className="authorpostbox">
      <div className="card">
        <div className="card-block">
          <div className="d-flex justify-content-between">
            <div>
              نام کاربری: <Link to={`/users/${user.id}`}>{user.username}</Link>
            </div>
            <div>
              نام: <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
            <div>
              نوع کاربر:{" "}
              <Link to={`/users/${user.id}`}>
                {user.idAdmin ? "ادمین" : "کاربر عادی"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
