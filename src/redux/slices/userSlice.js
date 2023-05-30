import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchStatus: (state) => {
      if (localStorage.getItem("token")) state.isLoggedIn = true;
    },
    setStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { fetchStatus, setStatus } = userSlice.actions;
