import axios from "axios";
import { BACKEND_URL } from "./env.js";
import {
  getAccessToken,
  getChooseProfileAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  const authToken = getAccessToken();
  const profileToken = getChooseProfileAccessToken();
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
    config.headers.Profile = profileToken;
  }
  if (profileToken) {
    config.headers.authorizationprofile = `Bearer ${profileToken}`;
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
    if (error.response.status === 402) {
      window.location.href = "/package";
    }
    return Promise.reject(error);
  }
);

export default axios;
