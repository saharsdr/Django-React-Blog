import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../../components/User";
import getUserInfo from "../../actions/getUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RemoveCategory } from "../../actions/categoryAction";
import { Link } from "react-router-dom";

function AllCategory({ search }) {
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const userInfo = getUserInfo();
  console.log(userInfo);
  useEffect(() => {
    async function fetchCategory() {
      const { data } = await axios.get("/api/category/", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setCategory(data);
    }
    if (userInfo && userInfo.isAdmin) {
      fetchCategory();
    }
  }, [refresh]);
  function handlerRemoveCategory(id) {
    RemoveCategory(id);
    setRefresh(!refresh);
  }
  let displayedContacts = category.filter(function (el) {
    let searchValue1 = el.name.toLowerCase();
    return searchValue1.indexOf(search) !== -1;
  });
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
              {displayedContacts.map((item) => (
                <div className="card">
                  <div className="card-block">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title">
                        <Link to={`/category/${item._id}`}>{item.name}</Link>
                      </h2>

                      <FontAwesomeIcon
                        onClick={() => handlerRemoveCategory(item._id)}
                        icon={faTrash}
                        color="red"
                        size="sm"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
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
