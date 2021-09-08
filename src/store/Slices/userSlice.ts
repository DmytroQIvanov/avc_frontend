import { IUser } from "../../Interfaces/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  user: IUser | null;
  loading: boolean;
  firstFetch: boolean;
  language: string;
  errorMessage: string | null;
}

const initialState: CounterState = {
  user: null,
  loading: false,
  firstFetch: false,
  errorMessage: null,
  language: "ru",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginStart: (state, data) => {
      state.loading = true;
    },
    userLoginSuccess: (state, data) => {
      state.firstFetch = true;
      state.loading = false;
      state.user = data.payload.user;
    },
    userLoginError: (state, data) => {
      state.firstFetch = true;
      state.loading = false;
      // state.errorMessage = data.payload.data.message;
    },
    userChangeLanguage: (state, data) => {
      state.language = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userLoginError,
  userLoginStart,
  userLoginSuccess,
  userChangeLanguage,
} = userSlice.actions;

export default userSlice.reducer;
