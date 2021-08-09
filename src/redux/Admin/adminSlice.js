import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin:false,
  },

  reducers: {
    adminActive: (state) => {
      state.admin = !state.admin;
    },
  },
});

export const { adminActive } = adminSlice.actions;

export default adminSlice.reducer;
