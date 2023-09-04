import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    onOfBar: localStorage.getItem('onOfBar') || "sm-column",
  },
  reducers: {
    usersArray: (state, { payload }) => {
      state.data = payload;
    },
    setClass: (state, { payload }) => {
      state.onOfBar = payload;
      localStorage.setItem('onOfBar', payload);
    },
  },
});

export const { usersArray, setClass } = userSlice.actions;

export default userSlice.reducer;
