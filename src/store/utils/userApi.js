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



