import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    userInput(state, action) {
      return {
        ...state,
        [action.payload.name]: action.payload.val,
      };
    },
    clearInput(state) {
        return{
            ...state,
            username:'',
            password: ''
        }
    },
  },
});

export const formActions = formSlice.actions;
