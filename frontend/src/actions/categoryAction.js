import axios from "axios";
export const RemoveCategory = async (id) => {
  try {
    await axios.get(`/api/category/${id}/remove/`);
    alert("با موفقیت حذف شد.");
  } catch (error) {
    console.log(error.toJSON());
    alert("مشکلی پیش آمده است.");
  }
};
