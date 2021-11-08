import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = axios.get("http://127.0.0.1:8000/api/posts");
      setArticles(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Row xs={1} md={1} lg={2} className="g-5 my-2">
        {articles.map((article) => (
          <Col>
            <Article
              title={article.title}
              author={article.author}
              key={article.id}
              kholase={article.kholase}
              pic={article.thumbnail_pic}
              publish_time={article.datetime}
              content={article.content}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
