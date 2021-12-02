import React from "react";
import FeaturedCard from "../components/FeaturedCard";

function Featured({ articles }) {
  return (
    <div>
      <section className="featured-posts">
        <div className="section-title">
          <h2>
            <span>پیشنهادی</span>
          </h2>
        </div>
        <div className="card-columns listfeaturedtag">
          {articles.map((article) => (
            <FeaturedCard post={article} key={article._id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Featured;
