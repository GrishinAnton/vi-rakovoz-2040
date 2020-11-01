import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isActivity: true,
    isKr: true,
  },
  reducers: {
    disabledActivity(state, action) {
      state.isActivity = !state.isActivity;
    },
    disabledKr(state, action) {
      state.isKr = !state.isKr;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { disabledActivity, disabledKr } = settingsSlice.actions;
