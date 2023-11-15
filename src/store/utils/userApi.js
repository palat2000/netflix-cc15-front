import axios from "../../config/axios";

export const registerUser = async (body) => {
  const res = await axios.post("/auth/register", body);
  return res.data;
};

export const loginUser = async (body) => {
  const res = await axios.post("/auth/login", body);
  console.log(res.data);
  return res.data;
};
export const editUserProfile = async (body) => {
  console.log(body);
  const res = await axios.patch("/user/profile", body);
  console.log("asdasd", res.data);
  return res.data;
};
export const createUserProfile = async (body) => {
  const res = await axios.post("/user/profile", body);
  // console.log("asdasd",res.data)
  return res.data;
};

export const deleteUserProfile = async (param) => {
  // console.log("parammmmmm",param)
  const res = await axios.delete(`/user/profile/${param}`);
  // console.log("asdasd",res.data)
  return res.data;
};
export const chooseUserProfile = async (body) => {
  console.log("sdsdsdsdsdsdsdsds", body);
  const res = await axios.post(`/user/choose-profile`, body);
  // console.log("asdasd",res.data)
  return res.data;
};

export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};

export const checkEmailInDatabase = async (body) => {
  const res = await axios.post("/auth/checkemail", body);
  return res.data;
};

export const getAllUserProfile = async () => {
  const res = await axios.get("/user/allUserProfile");
  return res.data;
};

export const getMeProfile = async () => {
  const res = await axios.get("/user/me");
  return res.data;
};

export const paymentSuccess = async (sessionId) => {
  const res = await axios.post(`/payment/success-subscription/${sessionId}`);
  return res.data;
};
