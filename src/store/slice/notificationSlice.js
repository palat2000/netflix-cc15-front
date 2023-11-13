import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const initialState = {
  data: [],
  loading: false,
};

export const fetchNotification = createAsyncThunk(
  "notification/fetch",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("/user/notification");
      return response.data;
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(err.message));
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotification.fulfilled, (state, action) => {
        state.data = action.payload.notification;
        state.loading = false;
      })
      .addCase(fetchNotification.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default notificationSlice.reducer;
