import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { currentUsers: [] },
  reducers: {
    setUsers(state, action) {
      return {
        ...state,
        currentUsers: action.payload,
      };
    },
  },
});

export const userActions = userSlice.actions;
