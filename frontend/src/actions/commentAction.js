import axios from "axios";
export const RemoveComment = async (id) => {
  try {
    await axios.get(`/api/comments/${id}/remove/`);
    alert("با موفقیت حذف شد.");
  } catch (error) {
    console.log(error.toJSON());
    alert("مشکلی پیش آمده است.");
  }
};
