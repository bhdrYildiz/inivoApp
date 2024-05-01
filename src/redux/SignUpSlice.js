import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supaBaseClient";

const initialState = {
  loading: false,
  error: null,
  signUp: null,
};

export const signUps = createAsyncThunk(
  "auth/signUp",
  async (values) => {
    try {
      const response = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);

const SignUpSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUps.fulfilled, (state, action) => {
        return {
          signUp: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(signUps.pending, (state, action) => {
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(signUps.rejected, (state, action) => {
        state.loading = false;
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
       
      });
  },
});

export const { signUp } = SignUpSlice.actions;
export const selectsignup = (state) => state.register;
export default SignUpSlice.reducer;
