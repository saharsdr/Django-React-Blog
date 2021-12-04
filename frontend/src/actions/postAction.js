import axios from "axios";
export const RemovePost = async (id) => {
  try {
    await axios.get(`/api/posts/${id}/remove/`);
    alert("با موفقیت حذف شد.");
  } catch (error) {
    console.log(error.toJSON());
    alert("مشکلی پیش آمده است.");
  }
};
