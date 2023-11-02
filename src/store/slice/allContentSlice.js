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
      .addCase();
  },
});

// export const {} = allContentSlice.actions;
export default allContentSlice.reducer;
