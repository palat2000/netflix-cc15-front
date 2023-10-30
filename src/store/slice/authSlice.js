import { createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const initialState = {
  authUser: null,
  loading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});
