import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const setupStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
};
