import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../store/slice/authSlice";

const store = configureStore({
    reducer:{
        user: authReducer
    }
});

export default store;
