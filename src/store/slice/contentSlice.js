import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsopen: false
};

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
        trailerIsMute: true,
      }
    },
    toggleMute: (state, action) => {
      console.log(action.payload)
      state[action.payload].trailerIsMute = !state[action.payload].trailerIsMute
    }
  },
  // extraReducers: (builder) => { },
});

export const { openModal, closeModal, setData, toggleMute } = contentSlice.actions
const contentReducer = contentSlice.reducer
export default contentReducer

