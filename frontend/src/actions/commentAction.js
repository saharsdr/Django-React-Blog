import axios from "axios";
import getUserInfo from "./getUserInfo";
export const RemoveComment = async (id) => {
  const userInfo = getUserInfo();
  try {
    await axios.get(`/api/comments/${id}/remove/`, {
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
