import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

export const LOGIN_USER = "LOGIN USER";

const intitialState = {
    authenticated: false
};
const UserSlice = createSlice({})
const reducer = (state = intitialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, authenticated: true };
  
      default:
        return state;
    }
  };

export default UserSlice.reducer;