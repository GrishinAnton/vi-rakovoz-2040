import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLoginUser } from "./user.service";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData) => {
    const { login, message, role, token } = await apiLoginUser(loginData);

    return { login, message, role, token };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      login: "",
      role: null,
    },
  },
  reducers: {},
  extraReducers: {
    // Авторизация
    [loginUser.fulfilled.toString()]: (state, action) => {
      state.info.login = action.payload.login;
      state.info.role = action.payload.role;
    },
  },
});

export const userReducer = userSlice.reducer;
// export const {} = userSlice.actions;
