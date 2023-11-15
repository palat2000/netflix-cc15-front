import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endWatching, getContentById } from "../utils/contentApi";

const initialState = {
    // recentTime: 0,
    // videoId: null,
    onWatchPage: false,
    loading: false,
    videoData: {
        videoId: null,
        videoDuration: null,
        recentWatching: null,
        recentBuffer: null
    }

};

// export const fetchVideoAction = createAsyncThunk('video/fetch', async (movieId, thunkAPI) => {
//     try {
//         const response = await getContentById(movieId)
//         response.movieId = movieId
//         return response;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message);
//     }
// })

export const endWatchingAction = createAsyncThunk('watchPage/endWatching', async (videoData, thunkAPI) => {
    try {
        const response = await endWatching(videoData)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

const watchPageSlice = createSlice({
    name: "watchPage",
    initialState,
    reducers: {
        isOnWatchPage: (state, action) => {
            state.onWatchPage = action.payload
        },
        setVideoId: (state, action) => {
            state.videoData.videoId = action.payload
        },
        isNotWatchPage: (state) => {
            state.onWatchPage = false
        },
        setVideoDuration: (state, action) => {
            state.videoData.videoDuration = action.payload
        },
        setRecentWatching: (state, action) => {
            state.videoData.recentWatching = action.payload
        },
        setRecentBuffer: (state, action) => {
            state.videoData.recentBuffer = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(endWatchingAction.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(endWatchingAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.videoData = {
                    videoId: null,
                    videoDuration: null,
                    recentWatching: null
                };
            })
            .addCase(endWatchingAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.data = [];
            });
    }
});

export const { isOnWatchPage, isNotWatchPage, setVideoId, setRecentWatching, setVideoDuration, setRecentBuffer } = watchPageSlice.actions
const watchPageReducer = watchPageSlice.reducer
export default watchPageReducer

