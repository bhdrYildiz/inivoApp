import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import SignUpSlice from "./SignUpSlice";
import salesSlice from "./salesSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    register: SignUpSlice,
    orders: salesSlice,
  },
});

export default store;
