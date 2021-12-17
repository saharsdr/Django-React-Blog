import React, { useState, useEffect } from "react";

import Featured from "../sections/Featured";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";
import getUserInfo from "../actions/getUserInfo";

function Home({ userArticles, articles, search }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let displayedContacts = articles.filter(function (el) {
    let searchValue = el.title.toLowerCase();
    return searchValue.indexOf(search) !== -1;
  });
  const userInfo = getUserInfo();
  document.title = "خانه";
  return (
    <div>
      <Hero />
      {userInfo && <Featured articles={userArticles} />}
      <RecentPosts articles={displayedContacts} />
    </div>
  );
}

export default Home;
