import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetPersons } from "./persons.service";
import { randomNumber } from "./../../utils";

export const getPersons = createAsyncThunk("user/persons", async () => {
  const result = await apiGetPersons();

  const data = result.map((item, i) => {
    return {
      ...item,
      ["Прочитано"]: [
        ...item["Прочитано"].map((item) => {
          return {
            ...item,
            selected: false,
            raiting: randomNumber(1, 5),
          };
        }),
      ],
      ["Мероприятия"]: [
        ...item["Мероприятия"].map((item) => {
          return {
            ...item,
            selected: false,
            raiting: randomNumber(1, 5),
          };
        }),
      ],
      ["Рекомендации"]: [
        ...item["Рекомендации"].map((item) => {
          return { ...item, selected: false, raiting: randomNumber(1, 5) };
        }),
      ],
    };
  });
  return data;
});

const userSlice = createSlice({
  name: "persons",
  initialState: {
    persons: [],
  },
  reducers: {},
  extraReducers: {
    [getPersons.fulfilled.toString()]: (state, action) => {
      console.log(action, "action");
      state.persons = action.payload;
    },
  },
});

export const personsReducer = userSlice.reducer;
// export const {} = userSlice.actions;
