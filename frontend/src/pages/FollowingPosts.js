import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import RecentPosts from "../sections/RecentPosts";
import getUserInfo from "../actions/getUserInfo";

function FollowingPosts({ search, postRefresh }) {
  const [articles, setArticles] = useState([]);
  const userInfo = getUserInfo();
  document.title = "نوشته های دوستان";
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("/api/user-followings-posts/", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setArticles(data);
    }
    fetchPosts();
  }, [postRefresh]);

  let displayedContacts = articles.filter(function (el) {
    let searchValue = el.title.toLowerCase();
    return searchValue.indexOf(search) !== -1;
  });

  return (
    <div>
      <Hero />
      <RecentPosts articles={displayedContacts} />
    </div>
  );
}

export default FollowingPosts;
