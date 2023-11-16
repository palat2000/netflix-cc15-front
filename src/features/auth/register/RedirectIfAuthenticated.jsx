import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectIfAuthenticated({ children }) {
  const { data } = useSelector((store) => store.user);
  console.log(data);
  if (data) {
    return <Navigate to="/browse" />;
  }
  return children;
}

export default RedirectIfAuthenticated;
