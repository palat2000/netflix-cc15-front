import { Navigate } from "react-router-dom";
import { getChooseProfileAccessToken } from "../../utils/local-storage";

function RedirectIfNotChooseProfile({ children }) {
  if (!getChooseProfileAccessToken()) {
    return <Navigate to="/choose-profile" />;
  }
  return children;
}

export default RedirectIfNotChooseProfile;
