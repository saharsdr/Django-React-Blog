import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import getUserInfo from "../actions/getUserInfo";
import FollowingItem from "../components/FollowingItem";
import AuthorInfo from "../components/AuthorInfo";

function Friends() {
  const location = useLocation().pathname;

  const x1 = location.replace("following", "");
  const x2 = x1.replace("user", "");
  const userId = x2.replaceAll("/", "");

  const [author, setAuthor] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const [isHeMyFollowing, setIsHeMyFollowing] = useState(false);
  const [fallowingRefresh, setFallowingRefresh] = useState(false);
  const userInfo = getUserInfo();

  useEffect(() => {
    axios
      .get(`/api/users/${userId}/`)
      .then((result) => {
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
      })
      .catch((error) => {
        console.log(error.toJSON());
        setErrorMsg("متاسفانه با خطا مواجه شده ایم.");
      });
  }, [fallowingRefresh]);

  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    async function fetchFollowing() {
      axios
        .get(`/api/user/${userId}/following/`)
        .then((result) => {
          setFollowingList(result.data);
        })
        .catch((error) => {
          console.log(error.toJSON());
          setErrorMsg("متاسفانه با خطا مواجه شده ایم.");
        });
    }
    fetchFollowing();
    async function fetchFollower() {
      axios
        .get(`/api/user/${userId}/follower/`)
        .then((result) => {
          setFollowerList(result.data);
        })
        .catch((error) => {
          console.log(error.toJSON());
          // setErrorMsg("متاسفانه با خطا مواجه شده ایم.");
        });
    }
    fetchFollower();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* {errorMsg === "" ? ( */}
      <>
        <div className="p-5" style={{ backgroundColor: "#fff" }}>
          <AuthorInfo
            isHeMyFollowing={isHeMyFollowing}
            fallowingRefresh={fallowingRefresh}
            setFallowingRefresh={setFallowingRefresh}
            author={author}
          />
          <div className="p-5" style={{ backgroundColor: "#f5f5f5" }}>
            {followingList && followingList.length > 0 && (
              <>
                <div className="section-title">
                  <h2>
                    <span>دنبال شوندگان</span>
                  </h2>
                </div>
                {followingList &&
                  followingList.map((user) => (
                    <FollowingItem username={user.username} userId={user.id} />
                  ))}
              </>
            )}
            {followerList && followerList.length > 0 && (
              <>
                <div className="section-title pt-3">
                  <h2>
                    <span>دنبال کنندگان</span>
                  </h2>
                </div>
                {followerList &&
                  followerList.map((user) => (
                    <FollowingItem username={user.username} userId={user.id} />
                  ))}
              </>
            )}
          </div>
        </div>
      </>
      {/* ) : ( */}
      {/* <h2>متاسفانه با خطا مواجه اید.</h2> */}
      {/* )} */}
    </>
  );
}

export default Friends;
