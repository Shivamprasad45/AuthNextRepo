import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Featuers/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
  },
});
