import axios from "axios";
import getUserInfo from "./getUserInfo";

export async function isFollowUser(user_id) {
  const userInfo = getUserInfo();
  if (userInfo) {
    await axios
      .get(`/api/user-following/${user_id}/`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((result) => {
        if (result === "yes") {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => console.log(error));
  } else {
    return false;
  }
}

export async function followUser(user_id) {
  const userInfo = getUserInfo();
  if (userInfo) {
    const result = await axios.get(`/api/user-following/${user_id}/create/`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    if (result.data.detail === "Done" || result.data.detail === "Dublicated") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export async function unfollowUser(user_id) {
  const userInfo = getUserInfo();
  if (userInfo) {
    const result = await axios.delete(
      `/api/user-following/${user_id}/delete/`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    if (result.data.detail === "Done" || result.data.detail === "Not Found.") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
