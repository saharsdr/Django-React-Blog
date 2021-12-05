import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../../components/User";
import getUserInfo from "../../actions/getUserInfo";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const userInfo = getUserInfo();
  console.log(userInfo);
  // const userToken = `Bearer `;
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get("/api/users/", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setUsers(data);
    }
    if (userInfo && userInfo.isAdmin) {
      fetchUsers();
    }
  }, []);
  return (
    <div>
      <div className="section-title">
        <h2>
          <span>لیست کاربرها</span>
        </h2>
      </div>
      {userInfo && userInfo.isAdmin
        ? users.map((item) => <User user={item} />)
        : ""}
    </div>
  );
}

export default AllUsers;
