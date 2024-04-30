import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supaBaseClient";

const initialState = {
  authentication: false,
};

export const checkAuthentication = createAsyncThunk(
  "/checkAuthentication",
  async () => {
    const session = supabase.auth.session();
    return {
      authentication: !!session,
    };
  }
);

export const loginThunk = createAsyncThunk(
  "/loginCheck",
  async ({ email, password }) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        return {
          login: action.payload,
          authentication: action?.payload?.data?.session?.access_token
            ? true
            : false,
          loading: false,
        };
      })
      .addCase(loginThunk.pending, (state, action) => {
        return {
          loading: true,
        };
      })
      .addCase(loginThunk.rejected, (state, action) => {
        return {
          loading: false,
          error: action.payload.error,
        };
      })
      .addCase(checkAuthentication.fulfilled, (state, action) => {
        return {
          ...state,
          authentication: action.payload.authentication,
        };
      });
  },
});

export const { loginCheck } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
