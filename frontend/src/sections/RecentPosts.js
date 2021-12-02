import React from "react";
import { Link } from "react-router-dom";
import RecentPostCard from "../components/RecentPostCard";

function RecentPosts({ articles }) {
  return (
    <>
      <section className="recent-posts">
        <div className="section-title">
          <h2>
            <span>همه مطالب</span>
          </h2>
        </div>
        <div className="card-columns listrecent">
          {articles.map((article) => (
            <RecentPostCard post={article} key={article._id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RecentPosts;
