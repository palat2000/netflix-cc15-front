import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import allContentSliceReducer from "./slice/allContentSlice";
import contentReducer from "./slice/contentSlice";
import myListReducer from "./slice/myListSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    allContent: allContentSliceReducer,
    content: contentReducer,
    myList: myListReducer
  },
});

export default store;
