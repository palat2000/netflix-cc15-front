import axios from "../../config/axios";
// import { addAccessToken } from "../../utils/local-storage";

const userApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const registerUser = async (body) => {
  const res = await userApi.post("/auth/register", body);
  console.log("🚀 ~ file: userApi.js:10 ~ registerUser ~ res:", res)
  return res.data;
};

export const loginUser = async (body) => {
  const res = await userApi.post("/auth/login", body);
  console.log(res.data);
  return res.data;
};

export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};
