import { useEffect } from "react";
import Route from "./router/Route";
import { useDispatch, useSelector } from "react-redux";
import { getMeAction } from "./store/slice/authSlice";
import { getAccessToken } from "./utils/local-storage";

function App() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => store.user);

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(getMeAction());
    }
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Route />
    </div>
  );
}

export default App;
