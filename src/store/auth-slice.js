import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('token');

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: initialState,
  },
  reducers: {
      login(state,action){
        state.isAuthenticated = action.payload;
      },
      logout(state){
        state.isAuthenticated = false;
      }
  }

});

export const authActions = authSlice.actions;
