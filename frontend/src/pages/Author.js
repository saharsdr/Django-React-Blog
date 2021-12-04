import React, { useState, useEffect } from "react";
import AuthorInfo from "../components/AuthorInfo";
import AuthorPosts from "../sections/AuthorPosts";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Author({ postDelet, setPostDelete }) {
  const history = useHistory();
  const url = history.location.pathname;

  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    async function fetchAuthor() {
      const { data } = await axios.get(`/api${url}/`);
      setAuthor(data);
    }
    fetchAuthor();
  }, []);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(`/api${url}/posts/`);
      setPosts(data);
    }
    console.log("hi");
    fetchPosts();
  }, [postDelet]);

  return (
    <div>
      {author.status == "404" ? (
        "این نویسنده وجود ندارد."
      ) : (
        <>
          <AuthorInfo author={author} />
          <AuthorPosts
            setPostDelete={setPostDelete}
            postDelet={postDelet}
            posts={posts}
          />
        </>
      )}
    </div>
  );
}

export default Author;
