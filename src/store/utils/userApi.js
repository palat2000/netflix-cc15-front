import axios from 'axios'
import { addAccessToken } from '../../utils/local-storage'

const userApi = axios.create({
    baseURL : 'http://localhost:8888'
})

export const registerUser = async (body) =>{
    const res = await userApi.post('/auth/register',body)
    return res.data
}

export const loginUser = async (body) => {
    const res = await userApi.post('/auth/login',body)
}