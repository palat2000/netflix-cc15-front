import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RedirectIfAuthenticated({ children }) {
  const user = useSelector((state) => state.user.data.user);
  if (user) {
    return <Navigate to="browse" />;
  }
  return children;
}

export default RedirectIfAuthenticated;
