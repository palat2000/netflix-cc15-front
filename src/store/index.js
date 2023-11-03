import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import movieReducer from "./slice/movieSlice";

const store = configureStore({
    reducer: {
        user: authReducer,
        movie: movieReducer
    }
});

export default store;
