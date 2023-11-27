import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userReducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
