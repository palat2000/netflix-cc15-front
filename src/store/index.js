import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import allContentSliceReducer from "./slice/allContentSlice";
import contentReducer from "./slice/contentSlice";
// import myListReducer from "./slice/myListSlice";
import watchPageReducer from "./slice/watchPageSlice";
import notificationReducer from "./slice/notificationSlice";
import searchReducer from "./slice/searchSlice";
import mainTrailerSlice from "./slice/mainTrailerSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    allContent: allContentSliceReducer,
    content: contentReducer,
    mainTrailer: mainTrailerSlice,
    watchPage: watchPageReducer,
    notification: notificationReducer,
    search: searchReducer,
  },
});

export default store;
