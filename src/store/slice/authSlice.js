import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "../../config/axios";
import {
  registerUser,
  loginUser,
  editUserProfile,
  createUserProfile,
  deleteUserProfile,
  getMe,
  checkEmailInDatabase,
  chooseUserProfile,
  getAllUserProfile,
  getMeProfile,
  paymentSuccess,
} from "../utils/userApi";

import { useNavigate } from "react-router-dom";
import { addAccessToken } from "../../utils/local-storage";
import { faL } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  error: null,
  loading: true,
  data: { user: null, userProfile: null, allUserProfile: [] },
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
    console.log(res);
    return res;
  } catch (error) {
    throw error.response.data;
  }
});
export const editProfileAction = createAsyncThunk(
  "auth/edit",
  async (input) => {
    try {
      console.log(input);
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
      // throw error.response.data;
      // return thunkAPI.rejectWithValue(error.response.data)
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
export const chooseUserProfileAction = createAsyncThunk(
  "user/profile",
  async (input) => {
    try {
      const res = await chooseUserProfile(input);
      console.log(res);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const getMeAction = createAsyncThunk("auth/me", async () => {
  try {
    const res = await getMe();
    console.log(res);
    return res;
  } catch (error) {
    throw error.response.data;
  }
});

export const checkEmailInDatabaseAction = createAsyncThunk(
  "auth/checkemail",
  async (input) => {
    try {
      const res = await checkEmailInDatabase(input);
      console.log(res);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const getAllUserProfileAction = createAsyncThunk(
  "user/getProfile",
  async () => {
    try {
      const response = await getAllUserProfile();
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const getMeProfileAction = createAsyncThunk("user/me", async () => {
  try {
    const responseUser = await getMe();
    const responseProfile = await getMeProfile();
    const responseAllUserProfile = await getAllUserProfile();
    return { ...responseUser, ...responseProfile, ...responseAllUserProfile };
  } catch (error) {
    throw error.response.data;
  }
});

export const paymentSuccessAction = createAsyncThunk(
  "payment/success",
  async (sessionId) => {
    try {
      const response = await paymentSuccess(sessionId);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const cancelSubscription = createAsyncThunk(
  "cancel/subscription",
  async () => {
    try {
      const response = await axios.patch("/payment/cancel-subscription");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.data = { user: null, userProfile: null, allUserProfile: [] };
      state.loading = false;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data.user = action.payload.user;
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
        state.data.user = action.payload.user;
      })
      .addCase(loginAction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        // state.error = action.error;

        state.loading = false;
      })
      .addCase(editProfileAction.fulfilled, (state, action) => {
        // console.log(current(state))
        state.loading = false;
        const idx = state.data.allUserProfile.findIndex(
          (el) => el?.id === action.payload.userProfile.id
        );
        state.data.allUserProfile[idx] = action.payload.userProfile;
      })
      .addCase(editProfileAction.pending, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(editProfileAction.rejected, (state, action) => {
        state.error = action.error.message;
        // state.data = action.payload;
        // console.log(state)
        // console.log(action.error.message)
      })
      .addCase(getMeAction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.user = action.payload.user;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUserProfileAction.fulfilled, (state, action) => {
        state.data.allUserProfile = state.data.allUserProfile.filter(
          (el) => el.id !== action.payload.deleteUserProfile.id
        );
        console.log(action);
      })
      .addCase(deleteUserProfileAction.rejected, (state, action) => {})
      .addCase(createProfileAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data.allUserProfile = [
          ...state.data.allUserProfile,
          action.payload.userProfile,
        ];
      })
      .addCase(createProfileAction.rejected, (state, action) => {
        console.log("reject");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(chooseUserProfileAction.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(chooseUserProfileAction.fulfilled, (state, action) => {
        // state.data = action.payload
        state.data.userProfile = action.payload.userProfile;
        console.log(action);
        console.log(current(state));
      })
      .addCase(checkEmailInDatabaseAction.pending, (state, action) => {
        state.loading = true;
        state.data = action.payload;
      })
      .addCase(checkEmailInDatabaseAction.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(checkEmailInDatabaseAction.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(getAllUserProfileAction.pending, (state, action) => {})
      .addCase(getAllUserProfileAction.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllUserProfileAction.fulfilled, (state, action) => {
        state.data.allUserProfile = action.payload.allUserProfile;
      })
      .addCase(getMeProfileAction.fulfilled, (state, action) => {
        state.data.user = action.payload.user;
        state.data.userProfile = action.payload.userProfile;
        state.data.allUserProfile = action.payload.allUserProfile;
        state.loading = false;
      })
      .addCase(getMeProfileAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMeProfileAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(paymentSuccessAction.fulfilled, (state, action) => {
        state.data.user = action.payload.user;
        state.data.allUserProfile = action.payload.allUserProfile;
      })
      .addCase(paymentSuccessAction.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(cancelSubscription.fulfilled, (state, action) => {
        state.data.user = action.payload.user;
      })
      .addCase(cancelSubscription.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { resetState, toggleLoading, resetError } = authSlice.actions;
export default authSlice.reducer;
