import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supaBaseClient";

const initialState = {};

export const signUps = createAsyncThunk("auth/signUp", async (values) => {
  try {
    const response = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err; // veya isteğe bağlı bir hata mesajı döndürülebilir
  }
});

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
        return {
          loading: false,
          error: action.payload.error,
        };
      });
  },
});

export const { signUp } = SignUpSlice.actions;
export const selectsignup = (state) => state.selectsignup;
export default SignUpSlice.reducer;
