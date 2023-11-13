import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import allContentSliceReducer from "./slice/allContentSlice";
import contentReducer from "./slice/contentSlice";
import myListReducer from "./slice/myListSlice";
import notificationReducer from "./slice/notificationSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    allContent: allContentSliceReducer,
    content: contentReducer,
    myList: myListReducer,
    notification: notificationReducer,
  },
});

export default store;
