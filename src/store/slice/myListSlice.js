import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editMylist } from "../utils/contentApi";

const initialState = {
  data: null,
  error: null,
  loading: false
};

export const editMyListAction = createAsyncThunk('myList/edit', async (movieId, thunkAPI) => {
  try {
    const response = await editMylist(movieId)
    console.log(response)
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
})

// export const getMyListByIdAction = createAsyncThunk('myList/edit', async (movieId, thunkAPI) => {
//   try {
//     const response = await editMylist(movieId)
//     console.log(response)
//     return response;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.message);
//   }
// })

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    // openModal: (state) => {
    //   state.modalIsOpen = true
    // },
    // closeModal: (state) => {
    //   state.modalIsOpen = false
    // },
    // setData: (state, action) => {
    //   state[action.payload] = {
    //     trailerIsMute: false,
    //   }
    // },
    // toggleMute: (state, action) => {
    //   state[action.payload].trailerIsMute = !state[action.payload].trailerIsMute
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editMyListAction.pending, (state) => {
        state.loading = true
      })
      .addCase(editMyListAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(editMyListAction.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  }
});

const myListReducer = myListSlice.reducer
export default myListReducer

