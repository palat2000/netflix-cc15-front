import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContentById } from "../utils/contentApi";

const initialState = {
  modalIsOpen: false,
  movieId: null,
  loading: false,
  trailerIsMute: false
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
    changStatusOpenModal: (state, action) => {
      state.modalIsOpen = action.payload
    },
    toggleMute: (state, action) => {
      state.trailerIsMute = !state.trailerIsMute
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentAction.pending, (state) => {
        state.loading = true
        state.error = null;
        state.data = null;
      })
      .addCase(fetchContentAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchContentAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  }
});

export const { openModal, closeModal, setData, toggleMute, loadTrailer, changStatusOpenModal, setMovieId } = contentSlice.actions
const contentReducer = contentSlice.reducer
export default contentReducer

