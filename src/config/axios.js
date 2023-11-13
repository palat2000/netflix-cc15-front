import axios from "axios";
import { BACKEND_URL } from "./env.js";
import {
  getAccessToken,
  getChooseProfileAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  const profileId = getChooseProfileAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.AuthorizationProfile = `Bearer ${profileId}`;
  }
  if (localStorage.getItem("CHOOSE_PROFILE_ACCESS_TOKEN")) {
    config.headers.authorizationprofile = `Bearer ${localStorage.getItem(
      "CHOOSE_PROFILE_ACCESS_TOKEN"
    )}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeAccessToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
