import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    isActivity: true,
  },
  reducers: {
    disabledActivity(state, action) {
      state.isActivity = !state.isActivity;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { disabledActivity } = settingsSlice.actions;
