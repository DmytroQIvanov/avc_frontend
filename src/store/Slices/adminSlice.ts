import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../Interfaces/IUser";

export interface AdminState {
  login: string | null;
  loading: boolean;
  firstFetch: boolean;
  orders: IOrder[];
}

const initialState: AdminState = {
  login: null,
  loading: false,
  firstFetch: false,
  orders: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLoginStart: (state, data) => {
      state.loading = true;
    },
    adminLoginSuccess: (state, data) => {
      state.loading = false;
      state.login = data.payload.login;
      state.firstFetch = true;
    },
    adminLoginError: (state, data) => {
      state.loading = false;
      state.firstFetch = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { adminLoginStart, adminLoginSuccess, adminLoginError } =
  adminSlice.actions;

export default adminSlice.reducer;
