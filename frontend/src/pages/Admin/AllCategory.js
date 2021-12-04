import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../../components/User";
import getUserInfo from "../../actions/getUserInfo";

function AllCategory() {
  const [category, setCategory] = useState([]);
  const userInfo = getUserInfo();
  console.log(userInfo);
  useEffect(() => {
    async function fetchCategory() {
      const { data } = await axios.get("/api/category/");
      setCategory(data);
    }
    if (userInfo && userInfo.isAdmin) {
      fetchCategory();
    }
  }, []);
  return (
    <div>
      {userInfo && userInfo.isAdmin ? (
        <>
          <section className="recent-posts">
            <div className="section-title">
              <h2>
                <span>لیست دسته بندی ها</span>
              </h2>
            </div>
            <div className="card-columns listrecent">
              {/* hi */}
              {category.map((item) => (
                <div className="card">
                  <div className="card-block">
                    <h2 className="card-title">{item.name}</h2>
                  </div>
                </div>
              ))}
              {/* bye */}
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default AllCategory;
