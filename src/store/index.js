import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import allContentSliceReducer from "./slice/allContentSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    allContent: allContentSliceReducer,
  },
});

export default store;
