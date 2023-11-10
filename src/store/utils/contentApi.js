import axios from "../../config/axios";

export const getAllContent = async () => {
  const res = await axios.get("/user-browse/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("PROFILE_TOKEN")}`,
    },
  });
  return res.data;
};


export const getContentById = async (movieId) => {
  const res = await axios.get(`/user-browse/movie/${movieId}`);
  return res.data;
};
