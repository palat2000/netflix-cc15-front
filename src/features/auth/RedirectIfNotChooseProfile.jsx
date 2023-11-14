import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getChooseProfileAccessToken } from "../../utils/local-storage";

function RedirectIfNotChooseProfile({ children }) {
  const userProfile = useSelector((state) => state.user.data.userProfile);
  if (!userProfile) {
    return <Navigate to="/choose-profile" />;
  }
  return children;
}

export default RedirectIfNotChooseProfile;
