import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContentById } from "../utils/contentApi";

const initialState = {
  modalIsopen: false,
  loading: false
};

export const fetchContentAction = createAsyncThunk('content/fetch', async (movieId, thunkAPI) => {
  try {

    const response = await getContentById(movieId)
    response.movieId = movieId
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
})

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true
    },
    closeModal: (state) => {
      state.modalIsOpen = false
    },
    setData: (state, action) => {
      state[action.payload] = {
        trailerIsMute: false,
      }
    },
    toggleMute: (state, action) => {
      state[action.payload].trailerIsMute = !state[action.payload].trailerIsMute
    },
    // loadTrailer: (state, action) => {
    //   state[action.payload].loadTrailer = true
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentAction.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchContentAction.fulfilled, (state, action) => {
        state[action.payload.movieId].loading = false;
        state[action.payload.movieId].error = null;
        state[action.payload.movieId].data = action.payload;
        state.loading = false
      })
      .addCase(fetchContentAction.rejected, (state, action) => {
        // console.log((action))
        state[action.payload.movieId].loading = false;
        state[action.payload.movieId].error = action.payload;
        state[action.payload.movieId].data = [];
        state.loading = false
      });
  }
});

export const { openModal, closeModal, setData, toggleMute, loadTrailer } = contentSlice.actions
const contentReducer = contentSlice.reducer
export default contentReducer

