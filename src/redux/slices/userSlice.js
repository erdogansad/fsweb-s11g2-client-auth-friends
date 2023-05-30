import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setStatus } = userSlice.actions;
