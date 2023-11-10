import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContent } from "../utils/contentApi";

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const fetchAllContent = createAsyncThunk(
  "allContent/fetch",
  async (payload, thunkAPI) => {
    try {
      const response = await getAllContent();
      return response;
    } catch (err) {
      console.log(thunkAPI.rejectWithValue(err.message))
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const allContentSlice = createSlice({
  name: "allContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(fetchAllContent.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchAllContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default allContentSlice.reducer;
