import axios from "axios";
import getUserInfo from "./getUserInfo";

export async function isFollowUser(user_id) {
  const userInfo = getUserInfo();
  if (userInfo) {
    const result = await axios.get(`/api/user-following/${user_id}/`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    if (result === "yes") {
      return true;
    } else {
      return false;
    }
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
    if (result.detail === "Done") {
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
    if (result.detail === "Done") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
