import axios from 'axios'

const userApi = axios.create({
    baseURL : 'http://localhost:8080'
})

export const registerUser = async (body) =>{
    const res = await userApi.post('/auth/register',body)
    return res.data
}

export const loginUser = async (body) => {
    const res = await userApi.post('/auth/login',body)
}