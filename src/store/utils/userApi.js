import axios from "../../config/axios";
<<<<<<< HEAD
// import { addAccessToken } from "../../utils/local-storage";
=======
>>>>>>> develop




export const registerUser = async (body) => {
<<<<<<< HEAD
  const res = await userApi.post("/auth/register", body);
  console.log("🚀 ~ file: userApi.js:10 ~ registerUser ~ res:", res)
  return res.data;
};
=======
    const res = await axios.post('/auth/register', body)
    return res.data
}
>>>>>>> develop

export const loginUser = async (body) => {
    const res = await axios.post('/auth/login', body)
    console.log(res.data)
    return res.data
}
export const editUserProfile = async (body) => {

    const res = await axios.patch('/user/profile', body)
    // console.log("asdasd",res.data)
    return res.data
}
export const createUserProfile = async (body) => {

    const res = await axios.post('/user/profile', body)
    // console.log("asdasd",res.data)
    return res.data
}
export const deleteUserProfile = async (param) => {
console.log("parammmmmm",param)
    const res = await axios.delete(`/user/profile/${param}`)
    console.log("asdasd",res.data)
    return res.data
}





export const getMe = async () => {
  const res = await axios.get("/auth/me");
  return res.data;
};
