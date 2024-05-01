import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supaBaseClient";

const initialState = {
  authentication: false,
  errorMessage: null,
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
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      return data;
    } catch (err) {
      return err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          login: action.payload,
          email: action?.payload?.user?.email,
          authentication: action?.payload?.session?.access_token ? true : false,
          loading: false,
          errorMessage: null,
        };
      })
      .addCase(loginThunk.pending, (state, action) => {
        return {
          loading: true,
          errorMessage: null,
        };
      })
      .addCase(loginThunk.rejected, (state, action) => {
        return {
          loading: false,
          error: action.payload.error,
          errorMessage:
            action.payload.errorMessage || "Invalid login credentials",
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
export const selectAuth = (state) => state.auth.authentication;
export default authSlice.reducer;
