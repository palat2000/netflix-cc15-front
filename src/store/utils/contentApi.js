import axios from "../../config/axios";

export const getAllContent = async () => {
  const res = await axios.get("/user-browse/");
  return res.data;
};
