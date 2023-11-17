import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllContent } from "../utils/contentApi";
import setCurrenLike from "../../utils/setCurrenLike";

const initialState = {
  mainTrailerIsMute: true
};

const mainTrailerSlice = createSlice({
  name: "mainTrailer",
  initialState,
  reducers: {
    mainTrailerMute: (state) => {
      state.mainTrailerIsMute = true
    },
    mainTrailerUnMute: (state) => {
      state.mainTrailerIsMute = false
    },
  },
});


export const { mainTrailerMute, mainTrailerUnMute } = mainTrailerSlice.actions
export default mainTrailerSlice.reducer;
