import React, { useState, useEffect } from "react";
import AuthorInfo from "../components/AuthorInfo";
import AuthorPosts from "../sections/AuthorPosts";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Author() {
  const history = useHistory();
  const url = history.location.pathname;
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(`/api${url}/posts/`);
      setPosts(data);
    }
    fetchPosts();
    async function fetchAuthor() {
      const { data } = await axios.get(`/api${url}/`);
      setAuthor(data);
    }
    fetchAuthor();
  }, []);

  return (
    <div>
      {author.status == "404" ? (
        "این نویسنده وجود ندارد."
      ) : (
        <>
          <AuthorInfo author={author} />
          <AuthorPosts posts={posts} />
        </>
      )}
    </div>
  );
}

export default Author;