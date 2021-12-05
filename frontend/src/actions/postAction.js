import axios from "axios";
import getUserInfo from "./getUserInfo";
export const RemovePost = async (id) => {
  const userInfo = getUserInfo();
  try {
    await axios.get(`/api/posts/${id}/remove/`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    alert("با موفقیت حذف شد.");
  } catch (error) {
    console.log(error.toJSON());
    alert("مشکلی پیش آمده است.");
  }
};
