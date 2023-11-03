import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalIsOpen: false,
    trailerIsMute: true,
}


const movieSlice = createSlice({
    name: 'contentModalSlice',
    initialState: initialState,
    reducers: {
        openModal: (state) => {
            state.modalIsOpen = true
        },
        closeModal: (state) => {
            state.modalIsOpen = false
        },
        toggleMute: (state) => {
            state.trailerIsMute = !state.trailerIsMute
        }
    },
    // extraReducers: (builder) => {

    // }
})

export const { openModal, closeModal, toggleMute } = movieSlice.actions
const movieReducer = movieSlice.reducer
export default movieReducer
