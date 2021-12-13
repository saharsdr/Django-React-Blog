import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import Article from "../sections/Article";
import Comments from "../sections/Comments";

import { isFollowUser } from "../actions/followUnfollow";
import getUserInfo from "../actions/getUserInfo";

function Single({ articles }) {
  const history = useHistory();
  const url = history.location.pathname;
  const [likeRefresh, setLikeRefresh] = useState(true);

  const [refresh, setRefresh] = useState(true);
  const [post, setPost] = useState({});
  const [postCategory, setPostCategory] = useState([]);
  const [postComments, setPostComments] = useState([]);

  const [isHeMyFollowing, setIsHeMyFollowing] = useState(false);
  const [fallowingRefresh, setFallowingRefresh] = useState(false);
  const userInfo = getUserInfo();
  useEffect(() => {
    axios
      .get(`/api${url}/`)
      .then((result) => setPost(result.data))
      .then(() => {
        console.log(post);
        console.log(post.user);
        if (userInfo) {
          axios
            .get(`/api/user-following/${post.user}/`, {
              headers: {
                Authorization: `Bearer ${userInfo.token}`,
              },
            })
            .then((result) => {
              if (result.data === "yes") {
                setIsHeMyFollowing(true);
              } else {
                setIsHeMyFollowing(false);
              }
            })
            .catch((error) => console.log(error));
        }
      });
    async function fetchPostCategory() {
      const { data } = await axios.get(`/api${url}/category/`);
      setPostCategory(data);
    }
    fetchPostCategory();
  }, [likeRefresh, fallowingRefresh]);
  useEffect(() => {
    async function fetchPostComments() {
      const { data } = await axios.get(`/api${url}/comments/`);
      setPostComments(data);
    }
    fetchPostComments();
  }, [refresh]);
  post
    ? (document.title = `${post.title}`)
    : (document.title = "نوشته ناموجود");

  return (
    <div>
      <Article
        setLikeRefresh={setLikeRefresh}
        likeRefresh={likeRefresh}
        post={post}
        fallowingRefresh={fallowingRefresh}
        setFallowingRefresh={setFallowingRefresh}
        isHeMyFollowing={isHeMyFollowing}
        category={postCategory}
        comments_len={postComments.length}
      />
      <div className="hideshare"></div>

      <Comments
        refresh={refresh}
        setRefresh={setRefresh}
        id="comments"
        comments={postComments}
        postId={post._id}
        postAuthor={post.user}
      />
      {/* <Related articles={articles} /> */}
    </div>
  );
}

export default Single;
