import { useEffect } from "react";
import Route from "./router/Route";
import { useDispatch, useSelector } from "react-redux";
import { getMeAction } from "./store/slice/authSlice";
import { getAccessToken } from "./utils/local-storage";
import LoadingPage from "./pages/LoadingPage";
import { endWatchingAction, isNotWatchPage } from "./store/slice/watchPageSlice";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.user);

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(getMeAction());
      dispatch(isNotWatchPage())
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
