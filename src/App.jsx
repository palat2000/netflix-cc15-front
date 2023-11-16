import { useEffect } from "react";
import Route from "./router/Route";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserProfileAction,
  getMeAction,
  getMeProfileAction,
  toggleLoading,
} from "./store/slice/authSlice";
import {
  getAccessToken,
  getChooseProfileAccessToken,
} from "./utils/local-storage";
import LoadingPage from "./pages/LoadingPage";
import {
  endWatchingAction,
  isNotWatchPage,
} from "./store/slice/watchPageSlice";
import { useLocation } from "react-router-dom";
import { nativeSelectClasses } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => store.user);

  useEffect(() => {
    if (getAccessToken()) {
      // dispatch(getMeAction());
      dispatch(isNotWatchPage());
      if (getChooseProfileAccessToken()) {
        dispatch(getMeProfileAction());
      } else {
        dispatch(getMeAction()).then((payload) => {
          if (payload.payload.user.subscriptionId) {
            dispatch(getAllUserProfileAction());
          }
        });
      }
    } else {
      dispatch(toggleLoading());
    }
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <Route />
    </div>
  );
}

export default App;
