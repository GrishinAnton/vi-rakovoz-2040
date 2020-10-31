import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetPersons } from "./persons.service";

export const getPersons = createAsyncThunk("user/persons", apiGetPersons);

const userSlice = createSlice({
  name: "persons",
  initialState: {
    persons: [],
  },
  reducers: {},
  extraReducers: {
    [getPersons.fulfilled.toString()]: (state, action) => {
      state.persons = action.payload;
    },
  },
});

export const personsReducer = userSlice.reducer;
// export const {} = userSlice.actions;
