import { IUser } from "../../Interfaces/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface usersState {
  users: IUser[];
  loading: boolean;
  errorMessage: string | null;
}

const initialState: usersState = {
  users: [],
  loading: false,
  errorMessage: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersStart: (state, data) => {
      state.loading = true;
    },
    getUsersSuccess: (state, data) => {
      state.loading = false;
      state.users = data.payload;
    },
    getUsersError: (state, data) => {
      state.loading = false;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersError } =
  usersSlice.actions;

export default usersSlice.reducer;
