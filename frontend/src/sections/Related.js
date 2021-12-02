import React from "react";
import RecentPostCard from "../components/RecentPostCard";
function Related({ articles }) {
  console.log(articles);
  return (
    <div className="graybg">
      <div className="container">
        <div className="row listrecent listrelated">
          {/* <!-- begin post --> */}

          <div className="col-md-4">
            {/* <RecentPostCard post={articles[Math.random() * articles.length]} /> */}
          </div>
          <div className="col-md-4">
            {/* <RecentPostCard post={articles[1]} /> */}
          </div>
          <div className="col-md-4">
            {/* <RecentPostCard post={articles[1]} /> */}
          </div>
          {/* <!-- end post --> */}
        </div>
      </div>
    </div>
  );
}

export default Related;
