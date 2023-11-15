import axios from "axios";
import { BACKEND_URL } from "./env.js";
import {
  getAccessToken,
  getChooseProfileAccessToken,
  removeAccessToken,
  removeChooseProfileAccessToken,
} from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  const profileToken = getChooseProfileAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
    if (error.response.status === 403) {
      removeChooseProfileAccessToken();
      console.log(error.response);
      window.location.href = "/choose-profile";
    }
    return Promise.reject(error);
  }
);

export default axios;
