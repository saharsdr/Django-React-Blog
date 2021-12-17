import React, { useState, useEffect } from "react";
import AuthorInfo from "../components/AuthorInfo";
import AuthorPosts from "../sections/AuthorPosts";
import { useHistory } from "react-router-dom";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";

function Author({ postRefresh, setPostRefresh }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const url = history.location.pathname;

  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState([]);

  const [isHeMyFollowing, setIsHeMyFollowing] = useState(false);
  const [fallowingRefresh, setFallowingRefresh] = useState(false);
  const userInfo = getUserInfo();

  useEffect(() => {
    axios.get(`/api${url}/`).then((result) => {
      setAuthor(result.data);
      if (userInfo) {
        axios
          .get(`/api/user-following/${result.data.id}/`, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          })
          .then((resultt) => {
            if (resultt.data === "yes") {
              setIsHeMyFollowing(true);
            } else {
              setIsHeMyFollowing(false);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  }, [fallowingRefresh]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(`/api${url}/posts/`);
      setPosts(data);
    }
    fetchPosts();
  }, [postRefresh]);

  author.status == "404"
    ? (document.title = "کاربر ناموجود")
    : (document.title = `صفحه ی ${author.name}`);

  return (
    <div>
      {author.status == "404" ? (
        "این نویسنده وجود ندارد."
      ) : (
        <>
          <AuthorInfo
            isHeMyFollowing={isHeMyFollowing}
            fallowingRefresh={fallowingRefresh}
            setFallowingRefresh={setFallowingRefresh}
            author={author}
          />
          <AuthorPosts
            setPostRefresh={setPostRefresh}
            postRefresh={postRefresh}
            posts={posts}
          />
        </>
      )}
    </div>
  );
}

export default Author;
