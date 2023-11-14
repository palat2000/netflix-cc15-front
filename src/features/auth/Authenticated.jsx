import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Authenticated({ children }) {
  const user = useSelector((state) => state.user.data.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Authenticated;
