import axios from '../../config/axios'
import { addAccessToken } from '../../utils/local-storage'



export const registerUser = async (body) => {
    const res = await axios.post('/auth/register', body)
    return res.data
}

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



