import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectIfNotSubscribe({ children }) {
  const user = useSelector((state) => state.user.data.user);
  if (new Date(user?.expiredDate * 1000) < new Date()) {
    return <Navigate to="/package" />;
  }
  return children;
}

export default RedirectIfNotSubscribe;
