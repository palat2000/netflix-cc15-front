import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Authenticate({ children }) {
  const { data } = useSelector((store) => store.user);
  console.log(data);
  if (!data) {
    return <Navigate to="/home" />;
  }
  if (!data.isActive) {
    return <Navigate to="/auth/package" />;
  }
  return children;
}

export default Authenticate;
