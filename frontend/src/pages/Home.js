import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Featured from "../sections/Featured";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../components/Hero";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("/api/posts/");
      setArticles(data);
      console.log(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Hero />
      <Featured articles={articles} />
      <RecentPosts articles={articles} />
    </div>
  );
}

export default Home;
