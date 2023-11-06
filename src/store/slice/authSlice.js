import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import {
  registerUser,
  loginUser,
  editUserProfile,
  createUserProfile,
  deleteUserProfile,
  getMe,
} from "../utils/userApi";

import { useNavigate } from "react-router-dom";
import { addAccessToken } from "../../utils/local-storage";
import { faL } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  error: null,
  loading: false,
  data: {},
};

export const registerAction = createAsyncThunk(
  "auth/register",
  async (input) => {
    try {
      let res = await registerUser(input);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const loginAction = createAsyncThunk("auth/login", async (input) => {
  try {
    let res = await loginUser(input);
    return res;
  } catch (error) {
    throw error.response.data;
  }
});
export const editProfileAction = createAsyncThunk(
  "auth/edit",
  async (input) => {
    try {
      const res = await editUserProfile(input);
      console.log(res);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const createProfileAction = createAsyncThunk(
  "auth/create",
  async (input) => {
    try {
      const res = await createUserProfile(input);
      console.log(res);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);
export const deleteUserProfileAction = createAsyncThunk(
  "auth/delete",
  async (input) => {
    try {
      const res = await deleteUserProfile(input);
      console.log(res);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const getMeAction = createAsyncThunk("auth/me", async () => {
  const res = await getMe();
  return res;
});

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.user;
      })
      .addCase(registerAction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.user;
      })
      .addCase(loginAction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(editProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(editProfileAction.pending, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(editProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMeAction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
        state.data = {};
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload.user;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = {};
      })
      .addCase(deleteUserProfileAction.fulfilled, (state, action) => {
        state.data.allUserProfile = state.data.allUserProfile.filter(
          (el) => el.id !== action.payload.deleteUserProfile.id
        );
        console.log(action);
      })
      .addCase(deleteUserProfileAction.rejected, (state, action) => {

      })
      .addCase(createProfileAction.fulfilled, (state,action)=> {
        state.data.allUserProfile 
      })
  },
});
export const { resetState } = authSlice.actions;
export default authSlice.reducer;
