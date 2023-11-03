import { useEffect } from "react";
import Route from "./router/Route";
import { useDispatch, useSelector } from "react-redux";
import { getMeAction } from "./store/slice/authSlice";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getMeAction());
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Route />
    </div>
  );
}

export default App;
