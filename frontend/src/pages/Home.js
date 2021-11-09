import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("/api/posts/");
      setArticles(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Row xs={1} md={1} lg={2} className="g-5 my-2">
        {articles.map((article) => (
          <Col>
            <Article post={article} key={article._id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
