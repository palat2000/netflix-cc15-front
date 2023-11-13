import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endWatching, getContentById } from "../utils/contentApi";

const initialState = {
    // recentTime: 0,
    onWatchPage: false,
    loading: false,

};

// export const fetchVideoAction = createAsyncThunk('video/fetch', async (movieId, thunkAPI) => {
//     try {
//         const response = await getContentById(movieId)
//         response.movieId = movieId
//         console.log(response)
//         return response;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message);
//     }
// })

export const endWatchingAction = createAsyncThunk('video/endWatching', async (recentTime, thunkAPI) => {
    try {
        const response = await endWatching(recentTime)
        console.log(response)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

const watchPageSlice = createSlice({
    name: "watchPage",
    initialState,
    reducers: {
        isOnWatchPage: (state, action) => {
            state.onWatchPage = true
        },
        isNotWatchPage: (state, action) => {
            state.onWatchPage = false
        },
        setRecentTime: (state, action) => {
            state.recentTime = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(endWatchingAction.pending, (state) => {
                state.loading = true
                state.error = null;
                // state.onWatchPage = null;
            })
            .addCase(endWatchingAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.recentTime = 0;
            })
            .addCase(endWatchingAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.data = [];
            });
    }
});

export const { isOnWatchPage, isNotWatchPage, setRecentTime } = watchPageSlice.actions
const watchPageReducer = watchPageSlice.reducer
export default watchPageReducer

