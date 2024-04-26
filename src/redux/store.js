import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import SignUpSlice from "./SignUpSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    register: SignUpSlice,
  },
});

export default store;
