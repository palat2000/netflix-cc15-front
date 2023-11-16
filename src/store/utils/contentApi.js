import axios from "../../config/axios";

export const getAllContent = async (isTVShows) => {
  const A = isTVShows ? `/user-browse/?isTVShow=${isTVShows}` : "/user-browse/";

  const res = await axios.get(A);
  return res.data;
};

export const getContentById = async (movieId) => {
  const res = await axios.get(`/user-browse/movie/${movieId}`);
  console.log(res.data)
  return res.data;
};

export const editMylist = async (movieId) => {
  const res = await axios.post("/user-browse/mylist", { movieId: movieId });
  return res.data;
};

export const getMyListById = async (movieId) => {
  const res = await axios.get(`/user-browse/mylist/${movieId}`);
  return res.data;
};

export const editLike = async (movieId) => {
  const res = await axios.patch("/user-browse/Like", { movieId: movieId });
  return res.data;
};

export const startWatching = async (videoId) => {
  console.log(videoId);
  const res = await axios.get(`/user-browse/getVideo/${videoId}`);
  await axios.get(`/user-browse/startWatching/${videoId}`);
  console.log(res.data);
  return res.data;
};

export const endWatching = async (videoData) => {
  console.log(videoData);
  const res = await axios.post(`/user-browse/endWatching`, videoData);
  console.log(res.data);
  return res.data;
};
