import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetPersons } from "./persons.service";
import { randomNumber } from "./../../utils";

export const getPersons = createAsyncThunk("user/persons", async () => {
  const result = await apiGetPersons();

  // return result.map((item, i) => {
  //   return {
  //     ...item,
  //     ["Прочитано"]: [
  //       ...item["Прочитано"].map((item) => {
  //         return {
  //           ...item,
  //           selected: false,
  //           raiting: randomNumber(1, 5),
  //         };
  //       }),
  //     ],
  //     ["Мероприятия"]: [
  //       ...item["Мероприятия"].map((item) => {
  //         return {
  //           ...item,
  //           selected: false,
  //           raiting: randomNumber(1, 5),
  //           img:
  //             "https://cdn1.ozone.ru/s3/cms/80/t4d/wc500/banner_320x320_8.jpg",
  //         };
  //       }),
  //     ],
  //     ["Рекомендации"]: [
  //       ...item["Рекомендации"].map((item) => {
  //         return {
  //           ...item,
  //           selected: false,
  //           raiting: randomNumber(1, 5),
  //           img: "https://cdn1.ozone.ru/s3/multimedia-m/wc1200/6020094682.jpg",
  //         };
  //       }),
  //     ],
  //   };
  // });
  return result;
});

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
