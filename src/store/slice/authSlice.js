import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import { registerUser,loginUser, editUserProfile } from "../utils/userApi";
import { useNavigate } from "react-router-dom";
import { addAccessToken } from "../../utils/local-storage";
import { faL } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  error: null,
  loading: false,
  data: {}
};


export const registerAction = createAsyncThunk('/auth/register', async (input) => {
  try {
    let res = await registerUser(input)
    return res
  } catch (error) {
    throw error.response.data
  }
})

export const loginAction = createAsyncThunk('auth/login',async (input) =>{
  try{
    let res = await loginUser(input)
    return res
  }catch(error){
    throw error.response.data
  }
})
export const editProfileAction = createAsyncThunk('user/profile',async (input) =>{
  try{
    const res = await axios.patch('/user/profile', input)
    console.log(res)
    return res
  }catch(error){
    throw error.response.data
  }
})



export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {resetState: (state) => {
    state.error = null;}
  },
  extraReducers: builder => {
    builder
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(registerAction.pending, (state, action) => {
        state.loading = null;
        state.loading = true;
        
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(loginAction.pending, (state, action) => {
        state.loading = null;
        state.loading = true
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.error = action.error
        state.loading = false
      })
      .addCase(editProfileAction.fulfilled, (state, action)=>{
        state.loading = false
        state.data = action.payload
      })
   
   

  }
});
export const { resetState } = authSlice.actions;
export default authSlice.reducer