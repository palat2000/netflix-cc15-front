import axios from "../../config/axios";

export const getAllContent = async () => {
  const res = await axios.get("/user-browse/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("PROFILE_TOKEN")}`,
    },
  });
  return res.data;
};
