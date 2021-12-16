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

export const CreatePost = async (
  title,
  content,
  description,
  category,
  postRefresh,
  setPostRefresh,
  history
) => {
  const userInfo = getUserInfo();

  try {
    await axios
      .post(
        "/api/posts-create/",
        {
          title: title,
          user: userInfo.id,
          content: content,
          descriprion: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((result) => {
        setPostRefresh(!postRefresh);
        return result.data;
      });
  } catch (error) {
    console.log(error.toJSON());
    return "error";
  }
};
