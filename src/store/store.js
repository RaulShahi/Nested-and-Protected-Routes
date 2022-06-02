import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user-slice";
import { postSlice } from "./post-slice";
import { formSlice } from "./form-slice";
import { authSlice } from "./auth-slice";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
    form: formSlice.reducer,
    auth: authSlice.reducer
  },
});
